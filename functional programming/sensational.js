// 🐣 STEP 1: What Even Is a Function?
// A function is a machine. You put something in, you get something out.
const double = (x) => x * 2;
console.log(double(5));
// 🧱 STEP 2: Function Output → Function Input
// The cool part?
// You can pass the output of one function into another function.
const double2 = (x) => x * 2;
const square = (x) => x * x;
const result = square(double(3)); // square(6) 36
console.log(result);
// See that? double(3) becomes 6, and then we send 6 into square().
// This is manual function composition.
// 🛠️ STEP 3: What If We Want to Automate That?
// Imagine you could just glue two functions together and say:
// “Yo, when I give you a number, do this, then that.”
// Let’s make a manual composition function:
const compose = (f, g) => (x) => f(g(x));
// 🔍 What’s Happening?
// g(x) runs first.
// Then f(g(x)) runs.
// You return that result.
const double3 = (x) => x * 2;
const square3 = (x) => x * x;
const doubleThenSquare = compose(square3, double3);
console.log(doubleThenSquare(3)); // 36
// ⚙️ STEP 4: Make It Work With More Functions
// Real life? You might want to glue together 3, 4, 5 functions.
// Here’s the upgraded version:
const compose2 =
  (...fns) =>
  (x) => {
    fns.reduceRight((acc, fn) => fn(acc), x);
  };
// This:
// Takes any number of functions
// Applies them from right to left
// Why reduceRight? Think of it like this:
compose(f, g, h)(x) === f(g(h(x)));
// Right-to-left = last one runs first.
