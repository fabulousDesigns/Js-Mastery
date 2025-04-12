/**
Object destructuring
The destructuring assignment also works with objects.
The basic syntax is:
let {var1, var2} = {var1:…, var2:…}
 */
// We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.
// For instance:
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
let { title, width, height } = options;
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
// Properties options.title, options.width and options.height are assigned to the corresponding variables.
// The order does not matter. This works too:
// changed the order in let {...}
let { height1, width2, title3 } = { title: "Menu", height: 200, width: 100 };
// The pattern on the left side may be more complex and specify the mapping between properties and variables.
// If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:
let options3 = {
  title: "Menu",
  width: 100,
  height: 200,
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title4 } = options3;

// width -> w
// height -> h
// title -> title

console.log(title); // Menu
console.log(w); // 100
console.log(h); // 200

/**
 * The colon shows “what : goes where”. In the example above the property width goes to w, property height goes to h, and title is assigned to the same name.
For potentially missing properties we can set default values using "=", like this:
 */
let options4 = {
  title: "Menu"
};

let {width3 = 100, height3 = 200, title5} = options4;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
