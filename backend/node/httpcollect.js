var http = require('http')
var url = process.argv[2]

http.get(url, function(response){
        text = ""
        response.on('data', function(data) {
                text += data.toString();
        }).on("end", function(data) {
                console.log(text.length)
                console.log(text)
        })
})
