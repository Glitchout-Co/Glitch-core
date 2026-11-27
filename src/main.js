import { createController } from './core/controller.js';
import { nextLifecycle } from './core/lifecycle.js';
import { createCharacterRenderer } from './presentation/character/renderer.js';

const controller = createController();
const status = document.querySelector('#status');
const buttons = [...document.querySelectorAll('[data-command]')];
const stage = document.querySelector('#character-stage');
const movementButtons = [...document.querySelectorAll('[data-move]')];
const poseButtons = [...document.querySelectorAll('[data-pose]')];
const character = createCharacterRenderer({
  root: document.querySelector('#glitch-character'),
  stateText: document.querySelector('#character-state'),
  movementControls: movementButtons,
  poseControls: poseButtons,
  assetLabel: document.querySelector('#character-asset-label')
});
fetch('./data/character/glitch.json')
  .then(response => {
    if (!response.ok) throw new Error('Character data unavailable');
    return response.json();
  })
  .then(data => character.configure(data))
  .catch(() => character.useFallback('Character data is unavailable.'));
function render(snapshot) {
  status.textContent = `Core lifecycle: ${snapshot.lifecycle} · Guest mode`;
  character.render(snapshot);
  for (const button of buttons) {
    button.disabled = !nextLifecycle(snapshot.lifecycle, button.dataset.command);
  }
}
controller.subscribe(render);
for (const button of buttons) {
  button.addEventListener('click', () => {
    const result = controller.dispatch(button.dataset.command);
    if (result.listenerFailures) status.textContent = 'A presentation error occurred.';
  });
}
for (const button of movementButtons) {
  button.addEventListener('click', () => character.move(button.dataset.move));
}
for (const button of poseButtons) {
  button.addEventListener('click', () => character.setPose(button.dataset.pose));
}
stage.addEventListener('keydown', event => {
  const direction = { ArrowLeft: 'left', ArrowRight: 'right', Home: 'centre' }[event.key];
  if (direction && character.move(direction).accepted) event.preventDefault();
});
render(controller.snapshot());
