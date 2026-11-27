export function createConversationInteraction({
  character,
  presence,
  respond,
  deliver,
  interruptLowerPriority = () => {},
  schedule = (callback, delay) => setTimeout(callback, delay),
  cancel = timer => clearTimeout(timer),
  isReducedMotion = () => false
}) {
  if (!character?.setPose || !presence?.hold || !presence?.release || typeof respond !== 'function' || typeof deliver !== 'function') {
    throw new TypeError('Conversation interaction requires presentation, presence and response adapters.');
  }
  let lifecycle = 'ready';
  let timer = null;
  const stop = () => { if (timer !== null) cancel(timer); timer = null; };

  return Object.freeze({
    setLifecycle(nextLifecycle) {
      lifecycle = nextLifecycle;
      if (lifecycle !== 'running') { stop(); presence.release(); }
    },
    submit(message) {
      if (lifecycle !== 'running' || typeof message !== 'string' || !message.trim()) return Object.freeze({ accepted: false });
      stop();
      interruptLowerPriority();
      presence.hold();
      character.setPose('thinking');
      const response = respond(message);
      timer = schedule(() => {
        timer = null;
        if (lifecycle !== 'running') return;
        character.setPose(response.pose);
        deliver(response);
        presence.release();
      }, isReducedMotion() ? 0 : 450);
      return Object.freeze({ accepted: true });
    },
    snapshot: () => Object.freeze({ lifecycle, responding: timer !== null })
  });
}
