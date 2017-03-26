var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var logo = 'https://dummyimage.com/100x100/c1cfe8/ffffff&text=OFFLINE';
var status, game, name, html;

users.sort().forEach(function(user) {
    $(document).ready(function() {
            $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data) {
                    if (data.status != 404) {
                        name = data.display_name;
                        if (data.logo != null) {
                            logo = data.logo;
                        } else {
                            logo = 'https://dummyimage.com/100x100/c1cfe8/ffffff&text=OFFLINE';
                        }
                        if (data.display_name != undefined) {
                            name = data.display_name;
                        }
                    }
                $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?', function(data) {
                    if (data.stream != null) {
                        status = "Online";
                        game = "TEST";
                    }
                    else {
                        status = "Offline";
                        game = "";
                    }
                });
                html = "<div class='row streamer'><div class='col-lg-2 col-md-2 col-sm-2 col-xs-2'><img class='logo' src=" + logo + "></div><div class='summary col-lg-10 col-md-8 col-sm-8 col-xs-10'><div class='row name'>" + name + "</div><div class='row game'>" + game + "</div></div></div>";
                $('.streamers').append(html);
            });
    });
});
