const findNextSquare = function(num){
  if(Math.sqrt(num) % 1 === 0){
      return (Math.sqrt(num) + 1) * (Math.sqrt(num) + 1);
  }
  else {
    return -1;
  } 
}
console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))