function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var colors = ['#16a085', '#27ae60', '#f39c12', '#e74c3c', '#9b59b6',
    '#FB6964', "#BDBB99", "#77B1A9", "#73A857"
];
var currentQuote = '';
var currentAuthor = '';

function changeColor() {
    var color = Math.floor(Math.random() * colors.length);
    $("body").animate({
        backgroundColor: colors[color],
    }, 1000);
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(response) {
            var r = JSON.parse(response);
            currentQuote = r.quote;
            currentAuthor = r.author;
            if (inIframe()) {
                $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
            };
            $(".quote-text").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('.quote-text').html(r.quote);
                });

            $(".author-text").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('.author-text').html(r.author);
                });

        }
    });
};


$(document).ready(function() {
    getQuote();
    changeColor();
    window.setInterval(function() {
        changeColor();
    }, 1000);
    $('#new-quote').on('click', function() {
        getQuote();
    });
    $('#tweet-quote').on('click', function() {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});
