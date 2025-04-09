/**
 * Regardless of the programming language, the memory life cycle is pretty much always the same:

Allocate the memory you need
Use the allocated memory (read, write)
Release the allocated memory when it is not needed anymore
 */

// ! Allocation in javascript
// ! Value initialization
// In order to not bother the programmer with allocations, JavaScript will automatically allocate memory when values are initially declared.

const n = 123; // allocates mem for a number
const s = "string"; // allocates mem for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "str2"];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener(
  "click",
  () => {
    someElement.style.backgroundColor = "blue";
  },
  false
);

// Allocation via function calls
// Some function calls result in object allocation.
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element
// Some methods allocate new values or objects:

const s1 = "string";
const s2 = s.substr(0, 3); // s2 is a new string
// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.

const a1 = ["yeah yeah", "no no"];
const a2 = ["generation", "no no"];
const a3 = a.concat(a2);
// new array with 4 elements being
// the concatenation of a and a2 elements.
