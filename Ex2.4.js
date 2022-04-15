const findUniq = function(array) {
  if (array.length < 3) {
    return "The array must contain at least 3 numbers"
  }
  let uniqueNum = array[0];
  let notUnique = 0;
  for(let i = 1; i < array.length; i++) {
    if(uniqueNum === array[i]) {
      notUnique = array[i];
    }
    else {
      uniqueNum = array[i];
      return uniqueNum
    }
  }
}


console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([ 0, 1]));
