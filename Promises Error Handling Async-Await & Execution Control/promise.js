// 1️⃣ Understanding the Promise Constructor: new Promise((resolve, reject) => {})
// A Promise is a future value that is initially in the pending state, and then it either resolves (fulfilled) or rejects.
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Something went wrong!");
  }
});
/**
 * Breakdown:
new Promise() is the constructor.
resolve: Called when the async operation succeeds.
reject: Called when the async operation fails.
 */
// 2️⃣ Promise States: Pending, Fulfilled, Rejected
// Promise Life Cycle:
// Pending: The initial state; neither fulfilled nor rejected.
// Fulfilled: The operation was successful, and the promise is resolved with a value.
// Rejected: The operation failed, and the promise is rejected with an error.
// Visualization:
const myPromise = new Promise((resolve, reject) => {
  // Assume async operation here
  const success = true;

  if (success) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});
console.log(myPromise); // "Promise { <pending> }" until it's resolved or rejected
// 3️⃣ .then(), .catch(), .finally() Chaining
// .then():
// Used to handle the fulfilled state of the promise.
// It returns a new promise.
myPromise.then((result) => {
  console.log(result); // "Success!"
});
// .catch():
// Catches errors if the promise is rejected.
myPromise.catch((error) => {
  console.log(error); // "Failed!"
});
// .finally():
// Executes after either resolve or reject, no matter the outcome.
// Useful for cleanup tasks like hiding loading spinners.
myPromise.finally(() => {
  console.log("Cleanup or finishing task after promise settles");
});
// 4️⃣ Return Values and Promise Chaining Flow
// Each .then() or .catch() returns a new Promise, allowing for chained calls.
new Promise((resolve, reject) => resolve("First"))
  .then((result) => {
    console.log(result); // "First"
    return "Second"; // This will be passed to the next .then()
  })
  .then((result) => {
    console.log(result); // "Second"
    return "Third"; // Passes on to next .then() in the chain
  });
// 5️⃣ Error Propagation and Catching Errors Properly
// Promises automatically propagate errors up the chain, so you don’t have to wrap each function in a try-catch.
new Promise((resolve, reject) => reject("Oops!"))
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Caught error:", error); // "Caught error: Oops!"
  });
/**
 *! Important:
 *? You only need one .catch() at the end of the chain to catch errors from any previous promise.
 */
// 6️⃣ Promise Combinators
// 1. Promise.all()
// Resolves when all promises are fulfilled.
// Rejects as soon as any promise is rejected.
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results); // [1, 2, 3]
  })
  .catch((error) => {
    console.log("One of the promises failed!");
  });
/** 2. Promise.race()
Resolves when any promise in the array resolves.
Rejects when any promise rejects.
   */
const p4 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
const p5 = new Promise((resolve) => setTimeout(resolve, 200, "Second"));
Promise.race([p1, p2]).then((result) => {
  console.log(result); // "First" (p1 resolves first)
});
// 3. Promise.allSettled()
// Waits for all promises to settle (either resolve or reject).
// Returns an array with the results of all promises (success or failure).
const p6 = Promise.resolve(1);
const p7 = Promise.reject("Error!");
const p8 = Promise.resolve(3);
Promise.allSettled([p6, p7, p8]).then((results) => {
  console.log(results);
  // [
  //   { status: "fulfilled", value: 1 },
  //   { status: "rejected", reason: "Error!" },
  //   { status: "fulfilled", value: 3 }
  // ]
});
/**4. Promise.any()
Resolves as soon as any promise resolves successfully.
Rejects only if all promises are rejected. */
const p9 = Promise.reject("Failed");
const p10 = Promise.resolve(2);
const p11 = Promise.resolve(3);
Promise.any([p9, p10, p11])
  .then((result) => {
    console.log(result); // 2 (the first successful promise)
  })
  .catch(() => {
    console.log("All promises were rejected");
  });
// 7️⃣ Promise Anti-Patterns to Avoid (e.g., Nesting Instead of Chaining)
// ❌ Anti-Pattern: Nesting Promises
// Nesting promises inside .then() instead of chaining can lead to callback hell again.
new Promise((resolve) => resolve("Start")).then((result) => {
  new Promise((resolve) => resolve("Middle")).then((result) => {
    new Promise((resolve) => resolve("End")).then((result) =>
      console.log(result)
    );
  });
});
// ✅ Better: Use Chaining Instead
new Promise((resolve) => resolve("Start"))
  .then((result) => "Middle")
  .then((result) => "End")
  .then((result) => console.log(result)); // "End"
// Chaining makes things flatter, easier to follow, and cleaner.
// 8️⃣ Convert Callback-based Functions to Promise-based (Promisify)
// In Node.js, you can convert functions that use callbacks into Promise-based ones by promisifying them.
// Example: Callback-based fs.readFile
const fs = require("fs");

// Original callback-based version
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
// Promisified Version:
const fsPromises = require("fs").promises;
// Using the Promise API
fsPromises
  .readFile("file.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error("Error reading file:", err));
// Or manually promisify:
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFileAsync("file.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error("Error reading file:", err));

/**
   * 🎯 Recap
Promise constructor: new Promise(resolve, reject) handles async flow.
Promise states: pending, fulfilled, rejected.
Chaining with .then(), .catch(), .finally() allows for clean, readable async code.
Error handling is simplified with .catch().
Promise combinators (.all(), .race(), .allSettled(), .any()) enable powerful async workflows.
Avoid nesting promises; use chaining for readability.
Promisify callback-based functions for cleaner, modern async code.
   */
