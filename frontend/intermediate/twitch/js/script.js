var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

users.sort().forEach(function(user) {
    $(document).ready(function() {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?', function(data) {
            console.log(data);
            if (data.logo != null || data.logo != undefined) {
                $('.streams').append("<li><img class='logo' src=" + data.logo + "></li>");
            }
            else if (data.status == "404"){

            }
            else {
                $('.streams').append("<li><img class='logo' src='https://dummyimage.com/100x100/98c4f0/ffffff.jpg&text=Offline'></li>");
            }
        });
    });
});
