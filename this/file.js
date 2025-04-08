// Refers to how a function is called and not where it is defined

// 💡 Types of this bindings:
// 1. Global Binding
console.log(this); // this refers to the Global Object(window in browser, global in Node)
// 2. Implicit Binding	obj.method()	The object left of the dot
// 3. Explicit Binding	fn.call(obj) / fn.apply(obj)	this is explicitly set to obj
// 4. Hard Binding	fn.bind(obj)	Always binds this to obj (returns new fn)
// 5. Arrow Functions	() => {}	Lexically inherits this from enclosing scope
// 6. Constructor	new Foo()	this refers to the newly created object
