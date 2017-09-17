//   Write a program that accepts one or more numbers as command-line  arguments and prints the sum of those numbers to the console  (stdout). 

var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var x = str.split("\n");
console.log(x.length - 1);