var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
var app = '&APPID=f0273e5c59c96933c3143f0818f95097';
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'

$(document).ready(function() {
  if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(function(position) {
          $.getJSON(openWeatherMap, {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              units: 'metric',
              APPID: 'f0273e5c59c96933c3143f0818f95097'
          }).done(function(json) {
              console.log(json);
              var loc = json.name.toUpperCase() + ", " + json.sys.country.toUpperCase();
              $(".header").html(loc);
              $(".icon").html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
              $(".description").html(json.weather[0].description.toUpperCase());
              $(".temp").html(json.main.temp + "°C");
          })
      })
  }

});
