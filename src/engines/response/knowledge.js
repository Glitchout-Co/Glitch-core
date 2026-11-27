const ALLOWED_POSES = new Set(['standing', 'sitting', 'thinking', 'playful', 'greeting', 'resting']);

export function validateCharacterKnowledge(value) {
  if (!value || value.schemaVersion !== 1 || typeof value.source !== 'string' || !value.source.trim() || !value.entries || typeof value.entries !== 'object') return null;
  const entries = {};
  for (const [id, entry] of Object.entries(value.entries)) {
    if (!/^[a-z]+(?:-[a-z]+)*$/.test(id) || !entry || typeof entry.text !== 'string' || !entry.text.trim() || entry.text.length > 700 || !ALLOWED_POSES.has(entry.pose)) return null;
    entries[id] = Object.freeze({ text: entry.text, pose: entry.pose });
  }
  if (Object.keys(entries).length === 0) return null;
  return Object.freeze({ schemaVersion: 1, source: value.source, entries: Object.freeze(entries) });
}

export function createCharacterKnowledge(value) {
  const knowledge = validateCharacterKnowledge(value);
  if (!knowledge) throw new TypeError('Character knowledge is invalid or incomplete.');
  return Object.freeze({
    retrieve(topic) {
      const entry = knowledge.entries[topic];
      return entry ? Object.freeze({ topic, text: entry.text, pose: entry.pose }) : null;
    }
  });
}
