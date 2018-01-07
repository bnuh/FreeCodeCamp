var result = document.getElementById("screen");
var temp = 0;
var temp2 = "";
var sign = '';

function getValue(e) {
    if (temp2.length >= 14) {
        alert('too long');
    } else {
        if (temp2 == 0) { temp2 = "" }
        temp2 += document.getElementById(e).innerHTML;
        result.innerHTML = temp2;
    }
};

function calc(e) {
    if (sign == "") {
        sign = document.getElementById(e).innerHTML;
    } else {
        sign = document.getElementById(e).innerHTML;
        if (sign == "+") {
            temp += parseInt(temp2);
        } else if (sign == "-") {
            temp -= parseInt(temp2);
        } else if (sign == "*") {
            temp *= parseInt(temp2);
        } else {
            temp /= parseInt(temp2);
        };
    }
    console.log(temp);
    temp2 = "0";
    result.innerHTML = temp.toString();
};

function solve() {
    console.log(sign);
    result.innerHTML = temp.toString();
};

function clearScreen() {
    temp = 0;
    document.getElementById("screen").innerHTML = "";
    setTimeout(function() { document.getElementById("screen").innerHTML = "0"; }, 200);
};