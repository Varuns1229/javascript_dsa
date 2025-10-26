// write the function to count the negative  number o array
const arr = [-1, -2, 6, 8, 3, 45, -34, -9];

const countNegative = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
};

const result = countNegative(arr);

console.log("===result===>", result);
