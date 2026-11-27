import { createController } from './core/controller.js';
import { nextLifecycle } from './core/lifecycle.js';
import { createCharacterRenderer } from './presentation/character/renderer.js';
import { createPresenceBehaviour } from './engines/behaviour/presence.js';
import { createPetInteraction } from './engines/behaviour/interactions.js';
import { createRestBehaviour } from './engines/behaviour/rest.js';

const controller = createController();
const status = document.querySelector('#status');
const buttons = [...document.querySelectorAll('[data-command]')];
const movementButtons = [...document.querySelectorAll('[data-move]')];
const poseButtons = [...document.querySelectorAll('[data-pose]')];
const petButton = document.querySelector('#pet-glitch');
const character = createCharacterRenderer({
  root: document.querySelector('#glitch-character'),
  stateText: document.querySelector('#character-state'),
  movementControls: movementButtons,
  poseControls: poseButtons,
  assetLabel: document.querySelector('#character-asset-label')
});
const presence = createPresenceBehaviour({
  character,
  isReducedMotion: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
});
const petInteraction = createPetInteraction({ character, presence });
const restBehaviour = createRestBehaviour({ character, presence });
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
  presence.setLifecycle(snapshot.lifecycle);
  petInteraction.setLifecycle(snapshot.lifecycle);
  restBehaviour.setLifecycle(snapshot.lifecycle);
  petButton.disabled = snapshot.lifecycle !== 'running';
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
petButton.addEventListener('click', () => petInteraction.pet());
for (const button of document.querySelectorAll('button')) {
  button.addEventListener('click', () => restBehaviour.notifyActivity(), { capture: true });
  button.addEventListener('click', () => presence.reset());
}
render(controller.snapshot());
