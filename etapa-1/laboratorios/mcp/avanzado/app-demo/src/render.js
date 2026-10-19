import { renderTaskItem } from './components/task-item.js';
import { formatDuration } from './format.js';

export function renderTaskList(container, emptyState, tasks, handlers) {
  container.replaceChildren(...tasks.map((task) => renderTaskItem(task, handlers)));
  emptyState.hidden = tasks.length > 0;
}

export function renderStats(element, tasks) {
  const completed = tasks.filter((task) => task.done).length;
  const totalMinutes = tasks.reduce((sum, task) => sum + task.minutes, 0);
  element.textContent =
    tasks.length === 0
      ? ''
      : `${tasks.length} tareas · ${completed} completadas · ${formatDuration(totalMinutes)} en total`;
}

export function renderErrors(form, errors) {
  for (const field of ['title', 'minutes', 'priority']) {
    const input = form.elements[field];
    const message = form.querySelector(`#task-${field}-error`);
    const text = errors[field] ?? '';
    message.textContent = text;
    message.hidden = text === '';
    input.setAttribute('aria-invalid', String(text !== ''));
  }
}
