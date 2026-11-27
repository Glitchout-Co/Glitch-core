const clean = message => message.trim().toLowerCase().replace(/[^a-z0-9?' ]+/g, ' ').replace(/\s+/g, ' ');
const result = (intent, text, pose) => Object.freeze({ intent, text, pose });

export function respondToMessage(message) {
  if (typeof message !== 'string') return result('invalid', 'I can only read text messages in this prototype.', 'thinking');
  const input = clean(message.slice(0, 300));
  if (!input) return result('invalid', 'Please enter a message for me to read.', 'thinking');
  if (/\b(hello|hi|hey|greetings)\b/.test(input)) {
    return result('greeting', "Oh! Hello there! I'm Glitch, a cyber fox-spirit—though technically, I'm pixels and code. This prototype can handle a few simple local conversations.", 'greeting');
  }
  if (/\b(who|what) are you\b|\btell me about yourself\b/.test(input)) {
    return result('identity', "I'm Glitch, Glitchout-Co's fictional cyber fox-spirit companion and assistant. In reality, I'm software, artwork and data—not a living or conscious creature.", 'sitting');
  }
  if (/\bwhat can you do\b|\bcapabilit(?:y|ies)\b/.test(input)) {
    return result('capabilities', 'Right now I can present approved poses, move within this scene, rest, wake, react to petting, and recognise a small set of local messages. Broader assistance is not implemented yet.', 'thinking');
  }
  if (/\b(help|assist|solve|question)\b/.test(input)) {
    return result('assistance-limited', "I'd like to help, but general assistance is not implemented in this development build yet. I won't pretend I can complete that request.", 'thinking');
  }
  if (/\b(thank you|thanks|thankyou)\b/.test(input)) {
    return result('thanks', "You're welcome!", 'playful');
  }
  if (/\b(goodbye|bye|see you|farewell)\b/.test(input)) {
    return result('goodbye', 'See you later! You can talk with me again while this development session is running.', 'greeting');
  }
  return result('fallback', "I'm not sure how to answer that with my current local conversation rules. I can explain who I am or what this prototype can do.", 'thinking');
}
