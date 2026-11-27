import { createController } from './core/controller.js';
import { nextLifecycle } from './core/lifecycle.js';
import { createCharacterRenderer } from './presentation/character/renderer.js';
import { createPresenceBehaviour } from './engines/behaviour/presence.js';
import { createPetInteraction } from './engines/behaviour/interactions.js';
import { createRestBehaviour } from './engines/behaviour/rest.js';
import { createResponder } from './engines/response/responder.js';
import { createConversationInteraction } from './engines/response/conversation.js';

const controller = createController();
const status = document.querySelector('#status');
const buttons = [...document.querySelectorAll('[data-command]')];
const movementButtons = [...document.querySelectorAll('[data-move]')];
const poseButtons = [...document.querySelectorAll('[data-pose]')];
const petButton = document.querySelector('#pet-glitch');
const conversationForm = document.querySelector('#conversation-form');
const conversationInput = document.querySelector('#conversation-input');
const conversationSend = document.querySelector('#conversation-send');
const conversationLog = document.querySelector('#conversation-log');
let responder = null;
let dialogueReady = false;
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
const appendMessage = (speaker, text) => {
  const item = document.createElement('li');
  const name = document.createElement('strong');
  name.textContent = `${speaker}: `;
  item.append(name, document.createTextNode(text));
  conversationLog.append(item);
};
const conversation = createConversationInteraction({
  character,
  presence,
  respond: message => responder?.respond(message) ?? Object.freeze({ intent: 'unavailable', text: 'Conversation data is unavailable.', pose: 'thinking' }),
  deliver: response => appendMessage('Glitch', response.text),
  interruptLowerPriority: () => petInteraction.cancel(),
  isReducedMotion: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
});
fetch('./data/character/glitch.json')
  .then(response => {
    if (!response.ok) throw new Error('Character data unavailable');
    return response.json();
  })
  .then(data => character.configure(data))
  .catch(() => character.useFallback('Character data is unavailable.'));
fetch('./data/dialogue/core.json')
  .then(response => {
    if (!response.ok) throw new Error('Dialogue data unavailable');
    return response.json();
  })
  .then(data => {
    responder = createResponder(data);
    dialogueReady = true;
    render(controller.snapshot());
  })
  .catch(() => {
    dialogueReady = false;
    appendMessage('Glitch', 'Conversation data could not be loaded. Character controls remain available.');
  });
function render(snapshot) {
  status.textContent = `Core lifecycle: ${snapshot.lifecycle} · Guest mode`;
  character.render(snapshot);
  presence.setLifecycle(snapshot.lifecycle);
  petInteraction.setLifecycle(snapshot.lifecycle);
  restBehaviour.setLifecycle(snapshot.lifecycle);
  conversation.setLifecycle(snapshot.lifecycle);
  petButton.disabled = snapshot.lifecycle !== 'running';
  const conversationEnabled = snapshot.lifecycle === 'running' && dialogueReady;
  conversationInput.disabled = !conversationEnabled;
  conversationSend.disabled = !conversationEnabled;
  if (snapshot.lifecycle === 'disabled') responder?.reset();
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
petButton.addEventListener('click', () => { if (!conversation.snapshot().responding) petInteraction.pet(); });
conversationForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = conversationInput.value.trim();
  if (!message) return;
  restBehaviour.notifyActivity();
  presence.reset();
  const result = conversation.submit(message);
  if (result.accepted) {
    appendMessage('You', message);
    conversationInput.value = '';
  }
});
for (const button of document.querySelectorAll('button')) {
  button.addEventListener('click', () => restBehaviour.notifyActivity(), { capture: true });
  button.addEventListener('click', () => presence.reset());
}
render(controller.snapshot());
