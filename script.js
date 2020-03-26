// Assignment code here


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

var lowerConfirm = function() {
  var lower = window.confirm("Would you like lower case characters?");
  return lower;
};
var upperConfirm = function() {
  var upper = window.confirm("Would you like upper case characters?");
  return upper;
};
var numberConfirm = function() {
  var number = window.confirm("Would you like numbers?");
  return number;
};
var specialConfirm = function() {
  var special = window.confirm("Would you like special characters?");
  return special;
};

var passwordInfo = {
  lower: lowerConfirm(),
  upper: upperConfirm(),
  number: numberConfirm(),
  special: specialConfirm(),
}

if (passwordInfo.lower == false && passwordInfo.upper == false && passwordInfo.number == false && passwordInfo.special == false) {
  alert("You need at least one type of character!");
  lowerConfirm();
}








var getCritera = function() {
 
}

// Write password to the #password input
// function writePassword() {
//   // var password = generatePassword();
//   // var passwordText = document.querySelector("#password");  

//   // passwordText.value = password;
//   window.alert(lowerConfirm);

// }



// Add event listener to generate button
//generateBtn.addEventListener("click", getCritera);

//Print to HTML with this
// var test = "dddd";
// document.getElementById("password").innerHTML = test;
