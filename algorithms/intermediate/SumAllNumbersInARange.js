function sumAll(arr) {
    var sum = 0;
      for (var i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); i++){
          sum += i;
      }
    return sum;
}
sumAll([1,4]);
sumAll([5,1]);

// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
