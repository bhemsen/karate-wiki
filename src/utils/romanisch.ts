/**
 * Converts a kebab-case ID into a capitalized romanized name.
 * e.g. 'oi-zuki' → 'Oi-Zuki', 'zenkutsu-dachi' → 'Zenkutsu-Dachi'
 */
export function toRomanisch(id: string): string {
  return id
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('-');
}
