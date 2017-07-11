//  Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).  

var fs = require('fs')
var myNumber = undefined

function addOne(callback) {  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    if (!err) {
        myNumber = toString(fileContents)        
        var x = myNumber.split("\n")
        myNumber = x.length - 1        
        callback()
        }  
    })
}
function logMyNumber() {  
    console.log(myNumber);
}

addOne(logMyNumber)