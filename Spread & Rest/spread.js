/**
 * Spread syntax
We’ve just seen how to get an array from the list of parameters.

But sometimes we need to do exactly the reverse.

For instance, there’s a built-in function Math.max that returns the greatest number from a list:
 */

console.log(Math.max(3, 5, 1));

// Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

let arr = [3, 5, 1];

console.log(Math.max(arr)); // NaN

/**
 * And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

For Math.max:
 */
let arr2 = [3, 5, 1];

console.log(Math.max(...arr2)); // 5 (spread turns array into a list of arguments)

// We also can pass multiple iterables this way:
let arr3 = [1, -2, 3, 4];
let arr4 = [8, 3, -8, 1];

console.log(Math.max(...arr3, ...arr4)); // 8

// We can even combine the spread syntax with normal values:

let arr5 = [1, -2, 3, 4];
let arr6 = [8, 3, -8, 1];

console.log(Math.max(1, ...arr5, 2, ...arr6, 25)); // 25

// In the examples above we used an array to demonstrate the spread syntax, but any iterable will do.
// For instance, here we use the spread syntax to turn the string into array of characters:

let str = "Hello";

console.log([...str]); // [ 'H', 'e', 'l', 'l', 'o' ]

/**
 * The spread syntax internally uses iterators to gather elements, the same way as for..of does.

So, for a string, for..of returns characters and ...str becomes "H","e","l","l","o". The list of characters is passed to array initializer [...str].

For this particular task we could also use Array.from, because it converts an iterable (like a string) into an array:
 */

let str2 = "Hello";

// Array.from converts an iterable into an array
console.log(Array.from(str2)); // [ 'H', 'e', 'l', 'l', 'o' ]

/**
 * The result is the same as [...str].

But there’s a subtle difference between Array.from(obj) and [...obj]:

Array.from operates on both array-likes and iterables.
The spread syntax works only with iterables.
So, for the task of turning something into an array, Array.from tends to be more universal.
 */

// Copy an array/object
// It is possible to do the same thing with the spread syntax.

let arr7 = [1, 2, 3];
let arrCopy = [...arr7];
// do the arrays have the same contents?
console.log(JSON.stringify(arr7) === JSON.stringify(arrCopy)); // true
// are the arrays equal?
console.log(arr7 === arrCopy); // false (not same reference)
// modifying our initial array does not modify the copy:
arr7.push(4);
console.log(arr7); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3

// Note that it is possible to do the same thing to make a copy of an object:
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
// then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

/**
 * This way of copying an object is much shorter than let objCopy = Object.assign({}, obj) or for an array let arrCopy = Object.assign([], arr) so we prefer to use it whenever we can.

Summary
When we see "..." in the code, it is either rest parameters or the spread syntax.

There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
Use patterns:

Rest parameters are used to create functions that accept any number of arguments.
The spread syntax is used to pass an array to functions that normally require a list of many arguments.
Together they help to travel between a list and an array of parameters with ease.

All arguments of a function call are also available in “old-style” arguments: array-like iterable object.
 */
