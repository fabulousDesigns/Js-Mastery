self.onmessage = function (e) {
  const number = e.data;
  const result = fibonacci(number);
  self.postMessage(result);
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 🧠 Note: self is the global scope inside the worker — similar to window in the main thread.
