var colors = ['#16a085', '#27ae60', '#f39c12', '#e74c3c', '#9b59b6',
 '#FB6964', "#BDBB99", "#77B1A9", "#73A857"];

function getQuote() {
  var color = Math.floor(Math.random() * colors.length);
  $("body").animate({
    backgroundColor: colors[color],
  }, 1000);
}

$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', function() {
    getQuote();

  });
  $('#tweet-quote').on('click', function() {
  });
});
