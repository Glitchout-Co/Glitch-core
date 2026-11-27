export const Priority = Object.freeze({
  SAFETY: 1, ASSISTANCE: 2, INTERACTION: 3, ENVIRONMENT: 4, INDEPENDENT: 5
});
const values = Object.values(Priority);
export function comparePriority(incoming, current) {
  if (!values.includes(incoming) || !values.includes(current)) {
    throw new RangeError('Unknown priority');
  }
  return incoming < current ? 'higher' : incoming > current ? 'lower' : 'equal';
}
