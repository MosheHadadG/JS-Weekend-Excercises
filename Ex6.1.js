function accum(str){
  let errorStr = 'string which includes only letters from a..z and A..Z'
  if (!/^[a-zA-Z]+$/.test(str)) {
    return errorStr ; 
  } 

  let accumArr = []; 
  for (let i = 0; i <= str.length - 1; i++){
    let word = str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    accumArr.push(word);
  }
  return accumArr.join('-');
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
console.log(accum('ac12dg'));