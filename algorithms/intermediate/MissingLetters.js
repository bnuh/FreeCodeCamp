
//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var index = alph.indexOf(str[0]);
  var i = 0;
  while (str[i] == alph[index + i]){
    i++
    if (i == str.length) {
      return undefined;
    });
  };
  return alph[index + i];
}


//fearNotLetter("abce");
console.log(fearNotLetter("abcdefghjklmno"));
// should return "i".
// fearNotLetter("bcd");
// should return undefined.
// fearNotLetter("yz");
// should return undefined.
