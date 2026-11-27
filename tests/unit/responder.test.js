import test from 'node:test';
import assert from 'node:assert/strict';
import { respondToMessage } from '../../src/engines/response/responder.js';

test('local responder recognises the approved initial intent set', () => {
  assert.equal(respondToMessage('Hello!').intent, 'greeting');
  assert.equal(respondToMessage('Who are you?').intent, 'identity');
  assert.equal(respondToMessage('What can you do?').intent, 'capabilities');
  assert.equal(respondToMessage('Can you help me write code?').intent, 'assistance-limited');
  assert.equal(respondToMessage('Thanks').intent, 'thanks');
  assert.equal(respondToMessage('Goodbye').intent, 'goodbye');
});

test('local responder is honest about unsupported and invalid input', () => {
  const fallback = respondToMessage('Calculate orbital mechanics');
  assert.equal(fallback.intent, 'fallback');
  assert.match(fallback.text, /not sure/i);
  assert.equal(respondToMessage('   ').intent, 'invalid');
  assert.equal(respondToMessage(null).intent, 'invalid');
  assert.equal(Object.isFrozen(fallback), true);
});

test('identity response distinguishes fiction from implementation', () => {
  const response = respondToMessage('Tell me about yourself');
  assert.match(response.text, /software, artwork and data/i);
  assert.match(response.text, /not a living or conscious creature/i);
});
