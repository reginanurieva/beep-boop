
var numberTranslate = function(inputString) {
  if ($.isNumeric(inputString)){
    if (inputString < 0){
      alert("I don't know about that! Only positive numbers can be accepted!")
    }
    else return parseInt(inputString)
  }
  else alert("Ups! Please enter a valid number!")

}
// //function to let her know this is a numbers
// function beepBoop(userNum){
//   if (userNum >= 1) {
//     // var returnArray = [];
//     // var regexOne = /1/g;
//     // var regexZero = /0/g;
//     //for (var i = 1; i <= userNum; i++) {
//       var iString = String(i);
//       if (!(i % 3)) {
//         returnArray.push("I'm sorry, Dave. I'm afraid I can't do that.")
//       } else if (regexOne.test(iString)) {
//         returnArray.push("Boop!");
//       } else if (regexZero.test(iString)) {
//         returnArray.push("Beep!");
//       } else {
//         returnArray.push(i);
//       }
//     }
// }


//generate the output
function numConverter(inputNumber){
  for(i=0; i <= inputNumber; i++){
  $(".output").text[i]

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
    // $("#outPut").append("<p>[" + loopThroughInput(numInput) + "]<p>");
    });
  });
