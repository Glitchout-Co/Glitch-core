const DEFAULT_STATES = Object.freeze({
  ready: 'Glitch is waiting for the core to start.', running: 'Glitch is present and the core is running.',
  paused: 'Glitch is resting while the core is paused.', disabled: 'Character presentation is disabled.'
});

export function presentationForLifecycle(lifecycle, states = DEFAULT_STATES) {
  const safeLifecycle = Object.hasOwn(DEFAULT_STATES, lifecycle) ? lifecycle : 'ready';
  return Object.freeze({ lifecycle: safeLifecycle, text: states[safeLifecycle] ?? DEFAULT_STATES[safeLifecycle] });
}

export function createCharacterRenderer({ root, stateText }) {
  if (!root || !stateText) throw new TypeError('Character renderer requires its scene elements.');
  const image = root.querySelector('.character__art');
  const fallback = root.querySelector('.character__fallback');
  let states = DEFAULT_STATES;
  const useFallback = message => {
    if (image) image.hidden = true;
    if (fallback) { fallback.hidden = false; const copy = fallback.querySelector('p'); if (copy) copy.textContent = message; }
  };
  if (image) image.addEventListener('error', () => useFallback('Glitch’s visual is unavailable. Core controls remain available.'));
  return Object.freeze({
    configure(data) { if (data && data.lifecycleText && typeof data.lifecycleText === 'object') states = Object.freeze({ ...DEFAULT_STATES, ...data.lifecycleText }); },
    render(snapshot) { const presentation = presentationForLifecycle(snapshot?.lifecycle, states); root.dataset.lifecycle = presentation.lifecycle; stateText.textContent = presentation.text; },
    useFallback
  });
}
