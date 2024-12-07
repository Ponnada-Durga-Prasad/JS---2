//  Create a chain of operations to transform the following array:

// Input: [1, 2, 3, 4, 5]

// Task: Double the even numbers and sum them.

// Expected Output: 12

let arr = [1, 2, 3, 4, 5];

function chaining(arr) {
  return arr.map((ele) => ele * 2).reduce((acc, ele) => acc + ele, 0);
}

console.log(chaining(arr));
