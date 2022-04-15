const abbreviateTwoWords = function(str) {
  wordArr = str.split(' ');
  let result = `${wordArr[0][0].toUpperCase()}.${wordArr[1][0].toUpperCase()}`;
  return result;
}

console.log(abbreviateTwoWords('Sam Harris'))
console.log(abbreviateTwoWords('Patrick Feeney'))
console.log(abbreviateTwoWords('moshe hadad'))

