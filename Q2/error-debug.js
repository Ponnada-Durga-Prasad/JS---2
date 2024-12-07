// const nums = [10, 20, 30];
// const result = nums.map((n) => n / 0).filter((n) => n > 0); // Bug: Improper math operation
// console.log(result.reduce());

const nums = [10, 20, 30];
const result = nums.map((n) => n / 10).filter((n) => n > 0);
console.log(
  result.reduce((acc, ele) => {
    return acc + ele;
  }, 0)
);
