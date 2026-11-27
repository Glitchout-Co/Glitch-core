import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createCharacterKnowledge, validateCharacterKnowledge } from '../../src/engines/response/knowledge.js';

const data = JSON.parse(readFileSync(new URL('../../data/knowledge/character.json', import.meta.url), 'utf8'));

test('character knowledge validates and retrieves immutable approved entries', () => {
  const validated = validateCharacterKnowledge(data);
  assert.ok(validated);
  const knowledge = createCharacterKnowledge(data);
  const entry = knowledge.retrieve('origin');
  assert.match(entry.text, /fictional origin/i);
  assert.equal(Object.isFrozen(entry), true);
  assert.equal(knowledge.retrieve('unknown'), null);
});

test('character knowledge rejects malformed, oversized and unknown-pose entries', () => {
  assert.equal(validateCharacterKnowledge({}), null);
  const oversized = structuredClone(data);
  oversized.entries.origin.text = 'x'.repeat(701);
  assert.equal(validateCharacterKnowledge(oversized), null);
  const unknownPose = structuredClone(data);
  unknownPose.entries.origin.pose = 'flying';
  assert.equal(validateCharacterKnowledge(unknownPose), null);
  const invalidId = structuredClone(data);
  invalidId.entries['Not Valid'] = invalidId.entries.origin;
  assert.equal(validateCharacterKnowledge(invalidId), null);
});
