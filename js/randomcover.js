$(document).ready(function () {

  var random = Math.floor(Math.random() * 15) + 1;

  $("#column2").css("background-image", "url(../resources/media/covers/cover" + random + ".png)");

});
