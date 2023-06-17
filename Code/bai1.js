const arr = [4, 6, 8, 2, 7, 9, 3];
const sum = arr.reduce((total, num) => {
  if (12 % num === 0) {
    return total + num;
  }
  return total;
}, 0);
console.log(sum);


