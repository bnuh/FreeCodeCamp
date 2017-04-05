// Write a function that takes two or more arrays and returns a new array
// of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in
// their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final
// array should not be sorted in numerical order.
// Check the assertion tests for examples.

function uniteUnique(arr1, arr2, arr3, arr4) {
  var newArr = [];
  for (var i in arr1){
    if (newArr.indexOf(arr1[i]) == -1){
      newArr.push(arr1[i]);
    }
  }
  for (var i in arr2){
    if (newArr.indexOf(arr2[i]) == -1){
      newArr.push(arr2[i]);
    }
  }
  for (var i in arr3){
    if (newArr.indexOf(arr3[i]) == -1){
      newArr.push(arr3[i]);
    }
  }
  for (var i in arr4){
    if (newArr.indexOf(arr4[i]) == -1){
      newArr.push(arr4[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]);
// should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// should return [1, 2, 3, 5, 4, 6, 7, 8].
