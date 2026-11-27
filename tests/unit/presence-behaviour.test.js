import test from 'node:test';
import assert from 'node:assert/strict';
import { createPresenceBehaviour, selectPresenceAction } from '../../src/engines/behaviour/presence.js';

test('presence action selection uses only approved actions', () => {
  assert.deepEqual(selectPresenceAction(0), { type: 'pose', value: 'standing' });
  assert.deepEqual(selectPresenceAction(1), { type: 'move', value: 'centre' });
  assert.equal(selectPresenceAction(1, true).type, 'pose');
  assert.throws(() => selectPresenceAction(-0.1), RangeError);
  assert.throws(() => selectPresenceAction(Number.NaN), RangeError);
});

test('presence routine schedules only while running and cancels on pause', () => {
  const calls = [];
  const scheduled = [];
  const cancelled = [];
  const character = {
    setPose: pose => calls.push(['pose', pose]),
    move: direction => calls.push(['move', direction])
  };
  const presence = createPresenceBehaviour({
    character,
    random: () => 0,
    schedule: (callback, delay) => { const token = { callback, delay }; scheduled.push(token); return token; },
    cancel: token => cancelled.push(token)
  });

  assert.deepEqual(presence.snapshot(), { lifecycle: 'ready', scheduled: false, held: false });
  presence.setLifecycle('running');
  assert.equal(scheduled.length, 1);
  assert.equal(scheduled[0].delay, 7000);
  scheduled[0].callback();
  assert.deepEqual(calls, [['pose', 'standing']]);
  assert.equal(scheduled.length, 2);
  presence.setLifecycle('paused');
  assert.deepEqual(cancelled, [scheduled[1]]);
  assert.deepEqual(presence.snapshot(), { lifecycle: 'paused', scheduled: false, held: false });
});

test('button-style reset restarts the interval and interaction hold blocks scheduling', () => {
  const scheduled = [];
  const cancelled = [];
  const presence = createPresenceBehaviour({
    character: { setPose() {}, move() {} },
    random: () => 0,
    schedule: callback => { const token = { callback }; scheduled.push(token); return token; },
    cancel: token => cancelled.push(token)
  });
  presence.setLifecycle('running');
  presence.reset();
  assert.deepEqual(cancelled, [scheduled[0]]);
  assert.equal(scheduled.length, 2);
  presence.hold();
  assert.equal(presence.snapshot().held, true);
  assert.deepEqual(cancelled, [scheduled[0], scheduled[1]]);
  presence.reset();
  assert.equal(scheduled.length, 2);
  presence.release();
  assert.equal(scheduled.length, 3);
});

test('reduced motion excludes positional movement and lengthens intervals', () => {
  const scheduled = [];
  const presence = createPresenceBehaviour({
    character: { setPose() {}, move() { throw new Error('movement must not run'); } },
    random: () => 1,
    isReducedMotion: () => true,
    schedule: (callback, delay) => { scheduled.push({ callback, delay }); return scheduled.at(-1); }
  });
  presence.setLifecycle('running');
  assert.equal(scheduled[0].delay, 18000);
  scheduled[0].callback();
  assert.equal(scheduled.length, 2);
});
