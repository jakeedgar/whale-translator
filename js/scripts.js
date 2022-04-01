// BUSINESS LOGIC 
function whaleTranslator(input){
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
  for (let i = 0; i < input.length; i++){
    for (let v = 0; v < vowels.length; v++){
      if (input[i] === vowels[v]){
      resultArray.push(input[i]);
      }
    }
      if (input[i] === "e"){
      resultArray.push("e");
      }
      if (input[i] === "u"){
      resultArray.push("u");
      }
  }
  let resultString = resultArray.join("").toUpperCase();
  return resultString
}


// UI LOGIC 
$(document).ready(function() {
  $("#form").submit(function(e) {
    e.preventDefault();
    const input = $("#input").val();
    const translation = whaleTranslator(input);
    $("#output").text(translation);
  });
});
