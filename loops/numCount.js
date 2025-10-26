// get the number digit count
const num = -2345;

const getNumCount = (num1) => {
  let count = 0;

  if (num1 == 0) return 1;

  num1 = Math.abs(num1);

  while (num1 > 0) {
    num1 = Math.floor(num1 / 10);
    count++;
  }
  return count;
};

const result = getNumCount(num);

console.log("===result===", result);
