const ALLOWED_POSES = new Set(['standing', 'sitting', 'thinking', 'playful', 'greeting', 'resting']);
const normalise = value => value.toLowerCase().replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();

export function validateCharacterKnowledge(value) {
  if (!value || value.schemaVersion !== 2 || typeof value.source !== 'string' || !value.source.trim() || !value.entries || typeof value.entries !== 'object' || !value.index || typeof value.index !== 'object' || !value.relationships || typeof value.relationships !== 'object') return null;
  const entries = {};
  for (const [id, entry] of Object.entries(value.entries)) {
    if (!/^[a-z]+(?:-[a-z]+)*$/.test(id) || !entry || typeof entry.title !== 'string' || !entry.title.trim() || entry.title.length > 80 || typeof entry.text !== 'string' || !entry.text.trim() || entry.text.length > 700 || typeof entry.detail !== 'string' || !entry.detail.trim() || entry.detail.length > 700 || !ALLOWED_POSES.has(entry.pose)) return null;
    entries[id] = Object.freeze({ title: entry.title, text: entry.text, detail: entry.detail, pose: entry.pose });
  }
  if (Object.keys(entries).length === 0) return null;
  const index = {};
  const aliases = new Set();
  const relationships = {};
  for (const id of Object.keys(entries)) {
    const terms = value.index[id];
    const related = value.relationships[id];
    if (!Array.isArray(terms) || terms.length === 0 || terms.length > 30 || !Array.isArray(related) || related.length > 6) return null;
    const cleanTerms = [];
    for (const term of terms) {
      if (typeof term !== 'string' || term.length > 80) return null;
      const cleanTerm = normalise(term);
      if (!cleanTerm || aliases.has(cleanTerm)) return null;
      aliases.add(cleanTerm);
      cleanTerms.push(cleanTerm);
    }
    if (related.some(topic => topic === id || !entries[topic]) || new Set(related).size !== related.length) return null;
    index[id] = Object.freeze(cleanTerms);
    relationships[id] = Object.freeze([...related]);
  }
  if (Object.keys(value.index).some(id => !entries[id]) || Object.keys(value.relationships).some(id => !entries[id])) return null;
  return Object.freeze({ schemaVersion: 2, source: value.source, entries: Object.freeze(entries), index: Object.freeze(index), relationships: Object.freeze(relationships) });
}

export function createCharacterKnowledge(value) {
  const knowledge = validateCharacterKnowledge(value);
  if (!knowledge) throw new TypeError('Character knowledge is invalid or incomplete.');
  return Object.freeze({
    retrieve(topic, detailed = false) {
      const entry = knowledge.entries[topic];
      return entry ? Object.freeze({ topic, text: detailed ? entry.detail : entry.text, pose: entry.pose }) : null;
    },
    search(message) {
      if (typeof message !== 'string') return null;
      const input = ` ${normalise(message)} `;
      let best = null;
      for (const [topic, terms] of Object.entries(knowledge.index)) {
        for (const term of terms) {
          if (input.includes(` ${term} `) && (!best || term.length > best.term.length)) best = { topic, term };
        }
      }
      return best ? Object.freeze({ topic: best.topic }) : null;
    },
    related(topic) {
      const related = knowledge.relationships[topic];
      if (!related) return Object.freeze([]);
      return Object.freeze(related.map(id => Object.freeze({ topic: id, title: knowledge.entries[id].title })));
    }
  });
}
