const DEFAULT_STATES = Object.freeze({
  ready: 'Glitch is waiting for the core to start.', running: 'Glitch is present and the core is running.',
  paused: 'Glitch is resting while the core is paused.', disabled: 'Character presentation is disabled.'
});
const POSITION_LIMIT = 3;

export function nextCharacterPosition(position, direction) {
  if (!Number.isInteger(position)) throw new TypeError('Character position must be an integer.');
  if (direction === 'centre') return 0;
  if (direction === 'left') return Math.max(-POSITION_LIMIT, position - 1);
  if (direction === 'right') return Math.min(POSITION_LIMIT, position + 1);
  return position;
}

export function presentationForLifecycle(lifecycle, states = DEFAULT_STATES) {
  const safeLifecycle = Object.hasOwn(DEFAULT_STATES, lifecycle) ? lifecycle : 'ready';
  return Object.freeze({ lifecycle: safeLifecycle, text: states[safeLifecycle] ?? DEFAULT_STATES[safeLifecycle] });
}

export function createCharacterRenderer({ root, stateText, movementControls = [] }) {
  if (!root || !stateText) throw new TypeError('Character renderer requires its scene elements.');
  const image = root.querySelector('.character__art');
  const fallback = root.querySelector('.character__fallback');
  let states = DEFAULT_STATES;
  let lifecycle = 'ready';
  let position = 0;
  const useFallback = message => {
    if (image) image.hidden = true;
    if (fallback) { fallback.hidden = false; const copy = fallback.querySelector('p'); if (copy) copy.textContent = message; }
  };
  if (image) image.addEventListener('error', () => useFallback('Glitch’s visual is unavailable. Core controls remain available.'));
  return Object.freeze({
    configure(data) { if (data && data.lifecycleText && typeof data.lifecycleText === 'object') states = Object.freeze({ ...DEFAULT_STATES, ...data.lifecycleText }); },
    render(snapshot) {
      const presentation = presentationForLifecycle(snapshot?.lifecycle, states);
      lifecycle = presentation.lifecycle;
      root.dataset.lifecycle = lifecycle;
      stateText.textContent = presentation.text;
      for (const control of movementControls) control.disabled = lifecycle !== 'running';
    },
    move(direction) {
      if (lifecycle !== 'running' || !['left', 'right', 'centre'].includes(direction)) return Object.freeze({ accepted: false, position });
      const previous = position;
      position = nextCharacterPosition(position, direction);
      root.style.setProperty('--character-offset', `${position * 1.75}rem`);
      root.dataset.direction = direction === 'centre' ? (root.dataset.direction ?? 'right') : direction;
      stateText.textContent = position === 0 ? 'Glitch returned to the centre.' : position === previous ? 'Glitch reached the edge of the scene.' : `Glitch moved ${direction}.`;
      return Object.freeze({ accepted: true, position });
    },
    useFallback
  });
}
