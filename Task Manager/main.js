/**
 * 🛠️ Plan for Our V8-Optimized Task Manager (Functional Style)
Features (Simple but Real):
- Add a task
- Toggle task completion
- Remove a task
- Filter tasks (all, completed, active)
 */

// Task factory - avoids hidden class churn
const createTask = (id, text, completed = false) => ({
  id, // primitive
  text, // string
  completed, // boolean
});

// Pure state operations
const addTask = (tasks, text) => {
  const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  return [...tasks, createTask(id, text)];
};

const toggleTask = (tasks, id) =>
  tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

const removeTask = (tasks, id) => tasks.filter((task) => task.id !== id);

const filterTasks = (tasks, filter) => {
  switch (filter) {
    case "active":
      return tasks.filter((t) => !t.completed);
    case "completed":
      return tasks.filter((t) => t.completed);
    default:
      return tasks;
  }
};

let tasks = [];

tasks = addTask(tasks, "Buy milk");
tasks = addTask(tasks, "Write code");
tasks = toggleTask(tasks, 1);
tasks = removeTask(tasks, 2);

const visible = filterTasks(tasks, "all");

console.log(visible); // Clean task array
