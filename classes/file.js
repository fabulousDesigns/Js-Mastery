// classes & constructors
// To declare a class use class keyword

class Person {
  name;

  constructor(name) {
    this.name = name;
  }
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

const giles = new Person("Giles");
giles.introduceSelf(); // Hi! I'm Giles
/**
Omitting constructors
If you don't need to do any special initialization, you can omit the constructor, and a default constructor will be generated for you:
 */

class Animal {
  sleep() {
    console.log("zzzzzzzzz");
  }
}
const spot = new Animal();
spot.sleep();
// Inheritance
class Professor extends Person {
  teaches;
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }
  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor`
    );
  }
  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
// extends indicate that a class inherits from another class
// The superclass constructor takes care of setting name
// After that, the Professor constructor sets the teaches property.
// Note: If a subclass has any of its own initialization to do, it must first call the superclass constructor using super(), passing up any parameters that the superclass constructor is expecting
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'
walsh.grade("my paper"); // some random grade

// Encapsulation
