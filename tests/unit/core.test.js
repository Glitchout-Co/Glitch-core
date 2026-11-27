import test from 'node:test';
import assert from 'node:assert/strict';
import { createController } from '../../src/core/controller.js';
import { createEventBus } from '../../src/core/events.js';
import { nextLifecycle } from '../../src/core/lifecycle.js';
import { Priority, comparePriority } from '../../src/core/priorities.js';

test('guest lifecycle supports start, pause, resume and disable', () => {
  const core = createController();
  assert.deepEqual(core.snapshot(), { lifecycle: 'ready', mode: 'guest' });
  for (const [command, state] of [['start','running'],['pause','paused'],['resume','running'],['disable','disabled']]) {
    assert.equal(core.dispatch(command).accepted, true);
    assert.equal(core.snapshot().lifecycle, state);
  }
  assert.equal(core.dispatch('resume').accepted, false);
  assert.equal(core.dispatch('start').accepted, true);
});
test('invalid transitions do not change state', () => {
  const core = createController();
  for (const command of ['resume','pause','unknown','constructor','__proto__']) assert.equal(core.dispatch(command).accepted, false);
  assert.equal(core.snapshot().lifecycle, 'ready');
  assert.equal(nextLifecycle('constructor','start'), null);
});
test('published snapshots are immutable and unsubscribe works', () => {
  const core = createController();
  const received = [];
  const unsubscribe = core.subscribe(state => received.push(state));
  core.dispatch('start'); unsubscribe(); core.dispatch('pause');
  assert.equal(received.length, 1);
  assert.equal(Object.isFrozen(received[0]), true);
  assert.equal(received[0].lifecycle, 'running');
});
test('listener failure does not block other listeners', () => {
  const bus = createEventBus();
  let delivered = false;
  bus.subscribe('test', () => { throw Error('synthetic failure'); });
  bus.subscribe('test', () => { delivered = true; });
  assert.equal(bus.publish('test', null), 1);
  assert.equal(delivered, true);
});
test('nested lifecycle changes are rejected during notification', () => {
  const core = createController();
  let nested;
  core.subscribe(() => { nested = core.dispatch('disable'); });
  core.dispatch('start');
  assert.equal(nested.accepted, false);
  assert.equal(core.snapshot().lifecycle, 'running');
});
test('priority comparisons preserve all established categories', () => {
  for (const incoming of Object.values(Priority)) {
    for (const current of Object.values(Priority)) {
      assert.equal(comparePriority(incoming, current), incoming < current ? 'higher' : incoming > current ? 'lower' : 'equal');
    }
  }
  assert.equal(comparePriority(Priority.ASSISTANCE, Priority.INDEPENDENT), 'higher');
  assert.throws(() => comparePriority(0, Priority.SAFETY), RangeError);
});
