const tribonacci = (tribonacciArr, num) => {
  for(let i = 2; i < num - 1; i++) {
    let result = tribonacciArr[i - 2] + tribonacciArr[i - 1] + tribonacciArr[i];
    tribonacciArr.push(result);
  }
  return tribonacciArr;
}

// for [1,1,1]
console.log(tribonacci([1, 1, 1], 8))
// for [0,0,1]
console.log(tribonacci([0, 0, 1], 9))