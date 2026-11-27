export const Lifecycle = Object.freeze({
  READY: 'ready', RUNNING: 'running', PAUSED: 'paused', DISABLED: 'disabled'
});
const transitions = Object.freeze({
  ready: Object.freeze({ start: 'running', disable: 'disabled' }),
  running: Object.freeze({ pause: 'paused', disable: 'disabled' }),
  paused: Object.freeze({ resume: 'running', disable: 'disabled' }),
  disabled: Object.freeze({ start: 'running' })
});
export function nextLifecycle(state, command) {
  if (!Object.hasOwn(transitions, state)) return null;
  const allowed = transitions[state];
  return Object.hasOwn(allowed, command) ? allowed[command] : null;
}
