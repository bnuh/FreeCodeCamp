var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
var api = '&APPID=f0273e5c59c96933c3143f0818f95097';

$(document).ready(function() {

    $.getJSON("http://freegeoip.net/json/", function(data) {
        console.log(data);
        var loc = data.city.toUpperCase() + ", " + data.region_code.toUpperCase();
        $(".header").html(loc);
        url = base + data.city + api;
    }).done(function(json) {
        $.getJSON(url, function(json) {
            $(".icon").html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
            $(".description").html(json.weather[0].description.toUpperCase());
            $(".temp").html(Math.round(json.main.temp - 273) + "°C");
            console.log(Math.round(json.main.temp - 273));
        });
    });
});
