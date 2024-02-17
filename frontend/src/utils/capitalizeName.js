export function capitalizeName(str) {
  return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}
