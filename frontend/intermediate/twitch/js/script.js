var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

users.sort().forEach(function(user) {
            $(document).ready(function() {
                    $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data) {
                            if (data.logo != null || data.logo != undefined) {
                                //$('.streamers').append("<img class='logo' src=" + data.logo + ">");
                                $('.streamers').append("<div class='row streamer'> \
                                <div class='col-lg-1 col-md-2 col-sm-2 col-xs-2'> \
                                <img class='logo' src=" + data.logo + "></div> \
                                <div class='summary col-lg-10 col-md-8 col-sm-8 col-xs-10'> \
                                <div class='row name'> Test Name</div> \
                                <div class='row bio'> Test Bio </div> \
                                <div class='row status'>Online</div> \
                                <div class='row game'>Game Test</div> \
                                </div> \
                                </div>");
                        /*$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?', function(data) {
                            if (data.stream != null){
                                var string = "<div class='row status'>Online</div>" +
                                "<div class='row status'>" + data.stream.channel.game + "-" +
                                data.stream.channel.status + "</div>"
                                return string;
                            };
                        });*/
                        $('.streamers').append("</div></div>");
                        };
                    });
                });
            });
