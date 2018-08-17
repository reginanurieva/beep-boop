

//to check if user enters number
function isNotaNum(userNum){
  if (isNaN(userNum)){
    alert("Ups! Please enter a valid number!")
  }
  else if (userNum < 0) {
    alert("I don't know about that! Only positive numbers can be accepted!")
    
  }
}






// User Interface Logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var result = isNotaNum("#inputBox").val();
    //var numInput = parseInt($("#inputBox").val());
    // $("#outPut").append("<p>[" + loopThroughInput(numInput) + "]<p>");
  });
});
