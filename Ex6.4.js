function isogram(str){
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
  for(key in countingObj) {
    if(countingObj[key] > 1) {
      return false;
    }
  }
  return true;

}

console.log(isogram("Dermatoglyphics"));
console.log(isogram("aba"));
console.log(isogram(("moOse")));