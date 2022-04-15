const nb_year = function(p0, percent, aug, p) {
  let result = 0;
  while (p0 <= p) {
    p0 += (p0 * (percent / 100)) + aug;
    result ++;
  }
  return result;
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
