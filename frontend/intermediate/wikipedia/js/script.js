$(document).ready(function() {
    var go = "http://en.wikipedia.org/w/api.php?action=query&format=json&inprop=url&exintro=1&titles=";
    var search = "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=search&exchars=150&explaintext&exlimit=max&exintro=1&inprop=url&gsrsearch=";
    var title = "";
    var suff = "&callback=?";
    var list = document.getElementById('results');
    var head = "";
    var summ = "";

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
            });
    });

    $("#search").click(function() {
        title = $(".search-query").val();
        $.getJSON((search + title + suff),
            function(json) {
                var arr = [], len;
                for (key in json.query.pages) {
                    arr.push(key);
                }
                len = arr.length;
                for (var i = 0; i < len; i++) {
                  $('#results').append("<li><h1><a href='" + json.query.pages[arr[i]].url + "'>"+ json.query.pages[arr[i]].title + "</h1><p>" + json.query.pages[arr[i]].extract + "</a></p></li>");
                }
            });
    });


});
