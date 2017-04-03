//Perform a search and replace on the sentence using the arguments provided
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
  var array = str.split(' ');
  for (var i in array){
    if (array[i] === before){
      if(/[A-Z]/.test(array[i][0])){
        console.log(array[i]);
        if(!(/[A-Z]/.test(after[i][0]))){
          console.log(!(/[A-Z]/.test(after[i][0])));
          after = after[0].toUpperCase() + after.slice(1);
        }
      };
      array[i] = after;
    }
  }
  str = array.join(' ');
  console.log(str)
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
