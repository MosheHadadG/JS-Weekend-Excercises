function countingDuplicates(str){
  str = str.toLowerCase();
  let countingObj = {};
  for (let letter of str){
      if (countingObj[letter] !== undefined) {
        countingObj[letter] += 1;
      }
      else {
        countingObj[letter] = 1;
      }
  }
  let answer = ""
  for(key in countingObj) {
    if(countingObj[key] > 1) {
      answer += `${key}:${countingObj[key]} `
    }
    else {
      continue;
    }
  }
  return answer;
}

console.log(countingDuplicates("aabbcde"));
console.log(countingDuplicates("aabBcde"));
console.log(countingDuplicates("indivisibility"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("aA11"));
console.log(countingDuplicates("ABBA"));
