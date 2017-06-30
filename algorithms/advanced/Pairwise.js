// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index   0   1   2   3   4
// Value   7   9   11  13  15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, arg) {
    // ForEach sum arr elements with each other element → sum = arg? push to arr
    // If true, remove both from array
    // Else return 0
    var x = [];
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if (i != j) {
                if (arr[i] + arr[j] == arg) {
                    x.push((i+j));
                    delete arr[j];
                    delete arr[i];
                }
            }
        }
    }
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i];
    }
    return sum;
}

//console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
// should return 11.
//console.log(pairwise([1, 3, 2, 4], 4));
// should return 1.
console.log(pairwise([1, 1, 1], 2));
// should return 1.
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
// should return 10.
//console.log(pairwise([], 100));
// should return 0.