const maskify = function(str) {
  let strWithMask = ``;
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 4) {
      strWithMask += `#`;
    } 
    else {
      strWithMask += str[i];
    }
  }
  return strWithMask;
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));