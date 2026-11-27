const STANDARD_ACTIONS = Object.freeze([
  Object.freeze({ type: 'pose', value: 'standing' }),
  Object.freeze({ type: 'pose', value: 'sitting' }),
  Object.freeze({ type: 'pose', value: 'thinking' }),
  Object.freeze({ type: 'pose', value: 'playful' }),
  Object.freeze({ type: 'pose', value: 'greeting' }),
  Object.freeze({ type: 'move', value: 'left' }),
  Object.freeze({ type: 'move', value: 'right' }),
  Object.freeze({ type: 'move', value: 'centre' })
]);
const REDUCED_MOTION_ACTIONS = Object.freeze(STANDARD_ACTIONS.filter(action => action.type === 'pose'));

export function selectPresenceAction(randomValue, reducedMotion = false) {
  if (!Number.isFinite(randomValue) || randomValue < 0 || randomValue > 1) throw new RangeError('Random value must be between zero and one.');
  const actions = reducedMotion ? REDUCED_MOTION_ACTIONS : STANDARD_ACTIONS;
  return actions[Math.min(actions.length - 1, Math.floor(randomValue * actions.length))];
}

export function createPresenceBehaviour({
  character,
  schedule = (callback, delay) => setTimeout(callback, delay),
  cancel = timer => clearTimeout(timer),
  random = Math.random,
  isReducedMotion = () => false
}) {
  if (!character?.setPose || !character?.move) throw new TypeError('Presence behaviour requires a character presentation adapter.');
  let lifecycle = 'ready';
  let timer = null;

  const execute = action => action.type === 'pose' ? character.setPose(action.value) : character.move(action.value);
  const queue = () => {
    if (lifecycle !== 'running' || timer !== null) return;
    const reduced = Boolean(isReducedMotion());
    const delay = (reduced ? 12000 : 7000) + Math.floor(random() * (reduced ? 6000 : 5000));
    timer = schedule(() => {
      timer = null;
      if (lifecycle !== 'running') return;
      execute(selectPresenceAction(random(), Boolean(isReducedMotion())));
      queue();
    }, delay);
  };
  const stop = () => {
    if (timer !== null) cancel(timer);
    timer = null;
  };

  return Object.freeze({
    setLifecycle(nextLifecycle) {
      lifecycle = nextLifecycle;
      if (lifecycle === 'running') queue(); else stop();
    },
    snapshot: () => Object.freeze({ lifecycle, scheduled: timer !== null })
  });
}
