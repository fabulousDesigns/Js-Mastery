/**
 * ⚙️ The Main Features of Enhanced Object Literals
1. Shorthand Property Names
If the variable name and key name are the same, you can just write it once.
🔥 Before (ES5):
 */

let name = "Ghost";
let power = "Invisibility";

let hero = {
  name: name,
  power: power,
};

// 💡 After (ES6):
let name1 = "Ghost";
let power1 = "Invisibility";

let hero1 = {
  name1,
  power1,
};

/**
 * 2. Shorthand Method Definitions
No need for the function keyword inside objects.
🔥 Before:
 */
let car = {
  drive: function () {
    console.log("Vroom!");
  },
};
// 💡 After:
let car1 = {
  drive() {
    console.log("Vroom!");
  },
};

/**
 * 3. Computed Property Names
You can use expressions (like variables or functions) as property names by wrapping them in square brackets [].
🔥 Example:
 */
let propName = "level";
let game = {
  [propName]: 42,
};

console.log(game.level); // 42

// Even more savage:

let i = 1;
let dynamicObj = {
  ["prop" + i]: "One",
  ["prop" + (i + 1)]: "Two",
};

console.log(dynamicObj.prop1); // One
console.log(dynamicObj.prop2); // Two
