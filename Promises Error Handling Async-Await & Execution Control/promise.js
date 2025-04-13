// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.
// The analogy isn’t terribly accurate, because JavaScript promises are more complex than a simple subscription list: they have additional features and limitations. But it’s fine to begin with.

// The constructor syntax for a promise object is:
let promise = new Promise(function (resolve, reject) {
  // executor (the producing code)
});
// The function passed to new Promise is called the executor.
/**
 * When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.
Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.s
When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.
So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.
The promise object returned by the new Promise constructor has these internal properties:
state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.
 */
let promise2 = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed
  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});
console.log(promise2);
// To summarize, the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of the corresponding promise object.
// A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.
// There can be only a single result or an error
// The executor should call only one resolve or one reject. Any state change is final.

// All further calls of resolve and reject are ignored:

let promise3 = new Promise(function (resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
// The idea is that a job done by the executor may have only one result or an error.
// Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.
/**
 * ! Reject with Error objects
In case something goes wrong, the executor should call reject. That can be done with any type of argument (just like resolve). But it is recommended to use Error objects (or objects that inherit from Error). The reasoning for that will soon become apparent.
 */
// ! Immediately calling resolve/reject
// In practice, an executor usually does something asynchronously and calls resolve/reject after some time, but it doesn’t have to. We also can call resolve or reject immediately, like this:

let promise4 = new Promise(function (resolve, reject) {
  // not taking our time to do the job
  resolve(123); // immediately give the result: 123
});
// For instance, this might happen when we start to do a job but then see that everything has already been completed and cached.
// That’s fine. We immediately have a resolved promise.

/**
 * The state and result are internal
The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.
 */
