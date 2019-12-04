$("li").click(function() {
  $(this).toggleClass("completed");
});

$("span").click(function(event) {
  event.stopPropagation();
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
});