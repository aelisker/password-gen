// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//stores criteria for password generation
var criteria = [];

//stores potential characters based on criteria
var potentialChar = [];

//all potential characters
var lowerCharArray = ['abcdefghijklmnopqrstuvwxyz'];
var upperCharArray = ['ABCDEFGHIJKLMNOPQRSTUVWZYZ'];
var numberCharArray = ['0123456789'];
var specialCharArray = ['!\"#$%&()*+`,\'-./:;<=>?@[]^_{}|~'];

//gets length of password
var getLength = function() {
  var passwordLengthPrompt = window.prompt("Choose a length between eight and 128 characters.");
  var passwordLengthPrompt = parseInt(passwordLengthPrompt);
  if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    window.alert("Your password must be between eight and 128 characters. Please try again.");
    return getLength();
  }
  if (isNaN(passwordLengthPrompt)) {
    window.alert("Your password must be a number. Please try again.");
    return getLength();
  }
  //store length in array
  criteria.passwordLength = passwordLengthPrompt;

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
  criteria.lower = lower;
  criteria.upper = upper;
  criteria.number = number;
  criteria.special = special;
  
  //has this logged?
  console.log(criteria);

  //call function to create array with potential characters
  generatePotentialCharacters();
}

var generatePotentialCharacters = function() {
  //push character sets to potential character array
  if (criteria.lower) {
    potentialChar.push(lowerCharArray);
  }
  if (criteria.upper) {
    potentialChar.push(upperCharArray);
  }
  if (criteria.number) {
    potentialChar.push(numberCharArray)
  }
  if (criteria.special) {
    potentialChar.push(specialCharArray)
  }

  //join all potential characters together in array
  potentialChar = potentialChar.join('');
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
