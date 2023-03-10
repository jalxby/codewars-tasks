// Task:
//     Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
//
// Examples:
//     Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(arr) {
    return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

console.log(oddOrEven([0, 44, 65, 76, 22, 44, 66, 433, 5, 223, 44, 2, 5, 34, 7, 5, 52, 23, 235, 65]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))