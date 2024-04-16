export default function cleanSet(set, string) {
  let result = '';
  if (!string || typeof (string) !== 'string') { return result; }
  for (const s of set) {
    if (s && s.startsWith(string)) {
      result += `${s.slice(string.length)}-`;
    }
  }
  return result.slice(0, -1);
}
