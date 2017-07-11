// Return the length of given file

var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var x = str.split("\n");
console.log(x.length - 1);