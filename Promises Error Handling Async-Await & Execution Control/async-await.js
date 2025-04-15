/**
 * 📘 1. What is async?
When you define a function with async, it always returns a Promise — even if you return a plain value.
🔹 Example:
 */
async function greet() {
  return "Hello!";
}
greet().then(console.log);
// ✅ You can now await inside this function. Think of async as unlocking the power of await inside it.
/**
 * 📘 2. What is await?
await pauses execution inside an async function until the Promise resolves.
🔹 Example:
 */
async function getUserName() {
  const response = await fetch("/user");
  const data = await response.json();
  return data.name;
}
// ⏸️ Execution pauses at each await — it waits for the Promise to resolve before moving to the next line.
/**
 * 🔁 3. Sequential vs Parallel Execution
✅ Sequential (Default behavior)
Each line waits for the previous one to finish:
 */
async function run() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0].id);
}
// ⛔️ This is slower when things don’t depend on each other.

// ⚡ Parallel Execution with Promise.all()
async function run() {
  const userPromise = fetchUser();
  const postsPromise = fetchPromise(1);
  const commentsPromise = fetchComments(101);

  const [user, posts, comments] = await Promise.all([
    userPromise,
    postsPromise,
    commentsPromise,
  ]);
}
// ✅ Better performance — great when tasks are independent!

// 🔁 4. Await in Loops
// 🐢 Sequential Loop (e.g., for...of)

async function loadUsers(users) {
  for (const id of users) {
    const user = await fetchUsers(id);
    console.log(user.name);
  }
}
// ✅ Use when order matters or requests must be made one after the other.
// ⚡ Parallel Loop using Promise.all()

async function loadUsers(users) {
  const promises = users.map((id) => fetchUser(id));
  const results = await Promise.all(promises);
  results.forEach((user) => console.log(user.name));
}
// ✅ Use when you don’t care about the order and want faster performance.

// ❌ Never await inside map() directly
const names = userIds.map(async (id) => {
  const user = await fetchUser(id); // 🔥 BAD PRACTICE
  return user.name;
});

// Why? Because names becomes an array of promises, not resolved values.
// ✅ Instead, use:
const namesAll = await Promise.all(
  userIds.map((id) => fetchUser(id).then((u) => u.name))
);

// ⚠️ 5. Error Handling with try/catch
// You should always wrap your await logic inside try/catch blocks:

async function safeFetch() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
  } catch (err) {
    console.error("Something failed:", err);
  }
}
// ✅ This works like .catch() for promises, and is cleaner and more centralized for async/await.

// 🧙 6. Await with Non-Promise Values
// await works with any value — not just promises.

async function demo() {
  const x = await 5; // 👈 immediately returns 5
  console.log(x); // 5
}
// 🔹 If the value is not a promise, it’s wrapped in Promise.resolve(value) behind the scenes.

// 🚀 7. Top-level Await with IIFE (Immediately Invoked Function Expression)
// If you're in a file/module that doesn’t support top-level await, wrap your logic in an async IIFE:
(async function () {
  const data = await fetchStuff();
  console.log(data);
})();
// ✅ This lets you use await at the top level without declaring a new function.

/**
✅ 9. Best Practices for async/await
✅ Use try/catch for every async block
✅ Use Promise.all() for parallel tasks
✅ Don’t await inside map() unless you Promise.all() it
✅ Prefer async/await over .then() for better readability in sequences
✅ Use named functions for reuse and testability
✅ Don’t forget: async returns a Promise, always!
 */
