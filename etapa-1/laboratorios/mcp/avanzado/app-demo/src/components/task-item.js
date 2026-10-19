import { PRIORITY_LABELS, formatDate, formatDuration } from '../format.js';

/**
 * Builds the <li> for a single task.
 * Fase B del laboratorio: este componente se reimplementa a partir del frame de Figma.
 * @param {{ id: string, title: string, minutes: number, priority: string, done: boolean, createdAt: string }} task
 * @param {{ onToggle: (id: string) => void, onRemove: (id: string) => void }} handlers
 * @returns {HTMLLIElement}
 */
export function renderTaskItem(task, { onToggle, onRemove }) {
  const item = document.createElement('li');
  item.className = task.done ? 'task-item task-item--done' : 'task-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.done;
  checkbox.setAttribute('aria-label', `Completar tarea ${task.title}`);
  checkbox.addEventListener('change', () => onToggle(task.id));

  const body = document.createElement('div');
  body.className = 'task-item__body';
  body.innerHTML = `
    <div class="task-item__title"></div>
    <div class="task-item__meta">
      <span class="task-item__priority" data-priority="${task.priority}">${PRIORITY_LABELS[task.priority]}</span>
      · ${formatDuration(task.minutes)} · ${formatDate(task.createdAt)}
    </div>`;
  body.querySelector('.task-item__title').textContent = task.title;

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'task-item__remove';
  remove.textContent = 'Eliminar';
  remove.setAttribute('aria-label', `Eliminar tarea ${task.title}`);
  remove.addEventListener('click', () => onRemove(task.id));

  item.append(checkbox, body, remove);
  return item;
}
