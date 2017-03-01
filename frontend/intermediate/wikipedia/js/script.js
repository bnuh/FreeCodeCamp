$(document).ready(function() {
            var api = "http://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow";
            // if length of array is 1, go to this location, if -1, run 2nd search
            var api2 = "http://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&exintro=&explaintext=&generator=search&gsrsearch=Stack%20Overflow&";

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
                  if (len == 1) {
                    if (arr[0] == 1) {
                      var api2 = "http://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&exintro=&explaintext=&generator=search&gsrsearch=Stack%20Overflow&";
                    }
                    else {
                      window.location.href = 'http://www.google.com';
                    }
                  }
                  for (var i = 0; i < len; i++){
                    console.log(json.query.pages[arr[i]].title);
                  }
                });
        });
