// Convert the given number into an upper case roman numeral.

// splice() indexOf() join()
// a.join('');

function convertToRoman(num) {
    var arr = [];
    var thou = Math.floor(num/1000);
    if (thou > 0) {
        for (var i = 0; i < thou; i++){
            arr.push("M");
        }
        num = num%1000;
    }
    if (Math.floor(num/900)) {
        arr.push("CM");
        num = num%900;
    }
    else if (Math.floor(num/500)){
        arr.push("D");
        num = num%500;
    }
    if (Math.floor(num/400)) {
        arr.push("CD");
        num = num%400;
    }
    var hund = Math.floor(num/100);
    if (hund > 0) {
        for (var j = 0; j < hund; j++){
            arr.push("C");
        }
        num = num%100;
    }
    if (Math.floor(num/90)){
        arr.push("XC");
        num = num%90;
    }
    var fift = Math.floor(num/50);
    if (fift > 0){
        for (var k = 0; k < fift; k++){
            arr.push("L");
        }
        num = num%50;
    }
    if (Math.floor(num/40)){
        arr.push("XL");
        num = num%40;
    }
    else {
        var ten = Math.floor(num/10);
        for (var l = 0; l < ten; l++){
            arr.push("X");
        }
        num = num%10;
    }
    if (Math.floor(num/9)){
        arr.push("IX");
        num = num%9;
    }
    else {
        var five = Math.floor(num/5);
        for (var m = 0; m < five; m++){
            arr.push("V");
        }
        num = num%5;
    }
    if (Math.floor(num/4)){
        arr.push("IV");
        num = num%4;
    }
    var one = Math.floor(num/1);
    if (one > 0){
        for (var n = 0; n < one; n++){
            arr.push("I");
        }
        num = num%1;
    }
    return (arr.join(''));
}

console.log(convertToRoman(97));
