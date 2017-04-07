// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  var newVar = [];
  var temp = 0;

  function arrCheck (x) {
      if (!Array.isArray(x)) {
        newVar.push(x);
      }
      else {
        for (var i in x){ arrCheck(x[i]); }
      }
    }

  for (var i = 0; i < arr.length; i++){
    if (!Array.isArray(arr[i])){
      newVar.push(arr[i]);
    }
    else {
      for (var j = 0; j < arr[i].length; j++){
        arrCheck(arr[i][j]);
      }
    }
  }
  return newVar;
}



steamrollArray([[["a"]], [["b"]]]);
// should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]);
// should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]);
// should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]);
// should return [1, {}, 3, 4].
