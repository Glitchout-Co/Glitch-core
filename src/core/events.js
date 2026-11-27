export function createEventBus() {
  const listeners = new Map();
  return Object.freeze({
    subscribe(type, listener) {
      if (typeof type !== 'string' || !type || typeof listener !== 'function') {
        throw new TypeError('Invalid event subscription');
      }
      const group = listeners.get(type) ?? new Set();
      group.add(listener);
      listeners.set(type, group);
      return () => {
        group.delete(listener);
        if (!group.size && listeners.get(type) === group) listeners.delete(type);
      };
    },
    publish(type, payload) {
      let failures = 0;
      for (const listener of [...(listeners.get(type) ?? [])]) {
        try { listener(payload); } catch { failures += 1; }
      }
      return failures;
    }
  });
}
