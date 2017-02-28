$(document).ready(function() {
            var api = "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&generator=search&gsrsearch=meaning";
            var title = "war";
            var suff = "&callback=?";
            $.getJSON((api + suff),
                function(json) {
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
