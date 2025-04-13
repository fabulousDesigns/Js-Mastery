/**
 * 🧠 What is Currying?
Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.
 */
// Normal Function
const add = (a, b) => a + b;
console.log(add(2, 3));
// Curried Version
const curriedAdd = (a) => (b) => a + b;
console.log(curriedAdd(2)(3));
/**
 🎯 Why Curry?
✅ Enables partial application: Pre-fill some arguments.
✅ Encourages point-free style (cleaner, more composable code).
✅ Plays beautifully with functional libraries (e.g., Ramda).
✅ Can make code easier to reuse and compose.
 */
/**
🧪 Manual Currying
Let’s write a basic curry function by hand:
 */
function curry(fn) {
  return function Curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) => Curried(...args, ...next);
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
curriedMultiply(2)(3)(4); // 24
curriedMultiply(2, 3)(4); // 24
