import { validateTask } from './validators.js';

const STORAGE_KEY = 'taller-mcp.tasks';
const listeners = new Set();

let tasks = loadTasks();

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  listeners.forEach((listener) => listener(getTasks()));
}

export function getTasks() {
  return [...tasks];
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Validates and stores a new task.
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function addTask(input) {
  const result = validateTask(input);
  if (!result.valid) return result;

  tasks = [
    {
      id: crypto.randomUUID(),
      title: input.title.trim(),
      minutes: Number(input.minutes),
      priority: input.priority,
      done: false,
      createdAt: new Date().toISOString(),
    },
    ...tasks,
  ];
  persist();
  return result;
}

export function toggleTask(id) {
  tasks = tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task));
  persist();
}

export function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  persist();
}
