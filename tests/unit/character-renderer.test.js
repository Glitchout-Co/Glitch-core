import test from 'node:test';
import assert from 'node:assert/strict';
import { createCharacterRenderer, presentationForLifecycle } from '../../src/presentation/character/renderer.js';

test('character presentation maps lifecycle states and safely defaults', () => {
  assert.deepEqual(presentationForLifecycle('running'), { lifecycle: 'running', text: 'Glitch is present and the core is running.' });
  assert.equal(presentationForLifecycle('unknown').lifecycle, 'ready');
  assert.equal(Object.isFrozen(presentationForLifecycle('paused')), true);
});

test('renderer updates scene without controlling lifecycle', () => {
  const image = { hidden: false, addEventListener() {} };
  const fallbackCopy = { textContent: '' };
  const fallback = { hidden: true, querySelector: () => fallbackCopy };
  const root = { dataset: {}, querySelector: selector => selector === '.character__art' ? image : fallback };
  const stateText = { textContent: '' };
  const renderer = createCharacterRenderer({ root, stateText });
  renderer.configure({ lifecycleText: { paused: 'Custom paused copy.' } }); renderer.render({ lifecycle: 'paused' });
  assert.equal(root.dataset.lifecycle, 'paused'); assert.equal(stateText.textContent, 'Custom paused copy.');
  renderer.useFallback('Fallback active.'); assert.equal(image.hidden, true); assert.equal(fallback.hidden, false); assert.equal(fallbackCopy.textContent, 'Fallback active.');
});
