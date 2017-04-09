// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  var counter = 0;

  for (var c in collection) {
    if (collection[c].hasOwnProperty(pre) || collection[c][pre] == pre) {
      counter++;
    }
  }

  // Outside the loop, check to see if we got true for all of them and return true or false
  if (counter == collection.length) {
    return true;
  } else
    return false;
}


// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// should return true.
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
// should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
// should return false
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));
// should return true
// console.log(truthCheck([{"single": "yes"}], "single"));
// should return true..
// truthCheck([{"single": ""}, {"single": "double"}], "single");
// should return false
// console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));
// should return false
// console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
// should return false
