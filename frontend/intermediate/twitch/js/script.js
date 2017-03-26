var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
var logo = 'https://dummyimage.com/100x100/c1cfe8/ffffff&text=OFFLINE';
var status = '';
var game = '';
var name = '';
var html = '';

$(document).ready(function() {
    users.sort().forEach(function(user) {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?', function(str) {
            console.log(str);
            if (str.stream != null) {
                status = "Online";
                game = str.stream.channel.game + " - " + str.stream.channel.status;
                logo = str.stream.channel.logo;
                name = str.stream.channel.display_name;
                url = str.stream.channel.url;
                html = "<div class='row streamer'><div class='col-lg-2 col-md-2 col-sm-2 col-xs-2'><img class='logo' src=" +
                logo + "></div><div class='summary col-lg-10 col-md-8 col-sm-8 col-xs-10'><div class='row name'><a href='http://www.twitch.tv/" +
                user + "'>" + name + "</a></div><div class='row status'>" + status + "</div><div class='row stream'>" + game +
                "</div></div></div>";
                $('.streamers').prepend(html);
            } else {
                status = "Offline";
                logo = 'https://dummyimage.com/100x100/c1cfe8/ffffff&text=OFFLINE';
                game = "";
                name = user;
                html = "<div class='row streamer'><div class='col-lg-2 col-md-2 col-sm-2 col-xs-2'><img class='logo' src=" +
                logo + "></div><div class='summary col-lg-10 col-md-8 col-sm-8 col-xs-10'><div class='row name'><a href='http://www.twitch.tv/" +
                user + "'>" + name + "</a></div><div class='row status'>" + status + "</div><div class='row stream'>" + game +
                "</div></div></div>";
                $('.streamers').append(html);
            }
        });
    });
});
