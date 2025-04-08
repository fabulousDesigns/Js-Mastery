// V8 optimization step that involves replacing functions calls with function body
let sum
function add(x, y) {
    return x + y
}
function calculateTwoPlusFive() {
    for (let i = 0; i <= 100; i++) {
        sum = add(2 + 5)
    }
    return sum
}

console.log(calculateTwoPlusFive())