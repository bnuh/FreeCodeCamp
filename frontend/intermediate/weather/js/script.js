var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
var api = '&APPID=f0273e5c59c96933c3143f0818f95097';
var store;
var hot = "-webkit-gradient(linear, left top, left bottom, from(rgb(175, 102, 34)), to(rgb(237, 108, 36)))";
var warm = "-webkit-gradient(linear, left top, left bottom, from(rgb(170, 165, 51)), to(rgb(175, 120, 15)))";
var mild = "-webkit-gradient(linear, left top, left bottom, from(rgb(198, 131, 18)), to(rgb(185, 233, 107)))";
var cold = "-webkit-gradient(linear, left top, left bottom, from(rgb(5, 136, 177)), to(rgb(15, 169, 255)))";
var frozen = "-webkit-gradient(linear, left top, left bottom, from(rgb(201, 201, 201)), to(rgb(143, 143, 143)))";

$(document).ready(function() {
    $.getJSON("http://freegeoip.net/json/", function(data) {
        var loc = data.city.toUpperCase() + ", " + data.region_code.toUpperCase();
        $(".header").html(loc);
        url = base + data.city + api;
    }).done(function(json) {
        $.getJSON(url, function(json) {
            store = json;
            $("#weather-icon").attr('class', 'wi wi-day-cloudy');
            $(".description").html(json.weather[0].description.toUpperCase());
            $(".temp").html(Math.round(json.main.temp - 273) + "°C");
            if (json.main.temp >= 293){
                $("body").css("background-image", hot);
            }
            else if (json.main.temp >= 283 && json.main.temp < 293){
                $("body").css("background-image", warm);
            }
            else if (json.main.temp >= 273 && json.main.temp < 283){
                $("body").css("background-image", mild);
            }
            else if (json.main.temp >= 263 && json.main.temp < 273){
                $("body").css("background-image", cold);
            }
            else {
                $("body").css("background-image", frozen);
            }
        });
    });
    $("#F").on("click", function(){
      $(".temp").html(Math.round(store.main.temp * (9/5) - 459.67) + "°F");
    });
    $("#C").on("click", function(){
      $(".temp").html(Math.round(store.main.temp - 273) + "°C");
    });
});
