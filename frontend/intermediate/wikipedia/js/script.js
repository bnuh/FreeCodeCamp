$(document).ready(function() {
    var go = "http://en.wikipedia.org/w/api.php?action=query&format=json&inprop=url&exintro=1&titles=";
    var search = "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=search&exchars=175&exlimit=max&exintro=1&inprop=url&gsrsearch=";
    var title = "";
    var suff = "&callback=?";

    $("#go").click(function() {
        title = $(".search-query").val();
        $.getJSON((go + title + suff),
            function(json) {
                var arr = [], len;
                for (key in json.query.pages) {
                    arr.push(key);
                }
                len = arr.length;
                if (len == 1) {
                    if (arr[0] != -1) {
                      window.location.href = json.query.pages[arr[0]].fullurl;
                    }
                    else {
                      console.log("Provide error page");
                    }
                }
                for (var i = 0; i < len; i++) {
                  console.log(json.query.pages[arr[i]].extract);
                  console.log(json.query.pages[arr[i]].fullurl);
                  console.log(json.query.pages[arr[i]].title);
                }
            });
    });

    $("#search").click(function() {
        title = $(".search-query").val();
        $.getJSON((search + title + suff),
            function(json) {
              console.log(json);
                var arr = [], len;
                for (key in json.query.pages) {
                    arr.push(key);
                }
                len = arr.length;
                for (var i = 0; i < len; i++) {
                  console.log(json.query.pages[arr[i]].extract);
                  console.log(json.query.pages[arr[i]].fullurl);
                  console.log(json.query.pages[arr[i]].title);
                }
            });
    });


});
