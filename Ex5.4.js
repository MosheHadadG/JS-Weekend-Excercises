const toWeirdCase = function(str) {
  str = str.split('');
  for (let i = 0; i <= str.length - 1; i++) {
    if (i % 2 === 0) {
      str[i] = str[i].toUpperCase();
    }
    else {
      str[i] = str[i].toLowerCase();
    }
  }
  return str.join('')
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase('Weird string case'));