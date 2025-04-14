// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// There are two ways in which the callback may be called: synchronous and asynchronous. Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.

// Understanding whether the callback is synchronously or asynchronously called is particularly important when analyzing side effects. Consider the following example:

// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);

// If doSomething calls the callback synchronously, then the last statement would log 2 because value = 2 is synchronously executed; otherwise, if the callback is asynchronous, the last statement would log 1 because value = 2 is only executed after the console.log statement.

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("GoodBye!");
}

//greetUser("Bernard", sayGoodbye);

/**
 * 
📌 What's happening:
greetUser takes a name and a callback.
It greets the user and then calls the callback (sayGoodbye in this case).
 */

//! 🔄 Why Use Callbacks?
// To wait until something finishes (like a network request or file read).
// To make code non-blocking and asynchronous.
// To separate logic (separation of concerns).

// 🕰️ Real-world Example (Async Callback):
// setTimeout(() => {
//   console.log("This runs after 2 secs");
// }, 2000);

/**
 * 📎 TL;DR
Callback = function passed to another function.
Used a LOT in async code (before Promises and async/await came along).
Helps make JS non-blocking.
 */

/**
 * ⚔️ Synchronous vs Asynchronous Callbacks
🧠 What’s the difference?
At a high level:

Synchronous callback: Runs immediately, in the same call stack.

Asynchronous callback: Runs later, outside the current call stack, often via the event loop.
 */
// 🔁 Synchronous Callback (🔥Instant Execution)
function doMath(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

// console.log(doMath(5, 4, add)); // 👉 9
/**
 * 🧬 Breakdown:
doMath takes add as a callback and calls it immediately.
Runs top to bottom. No waiting. Blocking.
⏳ Think of it as:
"Call this function right now while we're still doing things."
 */

// ⏱️ Asynchronous Callback (💣Delayed Execution)
console.log("start");
setTimeout(() => {
  console.log("Callback executed after 1s");
}, 1000);
console.log("end");
/**
Start
End
Callback executed after 1s
 */

//🧬 Breakdown:
// The callback inside setTimeout is asynchronous.
// It’s registered to run later, and JS continues without waiting.
// ⏳ Think of it as:
// "Do this later when you're free."

// 🧵 How JS Handles Async Callbacks
/**
 * JavaScript is single-threaded, but it can handle async behavior using:
Callback Queue
Web APIs (like setTimeout, fetch)
Event Loop
The callback is registered to be executed after the current stack is clear.
 */

// 🧪 Example That Combines Both

function syncCallback(cb) {
  console.log("Before sync callback");
  cb(); // called immediately
  console.log("After sync callback");
}

function asyncCallback(cb) {
  console.log("Before async callback");
  setTimeout(cb, 1000); // scheduled for later
  console.log("After async callback");
}

syncCallback(() => console.log("SYNCED!"));
asyncCallback(() => console.log("ASYNCED!"));

/**
 * 🔍 Key Differences Recap
Feature	Synchronous Callback	Asynchronous Callback
Executes	Immediately	Later (after current task)
Blocking	Yes	No
Uses event loop?	No	Yes
Examples	Array.map(), filter()	setTimeout(), fetch()
 */

/**
Want a mental model?
Synchronous: Like giving a cashier your order and waiting.
Asynchronous: Leaving your order, walking away, and being called when it’s ready.
 */

// ⚔️ Named vs Anonymous Callbacks
// 🧠 What’s the difference?
// It’s all about how the callback function is defined:

// Type	      Definition style	                                   Has a name?

// Named	    Defined with a function name	                      ✅ Yes
// Anonymous	Defined inline (arrow or function)	                ❌ No

// 🟢 Named Callback Example
function onComplete() {
  console.log("Operation Completed");
}
setTimeout(onComplete, 1000);
/**
Why it's nice:
Reusable
Easier to debug (shows up with a name in stack traces)
More readable
 */

// ⚪ Anonymous Callback Example
setTimeout(function () {
  console.log("Done!");
}, 1000);
// Or with arrow function:
setTimeout(() => {
  console.log("Done!");
}, 1000);
/**
 🔥 Why it’s common:
Concise
Ideal for small, one-off logic
Great when you don’t reuse the function
 */

//! 🔥 Callback Hell & the Pyramid of Doom
// 🧠 What is Callback Hell?
// Callback Hell is what happens when you have nested callbacks inside callbacks inside callbacks... and your code starts to look like a sideways Christmas tree 🎄, or worse, a Pyramid of Doom.
// It’s hard to read, hard to debug, and a nightmare to maintain.
// ? 🔥 Classic Example (BEHOLD THE CHAOS)

getUser(id, function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      sendNotification(comments[0], function (response) {
        console.log("Notification sent:", response);
      });
    });
  });
});

/**
 * ⚠️ Problems:
Too many nested levels 😵
Hard to track flow
Error handling? Forget it.
Code smells like... pain 💀
 */
/**
 * 🎯 Why Does This Happen?
Because asynchronous operations (e.g. API calls, file reads) rely on callbacks, and if each one depends on the result of the previous, you end up nesting them.
 */

/**
 * 💡 How to Recognize Callback Hell
Too many nested levels
Lots of function(...) { ... } inside other functions
Arrow functions stacked like stairs (=> => =>)
Logic is hard to follow and mentally untangle
 */
// 😇 How to Escape It
// ✅ 1. Use Named Functions
function handleUser(user) {
  getPosts(user.id, handlePosts);
}

function handlePosts(posts) {
  getComments(posts[0].id, handleComments);
}

function handleComments(comments) {
  sendNotification(comments[0], handleNotification);
}

function handleNotification(response) {
  console.log("Done:", response);
}

getUser(id, handleUser);

// ✅ 2. Use Promises
getUser(id)
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => sendNotification(comments[0]))
  .then((response) => console.log("Done:", response))
  .catch((err) => console.error("Something broke:", err));
// Flat, readable, chainable. Promises were made to fix callback hell.

// ✅ 3. Use async/await (the ultimate cheat code)
async function notifyUser(id) {
  try {
    const user = await getUser(id);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    const response = await sendNotification(comments[0]);
    console.log("Done:", response);
  } catch (err) {
    console.error("Oops:", err);
  }
}

//  async code looks like synchronous code. So clean. So powerful. 🧼✨
