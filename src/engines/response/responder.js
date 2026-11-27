const REQUIRED_RESPONSES = Object.freeze([
  'invalid', 'greeting', 'identity', 'identity-more', 'capabilities', 'movement',
  'assistance-limited', 'assistance-reason', 'thanks', 'goodbye', 'fallback', 'followup-missing'
]);
const ALLOWED_POSES = new Set(['standing', 'sitting', 'thinking', 'playful', 'greeting', 'resting']);
const clean = message => message.trim().toLowerCase().replace(/[^a-z0-9?' ]+/g, ' ').replace(/\s+/g, ' ');

export function validateDialogue(value) {
  if (!value || value.schemaVersion !== 1 || !value.responses || typeof value.responses !== 'object') return null;
  const responses = {};
  for (const key of REQUIRED_RESPONSES) {
    const entry = value.responses[key];
    if (!entry || typeof entry.text !== 'string' || !entry.text.trim() || entry.text.length > 600 || !ALLOWED_POSES.has(entry.pose)) return null;
    responses[key] = Object.freeze({ text: entry.text, pose: entry.pose });
  }
  return Object.freeze({ schemaVersion: 1, responses: Object.freeze(responses) });
}

export function createResponder(dialogueValue) {
  const dialogue = validateDialogue(dialogueValue);
  if (!dialogue) throw new TypeError('Dialogue data is invalid or incomplete.');
  const history = [];
  const remember = intent => {
    if (!['invalid', 'fallback', 'followup-missing'].includes(intent)) history.push(intent);
    while (history.length > 4) history.shift();
  };
  const build = intent => {
    const entry = dialogue.responses[intent];
    remember(intent);
    return Object.freeze({ intent, text: entry.text, pose: entry.pose });
  };
  const latestTopic = () => [...history].reverse().find(intent => ['identity', 'identity-more', 'capabilities', 'movement', 'assistance-limited', 'assistance-reason'].includes(intent));

  return Object.freeze({
    respond(message) {
      if (typeof message !== 'string') return build('invalid');
      const input = clean(message.slice(0, 300));
      if (!input) return build('invalid');
      if (/\bwhat about (movement|moving|walking)\b|\bhow do you move\b/.test(input)) return build('movement');
      if (/\bwhy (can't|cant|can not) you (help|assist)\b|\bwhy isn't assistance implemented\b/.test(input)) return build('assistance-reason');
      if (/\b(tell me more|more about that|go on)\b/.test(input)) {
        const topic = latestTopic();
        if (topic === 'identity' || topic === 'identity-more') return build('identity-more');
        if (topic === 'capabilities' || topic === 'movement') return build('movement');
        if (topic === 'assistance-limited' || topic === 'assistance-reason') return build('assistance-reason');
        return build('followup-missing');
      }
      if (/\b(hello|hi|hey|greetings)\b/.test(input)) return build('greeting');
      if (/\b(who|what) are you\b|\btell me about yourself\b/.test(input)) return build('identity');
      if (/\bwhat can you do\b|\bcapabilit(?:y|ies)\b/.test(input)) return build('capabilities');
      if (/\b(help|assist|solve|question)\b/.test(input)) return build('assistance-limited');
      if (/\b(thank you|thanks|thankyou)\b/.test(input)) return build('thanks');
      if (/\b(goodbye|bye|see you|farewell)\b/.test(input)) return build('goodbye');
      return build('fallback');
    },
    reset() { history.length = 0; },
    snapshot: () => Object.freeze({ recentIntents: Object.freeze([...history]) })
  });
}
