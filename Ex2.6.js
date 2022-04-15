const centuryFromYear = function(year) {
  let centuries = 0;
  if(year % 100 === 0) {
    centuries = year / 100;
    return centuries
  }
  else {
    centuries = ((year / 100) + 1);
    centuries = Math.floor(centuries);
    return centuries
  }

}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));