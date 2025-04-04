// closures gives a function access to its outer scope
// Main concept:  Access to outer scope
// ! 1. Lexical Scoping
//? Example
function init() {
  var name = "Mozilla"; // local variable created by init
  function displayName() {
    // inner function, that forms a closure
    console.log(name); // use var declared by parent function (init)
  }
  displayName();
}
//init();

// init is a parent function that has a local variable name and an inner function display name.
// displayName is only available in init scope
// displayName forms a closure and lexical scoping happens in that the compiler will try and resolve where variable name was defined and determine if it is available
/**
 * ✅ Lexical Scoping → The inner function (displayName) looks up variables in its outer scope (init).
 * ✅ Closure → Even after init() has finished executing, displayName() still has access to name because of the closure.
 */

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
// const counter1 = counter();
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// const counter2 = counter();
// counter2(); // 1
/** 
 * 🚀 Why is this dope?
counter() returns a function that remembers count even after it has finished running.
Each counter instance maintains its own state.
 */

//!  2. Scoping with let and const
/**
 * Before Es6, JS variables only had 2 kind of scopes: function scope and global scope
 * Variables declared with var keyword are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function
 * This can be tricky because blocks with curly braces do not create scopes?
 */

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);

// let and const allows you to create block scoped variables
if (Math.random() > 0.5) {
  const y = 1;
} else {
  const y = 2;
}
console.log(y);
