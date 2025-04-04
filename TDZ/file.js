/**
 A Solid, Clear Explanation of TDZ:
You can absolutely explain it like this:

"TDZ (Temporal Dead Zone) is a state that occurs when variables declared with let and const are hoisted but not initialized immediately. During this period, if you try to access the variable before it’s initialized, you will get a ReferenceError. The variable only becomes accessible once the code execution reaches the point where it’s actually declared and initialized."
Quick Breakdown:
Hoisting happens, but the initialization for let and const doesn’t occur until later.
During the TDZ, any attempt to access the variable will throw a ReferenceError.
Once the variable is initialized (i.e., the code reaches its declaration), you can access it safely.
 */

console.log(foo); // ❌ ReferenceError: Cannot access 'foo' before initialization
let foo = 42;

/**
 * In this example:
let foo is hoisted, but it’s in the TDZ until the declaration line is reached.
Accessing foo before its declaration triggers a ReferenceError.
 */
