// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var criteria = [];

var getLength = function() {
  var passwordLength = window.prompt("Choose a length between eight and 128 characters.");
  var passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must be between eight and 128 characters. Please try again.");
    return getLength();
  }
  if (isNaN(passwordLength)) {
    window.alert("Your password must be a number. Please try again.");
    return getLength();
  }
  //store length in array
  criteria.push(['length',passwordLength]);

  //take down criteria
  getCriteria();
}

var getCriteria = function() {
  var lower = window.confirm("Would you like lower case characters?");
  var upper = window.confirm("Would you like upper case characters?");
  var number = window.confirm("Would you like numbers?");
  var special = window.confirm("Would you like special characters?");
  if (!lower && !upper && !number && !special) {
    alert("You need at least one type of character. Please try again.");
    return getCriteria();
  }
  //log booleans to array
  criteria.push(['lower',lower]);
  criteria.push(['upper',upper]);
  criteria.push(['number',number]);
  criteria.push(['special',special]);
  
  //has this logged?
  alert(criteria);
}

// Add event listener to generate button
generateBtn.addEventListener("click", getLength);

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");  

//   passwordText.value = password;
// }



//Print to HTML with this
// var test = "dddd";
// document.getElementById("password").innerHTML = test;
