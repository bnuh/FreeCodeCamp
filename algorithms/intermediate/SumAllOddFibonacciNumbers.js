//Given a positive integer num, return the sum
//of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1.
//Every additional number in the sequence is the sum of the two previous numbers.
//The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  if (num == 2) { return 2 };
  else if (num == 1) { return 1 };
  else {
    var arr = [1, 1];
    var sum = 2;
    for (var i = 2; i <= num; i++){
        arr = [arr[1], (arr[1] + arr[0])];
        if (arr[1] <= num && arr[1] %2 != 0){
          sum += arr[1];
        }
    }
    return sum;
  }
}

sumFibs(4);
sumFibs(1);
// should return a number.
sumFibs(1000);
// should return 1785.
sumFibs(4000000);
// should return 4613732.
sumFibs(75024);
// should return 60696.
sumFibs(75025);
// should return 135721.
