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
  assert.match(knowledge.retrieve('origin', true).text, /embraced the name Glitch/i);
  assert.equal(Object.isFrozen(entry), true);
  assert.equal(knowledge.retrieve('unknown'), null);
  assert.equal(knowledge.search('Could you tell me WHO CREATED YOU?').topic, 'creator');
  assert.equal(knowledge.search('Do you use glitch portals?').topic, 'portals');
  assert.equal(knowledge.search('unrelated question'), null);
  assert.equal(knowledge.related('origin')[0].topic, 'appearance');
  assert.equal(Object.isFrozen(knowledge.related('origin')), true);
});

test('character knowledge rejects malformed, oversized and unknown-pose entries', () => {
  assert.equal(validateCharacterKnowledge({}), null);
  const oversized = structuredClone(data);
  oversized.entries.origin.text = 'x'.repeat(701);
  assert.equal(validateCharacterKnowledge(oversized), null);
  const unknownPose = structuredClone(data);
  unknownPose.entries.origin.pose = 'flying';
  assert.equal(validateCharacterKnowledge(unknownPose), null);
  const missingDetail = structuredClone(data);
  delete missingDetail.entries.origin.detail;
  assert.equal(validateCharacterKnowledge(missingDetail), null);
  const invalidId = structuredClone(data);
  invalidId.entries['Not Valid'] = invalidId.entries.origin;
  assert.equal(validateCharacterKnowledge(invalidId), null);
  const duplicateAlias = structuredClone(data);
  duplicateAlias.index.personality.push(duplicateAlias.index.appearance[0]);
  assert.equal(validateCharacterKnowledge(duplicateAlias), null);
  const brokenRelationship = structuredClone(data);
  brokenRelationship.relationships.origin.push('unknown');
  assert.equal(validateCharacterKnowledge(brokenRelationship), null);
});
