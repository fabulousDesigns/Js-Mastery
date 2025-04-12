// Emphasizes the use of pure functions, immutability, and higher-order functions to create programs that are more predictable and easier to reason about

// ! 1. Pure Functions
// ? -> Produce the same output for the same input and have noe side effects

// Impure function
let total = 0;
function addToTotal(amount) {
  total += amount;
  return total;
}

// Pure function
function add(x, y) {
  return x + y;
}
/**In the above code, the addToTotal function modifies the external state (total), making it impure. On the other hand, the add function is pure because it doesn't rely on external state and returns a consistent result for the same inputs. */

// !2. Immutability
// ? -> In the functional world, once data is created, it remains unchanged. This not only simplifies reasoning but also plays well with parallel processing. Here's a taste of immutability:
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];
console.log(newArray);

// In this example, we're creating a new array newArray by spreading the elements of the originalArray and adding a new element 4. The originalArray remains unchanged.

/**Benefits of Functional Programming
Functional programming brings a plethora of benefits:
Readability: The focus on small, pure functions leads to code that's easier to read and understand.
Predictability: Since pure functions produce consistent output, debugging becomes a breeze.
Concurrent and Parallel Execution: Immutability and lack of side effects make it easier to handle concurrency and parallelism.
Reusable Code: Higher-order functions enable you to write reusable pieces of code that can be applied to different scenarios.
 */

// Immutability and Pure Functions
// Understanding Immutability
//*Immutability ensures that once data is created, it can't be changed. This might sound counterintuitive, but it has remarkable benefits, especially when it comes to debugging and maintaining code.
// Consider an example with objects:
const person = { name: "Alice", age: 30 };
const updatedPerson = { ...person, age: 31 };
/**
 * In this example, we're creating a new object updatedPerson by spreading the properties of the person object and modifying the age property. The person object remains unchanged.
 */

/**
 * Characteristics of Pure Functions
 * Pure functions are the backbone of functional programming. They exhibit two main characteristics:
 * 1. Deterministic: For the same input, a pure function will always produce the same output. */
function add(a, b) {
  return a + b;
}
const result1 = add(2, 3); // 5
const result2 = add(2, 3); // 5
// 2. No Side Effects: Pure functions don't modify external state, ensuring a clear separation of concerns.

let total2 = 0;

// Impure function
function addToTotal2(amount) {
  total2 += amount;
  return total2;
}

// Pure function
function addToTotalPure(total, amount) {
  return total + amount;
}
/**
 * Advantages of Immutability and Pure Functions
Imagine working with a codebase where you can trust that functions won't unexpectedly modify data or introduce hidden dependencies. This level of predictability simplifies testing, refactoring, and collaboration.
 */
/**
 * Higher-Order Functions and Function Composition
Exploring Higher-Order Functions
Higher-order functions are functions that can accept other functions as arguments or return them. They open the door to elegant and concise code.
 */

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

//* In this example, the multiplier function is a higher-order function that returns another function based on the factor provided.

// * Leveraging Function Composition
// Function composition is like Lego for functions. It involves combining simple functions to build more complex ones. This makes code modular and easier to reason about.

// ? -> taking small functions and sticking them together like Lego blocks to build something bigger

const add2 = (x, y) => x + y;
const square = (x) => x * x;

function compose(...functions) {
  return (input) => functions.reduceRight((acc, fn) => fn(acc), input);
}

const addAndSquare = compose(square, ([x, y]) => add2(x, y));

console.log(addAndSquare([3, 4])); // 49

//* In this example, the compose function takes multiple functions and returns a new function that applies them in reverse order.
// Data Processing Pipelines
// Imagine you have an array of numbers and you want to double each number, filter out the even ones, and then find their sum.
const nums = [1, 2, 3, 4, 5, 6];
const double4 = (num) => num * 2;
const isEven = (num) => num % 2 === 0;

const res = nums
  .map(double4)
  .filter(isEven)
  .reduce((acc, num) => acc + num, 0);

console.log("Res:" + res);

const nums2 = [1, 2, 3, 4, 5, 6];

const triple2 = (n) => n * 3;
const isOdd = (n) => n % 2 !== 0;
const minusOne = (n) => n - 1;

const res2 = nums
  .map(triple2) // At this point we gonna have a new arr of [3,6,9,12,15,18]
  .filter(isOdd) // we will have a filtered this based on if it is odd or not [3, 9, 15]
  .map(minusOne) // here we gonna have [2, 8, 14]
  .reduce((acc, val) => acc + val, 0); // 24

console.log("Result:", res2); // Result -> 24
