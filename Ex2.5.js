const summation = function(num) {
  if (num <= 0) {
    return "The number must be a positive integer greater than 0."
  }
  let totalSum = num;
  for(let i = 1; i < num; i++) {
    totalSum += i
  }
  return totalSum

}

console.log(summation(2));
console.log(summation(8));
console.log(summation(0));

