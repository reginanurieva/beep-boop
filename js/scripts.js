
var numberTranslate = function(inputString) {
  if ($.isNumeric(inputString)){
    if (inputString < 0){
        alert("I don't know about that! Only positive numbers can be accepted!")
    } else if (inputString.includes(0)) {
        alert("Beep!");
    } else if (inputString.includes(1)) {
        alert("Boop!");
    } else if (inputString % 3 === 0) {
          alert("Sorry, Dave!");
  }  else return parseInt(inputString)
  }  else
    alert("Ups! Please enter a valid number!")

  }



//generate the output
function numConverter(inputNumber){
  for(i=0; i <= inputNumber; i++){
  $(".output").text(i)

  }
}





// User Interface Logic
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userNum = $("#inputBox").val();
    var result = numberTranslate(userNum)
    var status = numConverter(result)
    var returnArray = [];
    var regexOne = /1/g;
    var regexZero = /0/g;
    //for (var i = 1; i <= userNum; i++)

    //var empty = parseInt("#inputBox")
    // var numInput = parseInt($("#inputBox").val());

    });
  });
