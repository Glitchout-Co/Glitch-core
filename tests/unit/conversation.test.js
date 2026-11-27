import test from 'node:test';
import assert from 'node:assert/strict';
import { createConversationInteraction } from '../../src/engines/response/conversation.js';

test('conversation interrupts lower priority presentation and delivers response', () => {
  const poses = [];
  const presenceCalls = [];
  const delivered = [];
  const interrupted = [];
  const timers = [];
  const conversation = createConversationInteraction({
    character: { setPose: pose => poses.push(pose) },
    presence: { hold: () => presenceCalls.push('hold'), release: () => presenceCalls.push('release') },
    respond: message => ({ text: `Hello ${message}`, pose: 'greeting' }),
    deliver: response => delivered.push(response.text),
    interruptLowerPriority: () => interrupted.push(true),
    schedule: (callback, delay) => { const timer = { callback, delay }; timers.push(timer); return timer; }
  });
  assert.deepEqual(conversation.submit('Hi'), { accepted: false });
  conversation.setLifecycle('running');
  assert.deepEqual(conversation.submit('friend'), { accepted: true });
  assert.deepEqual(interrupted, [true]);
  assert.deepEqual(poses, ['thinking']);
  assert.deepEqual(presenceCalls, ['hold']);
  assert.equal(timers[0].delay, 450);
  timers[0].callback();
  assert.deepEqual(poses, ['thinking', 'greeting']);
  assert.deepEqual(delivered, ['Hello friend']);
  assert.deepEqual(presenceCalls, ['hold', 'release']);
});

test('pause cancels pending conversation response', () => {
  const timer = {};
  const cancelled = [];
  const delivered = [];
  const conversation = createConversationInteraction({
    character: { setPose() {} },
    presence: { hold() {}, release() {} },
    respond: () => ({ text: 'response', pose: 'sitting' }),
    deliver: response => delivered.push(response),
    schedule: () => timer,
    cancel: value => cancelled.push(value)
  });
  conversation.setLifecycle('running');
  conversation.submit('hello');
  conversation.setLifecycle('paused');
  assert.deepEqual(cancelled, [timer]);
  assert.deepEqual(delivered, []);
  assert.deepEqual(conversation.snapshot(), { lifecycle: 'paused', responding: false });
});

test('reduced motion removes artificial response delay', () => {
  let delay;
  const conversation = createConversationInteraction({
    character: { setPose() {} }, presence: { hold() {}, release() {} },
    respond: () => ({ text: 'response', pose: 'sitting' }), deliver() {},
    isReducedMotion: () => true,
    schedule: (callback, value) => { delay = value; return { callback }; }
  });
  conversation.setLifecycle('running');
  conversation.submit('hello');
  assert.equal(delay, 0);
});
