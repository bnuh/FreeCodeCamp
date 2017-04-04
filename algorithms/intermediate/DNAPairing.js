//The DNA strand is missing the pairing element. 
//Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array,
//and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  var el = ["A","C","G","T"];
  var pair = ["T","G","C","A"];
  var final = [];
  var arr = str.split("");
  for (var i in arr){
    var newArr = [];
    newArr.push(arr[i]);
    newArr.push(pair[el.indexOf(arr[i])]);
    final.push(newArr);
  }
  return final;
}

//pairElement("ATCGA");
// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG");
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA");
// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
