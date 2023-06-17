const arr = [4, 6, 8, 2, 7, 9, 3];
const maxEven = arr.reduce((max, num) => {
  if (num % 2 === 0 && num > max) {
    return num;
  }
  return max;
}, 0);
console.log(maxEven);
