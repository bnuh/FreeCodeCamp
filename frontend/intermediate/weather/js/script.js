var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
var api = '&APPID=f0273e5c59c96933c3143f0818f95097';
var store;

$(document).ready(function() {
    $.getJSON("http://freegeoip.net/json/", function(data) {
        var loc = data.city.toUpperCase() + ", " + data.region_code.toUpperCase();
        $(".header").html(loc);
        url = base + data.city + api;
    }).done(function(json) {
        $.getJSON(url, function(json) {
            store = json;
            $(".description").html(json.weather[0].description.toUpperCase());
            $(".temp").html(Math.round(json.main.temp - 273) + "°C");
        });
    });
    $("#F").on("click", function(){
      $(".temp").html(Math.round(store.main.temp * (9/5) - 459.67) + "°F");
    });
    $("#C").on("click", function(){
      $(".temp").html(Math.round(store.main.temp - 273) + "°C");
    });
});
