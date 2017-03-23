var userList = ["FreeCodeCamp", "ESL_CSGO", "playingboardgames", "sethbling","medrybw","storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
var twitchAPI = "https://wind-bow.gomix.me/twitch-api";

function writeStatus (i, status) {
  if (status == "offline") {
    $("#user-list").append('<a href="http://www.twitch.tv/'+userList[i]+'" class="list-group-item list-group-item-invert" target="_blank">'+userList[i]+' <span class="label label-default">offline</span><br /></a>')
  }
  else {
    $("#user-list").append('<a href="http://www.twitch.tv/'+userList[i]+'" class="list-group-item list-group-item-success" target="_blank">'+userList[i]+' <span class="label label-success">online</span><br /><small>'+status.substring(0,30)+'...</small></a>')
  }
}

function callbackFunction(i) { //the $.getJSON function relies on this
    return function(data) {

    if (data.stream == null) {
       writeStatus(i,"offline");
     }
     else {
       writeStatus(i,data.stream.channel.status);
     };
   };
};

$(document).ready (function() {
for (i=0; i<userList.length; i++)  {
  var user = userList[i];
  $.getJSON(twitchAPI+'/streams/'+user, callbackFunction(i));
  }
}); // close doc ready function
//note client id is Client-ID: b545gut70n7qk62863welq2dw28ql3e
