const yesOrNot = function(bool) {
  if (typeof(bool) === "boolean") {
    return "Yes"
  }
  else {
    return "No"
  }
}

// bollean
console.log(yesOrNot(4 > 2));
// string
console.log(yesOrNot("something"));
