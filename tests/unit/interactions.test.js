import test from 'node:test';
import assert from 'node:assert/strict';
import { createPetInteraction } from '../../src/engines/behaviour/interactions.js';

test('pet interaction interrupts presence and returns safely to idle', () => {
  const poses = [];
  const presenceCalls = [];
  const timers = [];
  const interaction = createPetInteraction({
    character: { setPose: pose => poses.push(pose) },
    presence: { hold: () => presenceCalls.push('hold'), release: () => presenceCalls.push('release') },
    schedule: (callback, delay) => { const timer = { callback, delay }; timers.push(timer); return timer; }
  });
  assert.deepEqual(interaction.pet(), { accepted: false });
  interaction.setLifecycle('running');
  assert.deepEqual(interaction.pet(), { accepted: true });
  assert.deepEqual(poses, ['playful']);
  assert.deepEqual(presenceCalls, ['hold']);
  assert.equal(timers[0].delay, 2600);
  timers[0].callback();
  assert.deepEqual(poses, ['playful', 'sitting']);
  assert.deepEqual(presenceCalls, ['hold', 'release']);
  assert.deepEqual(interaction.snapshot(), { lifecycle: 'running', reacting: false });
});

test('pause cancels an active pet reaction', () => {
  const cancelled = [];
  const presenceCalls = [];
  const timer = {};
  const interaction = createPetInteraction({
    character: { setPose() {} },
    presence: { hold: () => presenceCalls.push('hold'), release: () => presenceCalls.push('release') },
    schedule: () => timer,
    cancel: value => cancelled.push(value)
  });
  interaction.setLifecycle('running');
  interaction.pet();
  interaction.setLifecycle('paused');
  assert.deepEqual(cancelled, [timer]);
  assert.deepEqual(presenceCalls, ['hold', 'release']);
  assert.deepEqual(interaction.snapshot(), { lifecycle: 'paused', reacting: false });
});

test('repeated petting restarts the reaction interval', () => {
  const timers = [];
  const cancelled = [];
  const interaction = createPetInteraction({
    character: { setPose() {} },
    presence: { hold() {}, release() {} },
    schedule: callback => { const timer = { callback }; timers.push(timer); return timer; },
    cancel: timer => cancelled.push(timer)
  });
  interaction.setLifecycle('running');
  interaction.pet();
  interaction.pet();
  assert.equal(timers.length, 2);
  assert.deepEqual(cancelled, [timers[0]]);
});

test('higher-priority interaction can cancel petting', () => {
  const timer = {};
  const cancelled = [];
  const presenceCalls = [];
  const interaction = createPetInteraction({
    character: { setPose() {} },
    presence: { hold: () => presenceCalls.push('hold'), release: () => presenceCalls.push('release') },
    schedule: () => timer,
    cancel: value => cancelled.push(value)
  });
  interaction.setLifecycle('running');
  interaction.pet();
  assert.deepEqual(interaction.cancel(), { cancelled: true });
  assert.deepEqual(cancelled, [timer]);
  assert.deepEqual(presenceCalls, ['hold', 'release']);
});
