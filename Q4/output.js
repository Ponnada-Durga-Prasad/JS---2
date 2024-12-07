// Sort the following array of objects by age in descending order.

// Input: [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
// Expected Output: [{"name":"Bob","age":30},{"name":"Alice","age":25}]

let input = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

let output = input.sort((a, b) => b.age - a.age);

console.log(output);
