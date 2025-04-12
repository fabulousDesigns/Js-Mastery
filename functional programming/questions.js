const nums2 = [1, 2, 3, 4, 5, 6];

const triple2 = (n) => n * 3;
const isOdd = (n) => n % 2 !== 0;
const minusOne = (n) => n - 1;

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// Break out each transformation
const tripleAll = (arr) => arr.map(triple2);
const filterOdd = (arr) => arr.filter(isOdd);
const minusOneAll = (arr) => arr.map(minusOne);
const sumAll = (arr) => arr.reduce((acc, val) => acc + val, 0);

// Compose into a reusable function
const processNumbers = compose(sumAll, minusOneAll, filterOdd, tripleAll);

const res2 = processNumbers(nums2);
console.log("Result:", res2); // ✅ Result: 24

const mapPipe =
  (...fns) =>
  (arr) =>
    arr.map((item) => fns.reduce((acc, fn) => fn(acc), item));

const process = mapPipe(triple2, minusOne);
const res3 = process(nums2);
console.log("Result", res3);

const filterPipe =
  (...fns) =>
  (arr) =>
    arr.filter((item) => fns.reduce((acc, fn) => fn(acc), item));

// const reducePipe = (...fns) => arr => arr.reduce()