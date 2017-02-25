$(document).ready(function() {
            var api = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=";
            var title = "war";
            var suff = "&callback=?";
            $.getJSON((api + title + suff),
                function(json) {
                    console.log(json);
                });
        });
