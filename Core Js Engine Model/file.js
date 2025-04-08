/**
JavaScript is single-threaded.
Only one thing runs at a time.
It uses:
🧱 Call Stack: Where execution happens
🔁 Event Loop: The gatekeeper
🎯 Task Queues:
📦 Macrotasks (aka task queue)
🧬 Microtasks (aka job queue)
 */

// The Flow of Execution
/**
  Call Stack → Empty?
  ⬇️
Event Loop checks:
  - Microtasks? ✅ Run all of them
  - Then → Macrotask (1)
 */
/**
 * 🔄 2. CALL STACK: Where Execution Lives
🧱 What is it?
The call stack is where JS keeps track of function calls.
 */

function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("Done !");
}

a(); // Stack: Stack: a → b → c → log → pop → pop → pop

/**
When a function is invoked:
It’s pushed to the stack
When it returns, it’s popped
 */

/**
 * ⏱️ 3. EVENT LOOP: The JS Timekeeper
The event loop:
Watches the stack
When it's empty, it moves tasks from queues → to stack
Order:
Stack runs
Microtasks first
Then 1 macrotask
Repeat loop
 */

// 🔬 Visual Analogy (One Turn of the Event Loop)

// 🧱 Call Stack empty?
//   ⬇️
// 🧬 Microtasks Queue? Run ALL
//   ⬇️
// 📦 Macrotask Queue → Run FIRST task
//   ⬆️
// Repeat Event Loop

// 🧬 4. MICROTASKS vs MACROTASKS
// Task Type	Added By	Examples	Priority
// 🧬 Microtasks	Promise.then(), queueMicrotask	Promise callbacks, async/await	HIGH
// 📦 Macrotasks	setTimeout, setInterval, setImmediate, I/O	DOM events, timers, etc.	LOW
// Microtasks always run before the next macrotask.

queueMicrotask(() => console.log("microtask"));
