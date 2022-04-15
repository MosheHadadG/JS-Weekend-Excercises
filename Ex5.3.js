const toCamelCase = function(str) {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === `-` || strArr[i] === `_`) {
      strArr.splice(i, 1);
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.join(``);
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));