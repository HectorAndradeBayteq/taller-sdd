export const PRIORITY_LABELS = {
  low: 'Baja',
  medium: 'Media',
  high: 'Alta',
};

/**
 * Formats a duration in minutes as "1 h 30 min".
 * @param {number} minutes
 * @returns {string}
 */
export function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `${rest} min`;
  if (rest === 0) return `${hours} h`;
  return `${hours} h ${rest} min`;
}

/**
 * Formats an ISO date using the es-EC locale.
 * @param {string} iso
 * @returns {string}
 */
export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('es-EC', { day: '2-digit', month: 'short' });
}
