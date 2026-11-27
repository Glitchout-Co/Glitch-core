import test from 'node:test';
import assert from 'node:assert/strict';
import { createRestBehaviour } from '../../src/engines/behaviour/rest.js';

test('quiet session activity settles Glitch into rest and button activity wakes her', () => {
  const poses = [];
  const presenceCalls = [];
  const timers = [];
  const rest = createRestBehaviour({
    character: { setPose: pose => poses.push(pose) },
    presence: { hold: () => presenceCalls.push('hold'), release: () => presenceCalls.push('release') },
    schedule: (callback, delay) => { const timer = { callback, delay }; timers.push(timer); return timer; }
  });
  rest.setLifecycle('running');
  assert.equal(timers[0].delay, 30000);
  timers[0].callback();
  assert.deepEqual(poses, ['resting']);
  assert.deepEqual(presenceCalls, ['hold']);
  assert.deepEqual(rest.snapshot(), { lifecycle: 'running', scheduled: false, resting: true });
  assert.deepEqual(rest.notifyActivity(), { accepted: true, woke: true });
  assert.deepEqual(poses, ['resting', 'greeting']);
  assert.deepEqual(presenceCalls, ['hold', 'release']);
  assert.equal(timers.length, 2);
  assert.deepEqual(rest.snapshot(), { lifecycle: 'running', scheduled: true, resting: false });
});

test('button activity resets quiet timer and pause cancels it', () => {
  const timers = [];
  const cancelled = [];
  const rest = createRestBehaviour({
    character: { setPose() {} },
    presence: { hold() {}, release() {} },
    schedule: callback => { const timer = { callback }; timers.push(timer); return timer; },
    cancel: timer => cancelled.push(timer)
  });
  assert.deepEqual(rest.notifyActivity(), { accepted: false, woke: false });
  rest.setLifecycle('running');
  rest.notifyActivity();
  assert.deepEqual(cancelled, [timers[0]]);
  assert.equal(timers.length, 2);
  rest.setLifecycle('paused');
  assert.deepEqual(cancelled, [timers[0], timers[1]]);
  assert.deepEqual(rest.snapshot(), { lifecycle: 'paused', scheduled: false, resting: false });
});

test('pause releases a resting presence hold', () => {
  const presenceCalls = [];
  let timer;
  const rest = createRestBehaviour({
    character: { setPose() {} },
    presence: { hold: () => presenceCalls.push('hold'), release: () => presenceCalls.push('release') },
    schedule: callback => { timer = { callback }; return timer; }
  });
  rest.setLifecycle('running');
  timer.callback();
  rest.setLifecycle('paused');
  assert.deepEqual(presenceCalls, ['hold', 'release']);
});
