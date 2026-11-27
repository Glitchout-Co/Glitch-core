import { createEventBus } from './events.js';
import { Lifecycle, nextLifecycle } from './lifecycle.js';

export function createController() {
  const bus = createEventBus();
  let state = Lifecycle.READY;
  let busy = false;
  const snapshot = () => Object.freeze({ lifecycle: state, mode: 'guest' });
  return Object.freeze({
    snapshot,
    subscribe: listener => bus.subscribe('lifecycle.changed', listener),
    dispatch(command) {
      if (busy) return Object.freeze({ accepted: false, reason: 'busy', ...snapshot() });
      const next = nextLifecycle(state, command);
      if (!next) return Object.freeze({ accepted: false, reason: 'invalid transition', ...snapshot() });
      busy = true;
      try {
        state = next;
        const failures = bus.publish('lifecycle.changed', snapshot());
        return Object.freeze({ accepted: true, listenerFailures: failures, ...snapshot() });
      } finally { busy = false; }
    }
  });
}
