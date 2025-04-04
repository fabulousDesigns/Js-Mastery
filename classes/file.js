/**
*! 1️⃣ Class Syntax & Execution
Basic Class Structure
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}
//instantiating a class
const john = new Person("John", 25);
// john.greet();
/**
 *! 🔹 How Classes Execute in JS
Classes are not hoisted like functions (function declarations are hoisted, but class declarations are NOT).
You must define the class before using it.
The constructor method runs automatically when an object is created.
 */
//console.log(new Animal());
class Animal {}
/**
 *! 2️⃣ Class Scope & Execution Context
Inside a class:
this refers to the current instance.
Methods have function scope, but they are automatically bound to the instance.
Arrow functions inside a class keep the outer this.
 */
// Example:
class Test {
  constructor() {
    this.name = "Bernard";
    this.sayName = () => {
      console.log(this.name);
    };
  }
}
const obj = new Test();
obj.sayName(); // ✅ Bernard

/**
 *! 3️⃣ Instance Methods vs. Static Methods
🔹 Instance Methods
These are methods that belong to the object instance.
 */

class Car {
  constructor(model) {
    this.model = model;
  }
  drive() {
    console.log(`${this.model} is driving`);
  }
}
const myCar = new Car("Tesla");
myCar.drive();
/**
 * 🔹 Static Methods
These belong to the class itself, not to instances.
 */

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3));
//const objMathUtils = new MathUtils();
// objMathUtils.add(2, 4); // TypeError: objMathUtils.add is not a function
/**
 * 4️⃣ Private Fields & Properties (# Syntax)
🔹 Private fields (introduced in ES2020) are prefixed with # and cannot be accessed outside the class.
 */

class BankAccount {
  #balance;
  constructor(initialAmount) {
    this.#balance = initialAmount;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}, new balance: ${this.#balance}`);
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
// myAccount.#balance; ❌ SyntaxError: Private field '#balance' must be declared
/**
 *  Why Use Private Fields?
Prevents direct manipulation.
Provides encapsulation.
 */
/**
 5️⃣ Public, Private, and Protected Properties
Property Type	Accessible Inside Class?	Accessible Outside Class?	Accessible in Child   Classes?
Public	✅ Yes	✅ Yes	✅ Yes
Private (#)	✅ Yes	❌ No	❌ No
Protected	✅ Yes	❌ No	✅ Yes
 */
/**
 * 🔹 Protected Properties (Using _ Naming Convention)
JavaScript does not have a true protected keyword, but by convention, we use _propertyName to indicate a protected field.
 */

class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary; //? Protected by convention
  }

  showSalary() {
    console.log(`Salary: ${this._salary}`);
  }
}

const emp = new Employee("Alice", 5000);
console.log(emp.name); // ✅ Alice
console.log(emp._salary); // ⚠️ Not truly private, but convention says "don't touch"

/**
 * 6️⃣ Constructors & The super() Keyword
constructor: Initializes properties when an instance is created.
super(): Calls the parent class constructor.
 */

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal2 {
  constructor(name, breed) {
    super(name); // Calls Animal's constructor
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} (a ${this.breed}) barks!`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound(); // ✅ Buddy (a Golden Retriever) barks!

/**
 * 7️⃣ Inheritance & Method Overriding
🔹 Inheriting from a Class
 */
class Parent {
  sayHello() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {}

const kid = new Child();
kid.sayHello(); // ✅ "Hello from Parent"
// 🔹 Overriding Methods
class Parent2 {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child2 extends Parent2 {
  greet() {
    console.log("Hello from Child");
  }
}

const child = new Child2();
child.greet(); // ✅ "Hello from Child"
/**
 * 8️⃣ Encapsulation (Data Hiding)
Encapsulation means restricting direct access to object properties and only allowing controlled access through methods.
 */

class Bank {
  #balance = 0; // Private property

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  getBalance() {
    return `Balance: ${this.#balance}`;
  }
}

const myBank = new Bank();
myBank.deposit(1000);
console.log(myBank.getBalance()); // ✅ Balance: 1000
// myBank.#balance = 5000; ❌ SyntaxError: Private field '#balance' must be declared

// 9️⃣ get and set Methods (Property Accessors)
class Person3 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    return newName.length > 2
      ? (this._name = newName)
      : console.log("Name too short");
  }
}

const person = new Person3("Alice");
console.log(person.name); // ✅ ALICE (getter converts to uppercase)
person.name = "Al"; // ❌ "Name too short!"
console.log(person.name);
person.name = "A"; // ❌ "Name too short!"
console.log(person.name);

// 🔥 Final Summary
// Concept	                                  Key Takeaway
// Class Syntax	                              class ClassName {}
// Instance Methods	                          Methods accessible from instances
// Static Methods	                            Methods tied to the class, not instances
// Private Fields	                            Use #property to make it private
// Encapsulation	                            Use private/protected fields & getters/setters
// Inheritance	                              class Child extends Parent {}
// Method Overriding	                        Child class can redefine methods
// super()	                                  Calls the parent constructor
// TDZ in Classes	                            Class declarations are NOT hoisted

