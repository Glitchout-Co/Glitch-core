import { createController } from './core/controller.js';
import { nextLifecycle } from './core/lifecycle.js';

const controller = createController();
const status = document.querySelector('#status');
const buttons = [...document.querySelectorAll('[data-command]')];
function render(snapshot) {
  status.textContent = `Core lifecycle: ${snapshot.lifecycle} · Guest mode`;
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
