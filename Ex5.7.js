const shortestWords = function(str) {
  let word = str.split(' ');
  let shortWord = word[0].length  
  for(let i = 1; i < word.length; i++) {
    if (shortWord > word[i].length) {
      shortWord = word[i].length
    }
  }
  return shortWord
}

console.log(shortestWords("This is a test"));