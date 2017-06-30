// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
    str = str.split("").sort();
    count = 1;
    unique = 1;
    values = Array.from(new Set(str));
    if (values.length == 1 && str.length == 1) { return 1 };
    if (values.length == 1) { return 0 };
    repeats = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] == str[i+1]) { count++; }
        else if (str[i] != str[i+1]) { 
            if (count > 1) repeats.push(count);
            count = 1;
        }
    }
    var total = fac(str.length);
    var overlaps = 0;
    if (repeats.length != 1){
        var overlaps = fac(values.length);
        for (var i = 0; i < repeats.length; i++){
            overlaps *= fac(repeats[i]);
        }
    }
    var invalid = 0;
    for (var i = 0; i < repeats.length; i++){
        while (repeats[i] >= 2) {
            invalid += (fac(str.length - repeats[i] + 1) * fac(repeats[i]));
            repeats[i]--;
        }
    }
    return total - invalid + overlaps;
}

function fac(num){
    total = num;
    for (var i = num; i > 1; i--){ total *= i-1 };
    return total;
}

console.log(permAlone("aab"));
// should return 2.
console.log(permAlone("aaa"));
// should return 0.
console.log(permAlone("aabb"));
// should return 8.
console.log(permAlone("abcdefa"));
// should return 3600.
console.log(permAlone("abfdefa"));
// should return 2640.
console.log(permAlone("zzzzzzzz"));
// should return 0.
console.log(permAlone("a"));
// should return 1.
console.log(permAlone("aaab"));
// should return 0.
console.log(permAlone("aaabb"));
// should return 12.