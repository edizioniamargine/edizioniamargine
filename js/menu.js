

function myFunction(element) {
  var elements = ".menuvoice";
  if ($(element).hasClass("open")){
    $(element).removeClass("open", 800);
  } else{
    $(elements).removeClass("open", 800);
    $(element).addClass("open", 800);
  };
}
