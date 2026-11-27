import { createController } from './core/controller.js';
import { nextLifecycle } from './core/lifecycle.js';
import { createCharacterRenderer } from './presentation/character/renderer.js';

const controller = createController();
const status = document.querySelector('#status');
const buttons = [...document.querySelectorAll('[data-command]')];
const character = createCharacterRenderer({
  root: document.querySelector('#glitch-character'),
  stateText: document.querySelector('#character-state')
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
render(controller.snapshot());
