const fibonacci = (num) => {
  let fibonacciArr = [0, 1];
  for(let i = 1; i < num - 1; i++) {
    let result = fibonacciArr[i - 1] + fibonacciArr[i];
    fibonacciArr.push(result);
  }
  return fibonacciArr;
}

console.log(fibonacci(13))