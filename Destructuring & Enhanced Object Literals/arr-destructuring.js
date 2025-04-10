/**
 * Destructuring assignment
The two most used data structures in JavaScript are Object and Array.

Objects allow us to create a single entity that stores data items by key.
Arrays allow us to gather data items into an ordered list.
However, when we pass these to a function, we may not need all of it. The function might only require certain elements or properties.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

Destructuring also works well with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

Array destructuring
Here’s an example of how an array is destructured into variables:
 */

let arr = ["John", "Smith"];
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
console.log(firstName);
console.log(surname);
// “Destructuring” does not mean “destructive”.
// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. However, the array itself is not modified.
// It’s just a shorter way to write:
// let [firstName, surname] = arr;
let firstName1 = arr[0];
let surname1 = arr[1];
// Ignore elements using commas
// Unwanted elements of the array can also be thrown away via an extra comma:
let [firstName2, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
console.log(title);
// In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items are also skipped (as there are no variables for them).

/**
 * Works with any iterable on the right-side
  …Actually, we can use it with any iterable, not only arrays:
 */
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

//That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.

/**Assign to anything at the left-side
We can use any “assignables” on the left side.

let user = ({}[(user.name, user.surname)] = "John Smith".split(" "));
console.log(user.name);
console.log(user.surname);

For instance, an object property: */
let user = {};
[user.name, user.surname] = "John Smith".split(" ");

console.log(user.name); // John
console.log(user.surname); // Smith

// looping with Entries

let user2 = {
  name: "John",
  age: 30,
};

for (let [key, value] of Object.entries(user2)) {
  console.log(`${key}:${value}`);
}

let user3 = new Map();
user3.set("name", "John");
user3.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user3) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

// Swap Variables trick
// There’s a well-known trick for swapping values of two variables using a destructuring assignment:

let guest = "Jane";
let admin = "Pete";

// Swap: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];
console.log(`Guest: ${guest} Admin: ${admin}`); // Guest: Pete Admin: Jane

// Here we create a temporary array of two variables and immediately destructure it in swapped order.
// We can swap more than two variables this way.

let person = { name: "Bernard", role: "Guest" };
let title2 = "Admin";

[person.role, title2] = [title, person.role];

console.log(person); // { name: "Bernard", role: "Admin" }
console.log(title2); // "Guest"

// The rest ‘…’
// Usually, if the array is longer than the list at the left, the “extra” items are omitted.

// For example, here only two items are taken, and the rest is just ignored:

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar
// Further items aren't assigned anywhere

// If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":
let [name3, name4, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// rest is an array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
/**
 * The value of rest is the array of the remaining array elements.
We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.
 */
let [name6, name7, ...titles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
// now titles = ["Consul", "of the Roman Republic"]
// Default values
// If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined:

let [firstName4, surname4] = [];

console.log(firstName); // undefined
console.log(surname); // undefined
// If we want a “default” value to replace the missing one, we can provide it using =:

// default values
let [name8 = "Guest", surname8 = "Anonymous"] = ["Julius"];

console.log(name); // Julius (from array)
console.log(surname8); // Anonymous (default used)
// Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.

// For instance, here we use the prompt function for two defaults:

// runs only prompt for surname
let [name9 = prompt("name?"), surname9 = prompt("surname?")] = ["Julius"];

console.log(name); // Julius (from array)
console.log(surname9); // whatever prompt gets
// Please note: the prompt will run only for the missing value (surname).
