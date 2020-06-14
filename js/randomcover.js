$(document).ready(function () {

  var random = Math.floor(Math.random() * 1) + 1;

  $("#column2").css("background-image", "url(../resources/media/covers/cover" + random + ".webp)");

});
