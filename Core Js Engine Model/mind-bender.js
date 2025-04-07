// Endless loop, where the JS Engine waits for tasks, executes them and then sleeps, waiting for more tasks
// The general algorithm of the engine:

// While there are tasks:
// execute them, starting with the oldest task.
// Sleep until a task appears, then go to 1.

// START
//  ⬇️
// [main script] → enters call stack
//  ⬇️
// Executes until done
//  ⬇️
// Call stack empty? ✅
//  ⬇️
// 🧬 Drain Microtasks
//  ⬇️
// 📦 Run 1 Macrotask
//  ⬇️
// Repeat above
//  ⬇️
// If nothing to do → sleep 💤
//  ⬇️
// New event/task happens → wake up 🔔
//  ⬇️
// Back to top
