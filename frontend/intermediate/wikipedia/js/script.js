$(document).ready(function() {
            var api = "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&generator=search&gsrsearch=meaning";
            var title = "war";
            var suff = "&callback=?";
            $.getJSON((api + suff),
                function(json) {
                    console.log(json);
                });
        });
