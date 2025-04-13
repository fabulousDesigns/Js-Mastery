// ! Introduction: callbacks
//Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later.
// Take a look at the function loadScript(src), that loads a script with the given src:

function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}
// It inserts into the document a new, dynamically created, tag <script src="…"> with the given src. The browser automatically starts loading it and executes when complete.
// We can use this function like this:
// load and execute the script at the given path
loadScript("/my/script.js");
// The script is executed “asynchronously”, as it starts loading now, but runs later, when the function has already finished.
// If there’s any code below loadScript(…), it doesn’t wait until the script loading finishes.
loadScript("/my/script.js");
// the code below loadScript
// doesn't wait for the script loading to finish
// ...
