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
            if (json.weather[0].icon == "01d") {
                    $("#weather-icon").attr('class', 'wi wi-day-sunny');
                }
                else if (json.weather[0].icon == "01n") {
                    $("#weather-icon").attr('class', 'wi wi-night-clear');
                }
                else if (json.weather[0].icon == "02d") {
                    $("#weather-icon").attr('class', 'wi wi-day-cloudy');
                }
                else if (json.weather[0].icon == "02n") {
                    $("#weather-icon").attr('class', 'wi wi-night-alt-cloudy');
                }
                else if (json.weather[0].icon == "03d") {
                    $("#weather-icon").attr('class', 'wi wi-day-cloudy-high');
                }
                else if (json.weather[0].icon == "03n") {
                    $("#weather-icon").attr('class', 'wi wi-night-alt-cloudy');
                }
                else if (json.weather[0].icon == "04d") {
                    $("#weather-icon").attr('class', 'wi wi-cloudy');
                }
                else if (json.weather[0].icon == "04n") {
                    $("#weather-icon").attr('class', 'wi wi-cloudy');
                }
                else if (json.weather[0].icon == "09d") {
                    $("#weather-icon").attr('class', 'wi wi-day-showers');
                }
                else if (json.weather[0].icon == "09n") {
                    $("#weather-icon").attr('class', 'wi wi-night-alt-sprinkle');
                }
                else if (json.weather[0].icon == "10d") {
                    $("#weather-icon").attr('class', 'wi wi-day-rain');
                }
                else if (json.weather[0].icon == "10n") {
                    $("#weather-icon").attr('class', 'wi wi-night-rain');
                }
                else if (json.weather[0].icon == "11d") {
                    $("#weather-icon").attr('class', 'wi wi-day-thunderstorm');
                }
                else if (json.weather[0].icon == "11n") {
                    $("#weather-icon").attr('class', 'wi wi-night-thunderstorm');
                }
                else if (json.weather[0].icon == "13d") {
                    $("#weather-icon").attr('class', 'wi wi-day-snow');
                }
                else if (json.weather[0].icon == "13n") {
                    $("#weather-icon").attr('class', 'wi wi-night-alt-snow');
                }
                else if (json.weather[0].icon == "50d") {
                    $("#weather-icon").attr('class', 'wi wi-fog');
                }
                else if (json.weather[0].icon == "50n") {
                    $("#weather-icon").attr('class', 'wi wi-fog');
                }
                else {
                    $("#weather-icon").attr('class', 'wi wi-na');
                };
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
