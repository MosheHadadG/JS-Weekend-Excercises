function longest(s1, s2) {
  let answerArr = [];
  for (letter of s1) {
    if (!answerArr.includes(letter)) {
      answerArr.push(letter);
    }
    else {
      continue;
    }
  }
  for (letter of s2) {
    if (!answerArr.includes(letter)) {
      answerArr.push(letter);
    }
    else {
      continue;
    }
  }

  return answerArr.sort().join('');
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));