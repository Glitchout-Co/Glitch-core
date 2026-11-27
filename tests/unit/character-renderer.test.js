import test from 'node:test';
import assert from 'node:assert/strict';
import { createCharacterRenderer, nextCharacterPosition, presentationForLifecycle } from '../../src/presentation/character/renderer.js';

test('character presentation maps lifecycle states and safely defaults', () => {
  assert.deepEqual(presentationForLifecycle('running'), { lifecycle: 'running', text: 'Glitch is present and the core is running.' });
  assert.equal(presentationForLifecycle('unknown').lifecycle, 'ready');
  assert.equal(Object.isFrozen(presentationForLifecycle('paused')), true);
});

test('renderer updates scene without controlling lifecycle', () => {
  const image = { hidden: false, addEventListener() {} };
  const fallbackCopy = { textContent: '' };
  const fallback = { hidden: true, querySelector: () => fallbackCopy };
  const properties = new Map();
  const root = { dataset: {}, style: { setProperty: (key, value) => properties.set(key, value) }, querySelector: selector => selector === '.character__art' ? image : fallback };
  const stateText = { textContent: '' };
  const movementControl = { disabled: true };
  const renderer = createCharacterRenderer({ root, stateText, movementControls: [movementControl] });
  renderer.configure({ lifecycleText: { paused: 'Custom paused copy.' } }); renderer.render({ lifecycle: 'paused' });
  assert.equal(root.dataset.lifecycle, 'paused'); assert.equal(stateText.textContent, 'Custom paused copy.');
  assert.equal(renderer.move('left').accepted, false);
  renderer.render({ lifecycle: 'running' });
  assert.equal(movementControl.disabled, false);
  assert.deepEqual(renderer.move('left'), { accepted: true, position: -1 });
  assert.equal(properties.get('--character-offset'), '-1.75rem');
  assert.equal(root.dataset.direction, 'left');
  renderer.useFallback('Fallback active.'); assert.equal(image.hidden, true); assert.equal(fallback.hidden, false); assert.equal(fallbackCopy.textContent, 'Fallback active.');
});

test('manual movement is bounded and invalid directions are ignored', () => {
  assert.equal(nextCharacterPosition(0, 'left'), -1);
  assert.equal(nextCharacterPosition(-3, 'left'), -3);
  assert.equal(nextCharacterPosition(3, 'right'), 3);
  assert.equal(nextCharacterPosition(2, 'centre'), 0);
  assert.equal(nextCharacterPosition(1, 'unknown'), 1);
  assert.throws(() => nextCharacterPosition(0.5, 'left'), TypeError);
});
