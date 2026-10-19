export const LIMITS = {
  titleMin: 3,
  titleMax: 80,
  minutesMin: 1,
  minutesMax: 480,
};

export const PRIORITIES = ['low', 'medium', 'high'];

/**
 * Validates the raw values coming from the task form.
 * @param {{ title: string, minutes: string | number, priority: string }} input
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateTask({ title, minutes, priority }) {
  const errors = {};
  const cleanTitle = (title ?? '').trim();

  if (cleanTitle.length < LIMITS.titleMin) {
    errors.title = `El título debe tener al menos ${LIMITS.titleMin} caracteres`;
  } else if (cleanTitle.length > LIMITS.titleMax) {
    errors.title = `El título no puede superar ${LIMITS.titleMax} caracteres`;
  }

  const value = Number(minutes);
  if (!Number.isInteger(value) || value < LIMITS.minutesMin || value > LIMITS.minutesMax) {
    errors.minutes = `Los minutos deben estar entre ${LIMITS.minutesMin} y ${LIMITS.minutesMax}`;
  }

  if (!PRIORITIES.includes(priority)) {
    errors.priority = 'Selecciona una prioridad';
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
