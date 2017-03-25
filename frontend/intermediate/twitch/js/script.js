var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

users.sort().forEach(function(user) {
    $(document).ready(function() {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data) {
            console.log(data);
            if (data.logo != null || data.logo != undefined) {
                //$('.streamers').append("<img class='logo' src=" + data.logo + ">");
                $('.streamers').append("<div class='row streamer'> \
                    <div class='col-lg-1 col-md-2 col-sm-2 col-xs-2'> \
                        <img class='logo' src='https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png'> \
                    </div> \
                    <div class='status col-lg-10 col-md-8 col-sm-8 col-xs-10'> \
                        <div class='row'>tetststs</div> \
                        <div class='row'>tetststs</div> \
                        <div class='row'>tetststs</div> \
                        <div class='row'>tetststs</div> \
                    </div> \
                </div>");
            }
            else if (data.status == "404"){

            }
            else {
                $('.streamers').append("<img class='logo' src='https://dummyimage.com/100x100/98c4f0/ffffff.jpg&text=Offline'>");
            }
        });
    });
});
