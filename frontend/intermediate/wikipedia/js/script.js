$(document).ready(function() {
    var search = "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=search&exchars=150&explaintext&exlimit=max&exintro=1&inprop=url&gsrsearch=";
    var title = "";
    var suff = "&callback=?";
    var list = document.getElementById('results');
    var head = "";
    var summ = "";

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
                  $('#results').append("<li><h1><a href='" + json.query.pages[arr[i]].fullurl + "'>"+ json.query.pages[arr[i]].title + "</h1><p>" + json.query.pages[arr[i]].extract + "</a></p></li>");
                }
            });
    });


});
