const DEFAULT_STATES = Object.freeze({
  ready: 'Glitch is waiting for the core to start.', running: 'Glitch is present and the core is running.',
  paused: 'Glitch is resting while the core is paused.', disabled: 'Character presentation is disabled.'
});
const POSITION_LIMIT = 3;
const POSE_PATH = /^\.\/assets\/characters\/glitch\/sprites\/glitch-[a-z-]+\.png$/;

export function validatedPoses(value) {
  if (!value || typeof value !== 'object') return Object.freeze({});
  const entries = Object.entries(value).filter(([, pose]) =>
    pose && POSE_PATH.test(pose.src) && typeof pose.alt === 'string' && typeof pose.label === 'string' && typeof pose.status === 'string'
  );
  return Object.freeze(Object.fromEntries(entries.map(([name, pose]) => [name, Object.freeze({ ...pose })])));
}

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

export function createCharacterRenderer({ root, stateText, movementControls = [], poseControls = [], assetLabel = null }) {
  if (!root || !stateText) throw new TypeError('Character renderer requires its scene elements.');
  const image = root.querySelector('.character__art');
  const fallback = root.querySelector('.character__fallback');
  let states = DEFAULT_STATES;
  let lifecycle = 'ready';
  let position = 0;
  let poses = Object.freeze({});
  let activePose = 'standing';
  const useFallback = message => {
    if (image) image.hidden = true;
    if (fallback) { fallback.hidden = false; const copy = fallback.querySelector('p'); if (copy) copy.textContent = message; }
  };
  if (image) image.addEventListener('error', () => useFallback('Glitch’s visual is unavailable. Core controls remain available.'));
  return Object.freeze({
    configure(data) {
      if (data && data.lifecycleText && typeof data.lifecycleText === 'object') states = Object.freeze({ ...DEFAULT_STATES, ...data.lifecycleText });
      poses = validatedPoses(data?.poses);
      if (typeof data?.activePose === 'string' && Object.hasOwn(poses, data.activePose)) activePose = data.activePose;
    },
    render(snapshot) {
      const presentation = presentationForLifecycle(snapshot?.lifecycle, states);
      lifecycle = presentation.lifecycle;
      root.dataset.lifecycle = lifecycle;
      stateText.textContent = presentation.text;
      for (const control of movementControls) control.disabled = lifecycle !== 'running';
      for (const control of poseControls) control.disabled = lifecycle !== 'running' || !Object.hasOwn(poses, control.dataset.pose);
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
    setPose(name) {
      if (lifecycle !== 'running' || !Object.hasOwn(poses, name) || !image) return Object.freeze({ accepted: false, pose: activePose });
      const pose = poses[name];
      activePose = name;
      image.src = pose.src;
      image.alt = pose.alt;
      image.hidden = false;
      if (fallback) fallback.hidden = true;
      root.dataset.pose = name;
      stateText.textContent = pose.status;
      if (assetLabel) assetLabel.textContent = pose.label;
      return Object.freeze({ accepted: true, pose: activePose });
    },
    useFallback
  });
}
