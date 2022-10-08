function reserve(str) {
  wrd = String(str);
  var newWord = "";
  for (let index = wrd.length; index >= 0; index--) {
    newWord += wrd.charAt(index);
  }
  return newWord;
}

console.log(reserve("This is the new team"));
