export function createRestBehaviour({
  character,
  presence,
  schedule = (callback, delay) => setTimeout(callback, delay),
  cancel = timer => clearTimeout(timer),
  restDelay = 30000
}) {
  if (!character?.setPose || !presence?.hold || !presence?.release) throw new TypeError('Rest behaviour requires character and presence adapters.');
  let lifecycle = 'ready';
  let timer = null;
  let resting = false;

  const stopTimer = () => {
    if (timer !== null) cancel(timer);
    timer = null;
  };
  const queue = () => {
    if (lifecycle !== 'running' || resting || timer !== null) return;
    timer = schedule(() => {
      timer = null;
      if (lifecycle !== 'running') return;
      resting = true;
      presence.hold();
      character.setPose('resting');
    }, restDelay);
  };

  return Object.freeze({
    setLifecycle(nextLifecycle) {
      lifecycle = nextLifecycle;
      if (lifecycle === 'running') queue();
      else {
        stopTimer();
        if (resting) presence.release();
        resting = false;
      }
    },
    notifyActivity() {
      if (lifecycle !== 'running') return Object.freeze({ accepted: false, woke: false });
      stopTimer();
      const woke = resting;
      if (woke) {
        resting = false;
        character.setPose('greeting');
        presence.release();
      }
      queue();
      return Object.freeze({ accepted: true, woke });
    },
    snapshot: () => Object.freeze({ lifecycle, scheduled: timer !== null, resting })
  });
}
