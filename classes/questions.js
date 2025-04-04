// 💡 THEORY QUESTIONS (EXPLAIN IN DEPTH)
// 1️⃣ What happens if you try to call a class method before the class is declared?
//   You will get a reference error this is because classes will be in TDZ until the code hits their declaration as much us JS knows they exist classes will not be hoisted like functions and this explains why you will get a Reference Error in that its not possible to access a class before it is declared
// Ex:
// console.log(new Animal()) // Reference Error
// class Animal{}
// 2️⃣ What is hoisted when declaring a class in JavaScript?
// 3️⃣ Explain the difference between instance properties and static properties in a class.
// Instance props are accessed or rather belongs to the object when you create or initialize an obj from a particular class.
// for example:
/**
 * class Animal{
 *  name;
 *  constructor(name){
 *    this.name = name
 *   }
 *  displayName(){
 *   console.log(`My pet is ${this.name}`)
 *   }
 * }
 * let instanceProp = new Animal("Cat")
 * instanceProp.name // instances property
 */
// For static props they belong to a class and you don't need an instance to access them
/**
 * class Animal2{
 *  static name;
 *  static displayName(){
 *   console.log(`My pet is ${this.name}`)
 *   }
 * }
 *  console.log(Animal2("Dog"))
 */
// 4️⃣ Can you access private fields (#field) outside of the class? Why or why not?
// You cannot access private fields outside of a class because once declared they are only accessed inside that class only
// 5️⃣ What’s the difference between Object.create() and class inheritance?
// 6️⃣ Can you use an async constructor in a class? Why or why not?
// 7️⃣ What happens if you try to use this before calling super() in a subclass?
// Syntax error
// 8️⃣ What is method overriding in JavaScript classes? How does it work?
// Redefining a method to disregard what it was initially for example in a parent class you might have:
/**
 *  method(){
 * return "I'm a parent"
 * }
 * Then in a subclass you should have:
 *  method(){
 *   return "I'm a child"
 * }
 */
// 9️⃣ How do getters and setters work in a class? Provide an example.
// They help implement Ecapsulation in that they restrict access and updating props to methods only
/**
 * class Person3 {
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
 */

// 🔟 How does JavaScript handle multiple levels of inheritance (i.e., a class extending another class, which extends another class)?

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, studentID) {
    super(name);
    this.studentID = studentID;
  }
}

// const s = new Student("John", 123);
// console.log(s);

class BankAccount {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    return (this.#balance += amount);
  }

  withdraw(amount) {
    if (this.#balance > 0) {
      return (this.#balance -= amount);
    } else {
      return "You don't have enough money in your account";
    }
  }

  getBalance() {
    return this.#balance;
  }
}
const myAccount = new BankAccount(500);
myAccount.deposit(200);
myAccount.withdraw(100);
// console.log(myAccount.getBalance()); // 600

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.mode = model;
    this.year = year;
  }
  startEngine() {
    console.log("Engine Started");
  }
}

class Car extends Vehicle {
  constructor(make, model, year, fuelType) {
    super(make, model, year);
    this.make = make;
    this.model = model;
    this.year = year;
    this.fuelType = fuelType;
  }
  startEngine() {
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Corolla", 2022, "Petrol");
myCar.startEngine(); // "Car engine started"
console.log(myCar.model); // "Toyota"

class Logger {
  static logMessage(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}
Logger.logMessage("System started");
// Output: [2025-04-04T12:00:00.000Z] System started

/**
 * 5.  Implement a singleton pattern using JavaScript classes:
The class should have a static method getInstance().
It should always return the same instance of the class.
 */

/**
 * 🚀 BONUS: Real-World Scenario Question
You're designing a user authentication system using JavaScript classes.
Implement a User class that stores a username and password (password should be private).
Add a method checkPassword(inputPassword) that returns true if the password matches, otherwise false.
Create an Admin class that extends User and has an extra method resetPassword(newPassword)
 */

class User {
  username;
  #password;
  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }
  checkPassword(inputPassword) {
    return this.#password === inputPassword ? true : false;
  }
}

class Admin extends User {
  constructor(username, password) {
    super(username);
    this.username = username;
    this.password = password;
  }
  resetPassword(newPassword) {
    return (this.password += newPassword);
  }
}
const user = new User("bernard", "securePass123");
console.log(user.checkPassword("wrongPass")); // false
console.log(user.checkPassword("securePass123")); // true

const admin = new Admin("adminUser", "adminPass");
admin.resetPassword("newAdminPass");
console.log(admin.checkPassword("newAdminPass")); // true
