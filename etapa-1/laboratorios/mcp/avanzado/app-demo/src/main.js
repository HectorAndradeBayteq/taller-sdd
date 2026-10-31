import { addTask, getTasks, removeTask, subscribe, toggleTask } from './store.js';
import { renderErrors, renderStats, renderTaskList } from './render.js';

const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');
const emptyState = document.querySelector('#empty-state');
const stats = document.querySelector('#stats');

const handlers = { onToggle: toggleTask, onRemove: removeTask };

function refresh(tasks) {
  renderTaskList(list, emptyState, tasks, handlers);
  renderStats(stats, tasks);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const result = addTask(data);
  renderErrors(form, result.errors);
  if (result.valid) {
    form.reset();
    form.elements.title.focus();
  }
});

subscribe(refresh);
refresh(getTasks());
