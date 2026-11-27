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

export function createResponder(dialogueValue, characterKnowledge) {
  const dialogue = validateDialogue(dialogueValue);
  if (!dialogue) throw new TypeError('Dialogue data is invalid or incomplete.');
  if (!characterKnowledge || typeof characterKnowledge.retrieve !== 'function') throw new TypeError('Character knowledge adapter is required.');
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
  const buildKnowledge = (topic, detailed = false) => {
    const entry = characterKnowledge.retrieve(topic, detailed);
    if (!entry) return build('fallback');
    const intent = `knowledge:${topic}${detailed ? ':detail' : ''}`;
    remember(intent);
    return Object.freeze({ intent, text: entry.text, pose: entry.pose });
  };
  const contextualIntents = new Set(['identity', 'identity-more', 'capabilities', 'movement', 'assistance-limited', 'assistance-reason']);
  const latestSubject = () => [...history].reverse().find(intent => contextualIntents.has(intent) || intent.startsWith('knowledge:'));

  return Object.freeze({
    respond(message) {
      if (typeof message !== 'string') return build('invalid');
      const input = clean(message.slice(0, 300));
      if (!input) return build('invalid');
      if (/\bwhat about (movement|moving|walking)\b|\bhow do you move\b/.test(input)) return build('movement');
      if (/\bwhy (can't|cant|can not) you (help|assist)\b|\bwhy isn't assistance implemented\b/.test(input)) return build('assistance-reason');
      if (/^(tell me more|more about that|go on|what else|why|why is that|how so)\??$/.test(input)) {
        const topic = latestSubject();
        if (topic?.startsWith('knowledge:')) return buildKnowledge(topic.split(':')[1], true);
        if (topic === 'identity' || topic === 'identity-more') return build('identity-more');
        if (topic === 'capabilities' || topic === 'movement') return build('movement');
        if (topic === 'assistance-limited' || topic === 'assistance-reason') return build('assistance-reason');
        return build('followup-missing');
      }
      if (/\bwhat do you look like\b|\bdescribe (yourself|your appearance)\b|\b(your|the) (appearance|markings|tail|eyes)\b/.test(input)) return buildKnowledge('appearance');
      if (/\b(your|the) personality\b|\bwhat are you like\b/.test(input)) return buildKnowledge('personality');
      if (/\b(your|the) (origin|backstory)\b|\bhow (were|was) you (created|made)\b|\bwhere did you come from\b/.test(input)) return buildKnowledge('origin');
      if (/\b(your|the) (home|den)\b|\bwhere do you live\b/.test(input)) return buildKnowledge('home');
      if (/\b(pixel berries|favo(?:u)?rite (food|treat))\b/.test(input)) return buildKnowledge('favourite-treat');
      if (/\bfavo(?:u)?rite colou?r/.test(input)) return buildKnowledge('favourite-colours');
      if (/\bfavo(?:u)?rite weather/.test(input)) return buildKnowledge('favourite-weather');
      if (/\b(your|the) collar\b|\bwhy do you wear (a|that|your) collar\b/.test(input)) return buildKnowledge('collar');
      if (/\bwhat do you (like|enjoy) doing\b|\b(your|the) (hobbies|pastimes)\b/.test(input)) return buildKnowledge('pastimes');
      if (/\bwhat do you dislike\b|\bthings you (hate|dislike)\b/.test(input)) return buildKnowledge('dislikes');
      if (/\b(are you (alive|real|conscious|sentient)|do you have (real )?(feelings|emotions))\b/.test(input)) return buildKnowledge('digital-nature');
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
