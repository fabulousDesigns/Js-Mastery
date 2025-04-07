/**
 *! 🔒 Closures
1. Why do closures retain access to outer scope variables even after the outer function has returned?
 - This is because closures are tied to lexical environment which means when a closure is formed its gonna retained every member associated with the outer scope Lexical env
2. What will be logged here?
 */
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
const anotherCounter = outer();
anotherCounter(); // 1
// Basically each instance of outer initialization will create an independent closure that is why we will have 1, 2 then 1 again
// 3. Fix this classic closure trap:
for (let i = 0; i < 3; i++) {
  // replaced var with let
  setTimeout(function () {
    console.log("************************************");
    console.log(i);
  }, 1000);
}
// 🧠 let, const, var + TDZ (Temporal Dead Zone)
// 4. Explain why this throws an error:
console.log(x);
let x = 10;
// When we use let and const to declare a variable, the are hoisted in a such a unique way that instead of being initialized to undefined they exist in a period called TDZ. Basically is you try and access such a variable you will get Reference Error. TDZ will continue to exist until code execution hits let x = 10 now TDZ will cease to exist
// 5. What's the output and why?
function foo() {
  console.log(a); // undefined
  var a = 1;
  console.log(a); // 1
}
foo();
// when you define a variable with var keyword it means you want to make the variable either function scoped or globally scoped. Now in this example with regards to the first log, we are gonna get undefined because var a is gonna be hoisted and it will be initialized to undefined meaning Js knows we a have value of whatever type that is expected when initialization happens. just before the second log initializations happens and by the time we hit the second log a = 1 which explains why we are getting 1 in the second console.log
// 6. Spot the TDZ and fix:
function example() {
  console.log(message); // Reference error we can't access message before it is either declared and initialized
  let message = "Hi";
}
example();
// fix:
function exampleFix() {
  let message = "Hi";
  console.log(message);
}
exampleFix();

// 🚀 Hoisting
// 7. Differentiate hoisting behavior between var, let, const, and function declarations.
// var, functions - No TDZ initialized to undefined
// let, const, classes - TDZ, not initialized to anything, will continue to exist in TDZ period until the a declaration or an initialization is executed
// 8. What does this log and why?
greet();
function greet() {
  console.log("Hello!"); // Hello!
}

greetAgain();
var greetAgain = function () {
  console.log("Hi again!"); //Hi again!
};

// function declarations are hoisted and will execute first before their invocation

//🧑‍🏫 this keyword
// 9. Predict output + explain:
const person = {
  name: "Bernard",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
};
const greetFn = person.greet;
greetFn();

// 10. Fix the broken this using arrow functions or bind:
function Timer() {
  this.seconds = 0;
  setInterval(function () {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
new Timer();
// 🏛️ Classes
// What’s wrong with this class inheritance?

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    this.breed = breed;
    super(name);
  }
}

const dog = new Dog("Rex", "German Shepherd");

// parent class constructor should be called first before this.breed = breed so we should have:
class AnimalFixed {
  constructor(name) {
    this.name = name;
  }
}

class DogFixed extends AnimalFixed {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog2 = new DogFixed("Rex", "German Shepherd");

//12. Add private fields & methods to this class:

class BankAccount {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }

  #checkBalance() {
    return `your current balance is ${this.#balance}`;
  }
  deposit(amount) {
    this.#balance += amount;
    return this.#checkBalance();
  }
  withdraw(amount) {
    if (amount > this.#balance) return "Insufficient funds";
    this.#balance -= amount;
    return this.#checkBalance();
  }
}
