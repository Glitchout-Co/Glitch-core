import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createResponder, validateDialogue } from '../../src/engines/response/responder.js';
import { createCharacterKnowledge } from '../../src/engines/response/knowledge.js';

const dialogue = JSON.parse(readFileSync(new URL('../../data/dialogue/core.json', import.meta.url), 'utf8'));
const knowledge = JSON.parse(readFileSync(new URL('../../data/knowledge/character.json', import.meta.url), 'utf8'));
const responder = () => createResponder(dialogue, createCharacterKnowledge(knowledge));

test('dialogue package validates and initial intents remain available', () => {
  assert.ok(validateDialogue(dialogue));
  const local = responder();
  assert.equal(local.respond('Hello!').intent, 'greeting');
  assert.equal(local.respond('Who are you?').intent, 'identity');
  assert.equal(local.respond('What can you do?').intent, 'capabilities');
  assert.equal(local.respond('Can you help me write code?').intent, 'assistance-limited');
  assert.equal(local.respond('Thanks').intent, 'thanks');
  assert.equal(local.respond('Goodbye').intent, 'goodbye');
});

test('dialogue validation rejects missing, oversized or unknown-pose entries', () => {
  assert.equal(validateDialogue({}), null);
  const missing = structuredClone(dialogue);
  delete missing.responses.fallback;
  assert.equal(validateDialogue(missing), null);
  const oversized = structuredClone(dialogue);
  oversized.responses.greeting.text = 'x'.repeat(601);
  assert.equal(validateDialogue(oversized), null);
  const unknownPose = structuredClone(dialogue);
  unknownPose.responses.greeting.pose = 'flying';
  assert.equal(validateDialogue(unknownPose), null);
  assert.throws(() => createResponder(missing, createCharacterKnowledge(knowledge)), TypeError);
});

test('responder is honest about unsupported and invalid input', () => {
  const local = responder();
  const fallback = local.respond('Calculate orbital mechanics');
  assert.equal(fallback.intent, 'fallback');
  assert.match(fallback.text, /not sure/i);
  assert.equal(local.respond('   ').intent, 'invalid');
  assert.equal(local.respond(null).intent, 'invalid');
  assert.equal(Object.isFrozen(fallback), true);
});

test('identity response distinguishes fiction from implementation', () => {
  const response = responder().respond('Tell me about yourself');
  assert.match(response.text, /software, artwork and data/i);
  assert.match(response.text, /not a living or conscious creature/i);
});

test('responder retrieves established character facts without treating them as capabilities', () => {
  const local = responder();
  assert.equal(local.respond('What do you look like?').intent, 'knowledge:appearance');
  assert.match(local.respond('What is your favourite treat?').text, /Pixel Berries/);
  assert.match(local.respond('Why do you wear your collar?').text, /does not represent ownership/i);
  assert.match(local.respond('Are you conscious?').text, /not a living or conscious creature/i);
  assert.match(local.respond('Who created you?').text, /parental figure/i);
  assert.match(local.respond('Tell me about glitch portals').text, /independently authorised digital worlds/i);
  assert.match(local.respond('Tell me more').text, /approved integrations/i);
  assert.match(local.respond('What is your philosophy?').text, /imperfection needs to be fixed/i);
});

test('short follow-ups expand the latest approved character topic', () => {
  const variations = ['Tell me more', 'What else?', 'Why?', 'How so?', 'Go on'];
  for (const followup of variations) {
    const local = responder();
    local.respond('What is your origin?');
    const response = local.respond(followup);
    assert.equal(response.intent, 'knowledge:origin:detail');
    assert.match(response.text, /name Glitch/i);
  }
  const local = responder();
  local.respond('What is your origin?');
  local.respond('What can you do?');
  assert.equal(local.respond('Tell me more').intent, 'movement');
});

test('a completed topic offers validated related subjects instead of repeating detail', () => {
  const local = responder();
  local.respond('Tell me about your origin');
  local.respond('Tell me more');
  const complete = local.respond('What else?');
  assert.equal(complete.intent, 'knowledge:origin:complete');
  assert.match(complete.text, /approved information/i);
  assert.match(complete.text, /my appearance/i);
});

test('temporary context supports relevant follow-ups without retaining messages', () => {
  const local = responder();
  assert.equal(local.respond('Tell me more').intent, 'followup-missing');
  assert.equal(local.respond('Who are you?').intent, 'identity');
  assert.equal(local.respond('Tell me more').intent, 'identity-more');
  assert.equal(local.respond('What can you do?').intent, 'capabilities');
  assert.equal(local.respond('What about movement?').intent, 'movement');
  assert.equal(local.respond("Why can't you help yet?").intent, 'assistance-reason');
  const snapshot = local.snapshot();
  assert.ok(snapshot.recentIntents.length <= 4);
  assert.equal(JSON.stringify(snapshot).includes('Why can'), false);
  assert.equal(Object.isFrozen(snapshot.recentIntents), true);
});

test('disable-style reset clears temporary conversation context', () => {
  const local = responder();
  local.respond('Who are you?');
  assert.equal(local.snapshot().recentIntents.length, 1);
  local.reset();
  assert.deepEqual(local.snapshot().recentIntents, []);
  assert.equal(local.respond('Tell me more').intent, 'followup-missing');
});
