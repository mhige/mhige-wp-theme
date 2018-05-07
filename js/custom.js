$(document).ready(function() {

  $('.bg-image').delay(4000).queue(function() {
    $(this).addClass('pageout').dequeue();
  });

});
