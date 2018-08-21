$(document).ready(function() {
$("#formOne").submit(function(event) {
event.preventDefault();
  $(".output").text("");
  var userInputNum = $("#inputBox").val();
  var convertedInput = parseInt(userInputNum);
  if(isNaN(convertedInput)){
  alert ("Stop doing what you're doing!!")
  }
  for (var i=0; i <= convertedInput; i++){
    if (i % 3 === 0 && i!=0) {
      $(".output").append("<li>I'm sorry, Dave. I'm afraid I can't do that!</li>");
  } else if (i.toString().includes("1")) {
    $(".output").append("<li>Boop!</li>");
  } else if (i.toString().includes("0")) {
    $(".output").append("<li>Beep!</li>");
   } else {
    $(".output").append("<li>"+i+"</li>");
  }
  }
});
});
