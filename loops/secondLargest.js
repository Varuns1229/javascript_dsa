const arr = [10, 2, 5, 10, 4];

const secondlargest = (arr) => {
  let firstlar = -Infinity;
  let secondlar = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (firstlar < arr[i]) {
      secondlar = firstlar;
      firstlar = arr[i];
    } else if (secondlar < arr[i]) {
      secondlar = arr[i];
    }
  }

  return secondlar;
};

const result = secondlargest(arr);

console.log("===result==", result);
