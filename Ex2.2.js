const booleanConverter = function(array){
  let result = 0;
  let i = 0;
  for (let num of array.reverse()){
      result += (num == 1 ? 2 ** i : 0);
      i ++;
  } 
  return result;
}

console.log(booleanConverter([0, 0, 0, 1]));
console.log(booleanConverter([1, 0, 1, 1]));