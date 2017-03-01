$(document).ready(function() {
            var api = "http://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow&generator=search&gsrsearch=Stack%20Overflow&";
            var title = "war";
            var suff = "&callback=?";
            $.getJSON((api + suff),
                function(json) {
                  console.log(json);
                  var arr = [], len;
                  for(key in json.query.pages) {
                      arr.push(key);
                  }
                  len = arr.length;
                  for (var i = 0; i < len; i++){
                    console.log(json.query.pages[arr[i]].title);
                  }
                });
        });
