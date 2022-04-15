const array = [19, 2, 42, 5, 77]
const twoLowestSum = (array) => {
  let min1 = array[0]; 
  let min2 = array[1];

  if (min1 > min2) {
    const tempValue = min1;
    min1 = min2;
    min2 = tempValue;
  }

  for (let i = 2; i < array.length; i += 1) {
    const num = array[i];
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }
  return min1 + min2;
};

console.log(twoLowestSum(array));