export function createPetInteraction({
  character,
  presence,
  schedule = (callback, delay) => setTimeout(callback, delay),
  cancel = timer => clearTimeout(timer),
  duration = 2600
}) {
  if (!character?.setPose || !presence?.hold || !presence?.release) throw new TypeError('Pet interaction requires character and presence adapters.');
  let lifecycle = 'ready';
  let timer = null;

  const cancelReaction = () => {
    if (timer !== null) cancel(timer);
    timer = null;
  };

  return Object.freeze({
    setLifecycle(nextLifecycle) {
      lifecycle = nextLifecycle;
      if (lifecycle !== 'running') {
        cancelReaction();
        presence.release();
      }
    },
    pet() {
      if (lifecycle !== 'running') return Object.freeze({ accepted: false });
      cancelReaction();
      presence.hold();
      character.setPose('playful');
      timer = schedule(() => {
        timer = null;
        if (lifecycle !== 'running') return;
        character.setPose('sitting');
        presence.release();
      }, duration);
      return Object.freeze({ accepted: true });
    },
    cancel() {
      const wasReacting = timer !== null;
      cancelReaction();
      if (wasReacting) presence.release();
      return Object.freeze({ cancelled: wasReacting });
    },
    snapshot: () => Object.freeze({ lifecycle, reacting: timer !== null })
  });
}
