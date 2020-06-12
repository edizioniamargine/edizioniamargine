

function myFunction(element) {
  var elements = ".menuvoice";
  if ($(element).hasClass("open")){
    $(element).toggleClass("open");
  } else{
    $(elements).removeClass('open');
    $(element).toggleClass("open");
  };
}
