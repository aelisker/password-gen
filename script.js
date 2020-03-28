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
  
  //console.log(criteria);

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

  var finalPassword = generatePassword();
  writePassword(finalPassword);
}

function generatePassword() {
  //generate the password by concat to empty string with random char from generated array
  var generatedPassword = '';
  for (var i = 0; criteria.passwordLength > i ; i++) {
    var store = potentialChar[Math.floor(Math.random() * potentialChar.length)]
    generatedPassword = generatedPassword.concat(store);
  } 
  //check if char is included in random password
  if (criteria.lower) {
    var lowerString = lowerCharArray.toString();
    for (var i = 0; lowerCharArray.length; i++) {
      var letterToTest = lowerString.charAt(i);
      var lowerIncluded = generatedPassword.includes(letterToTest);  
      if (lowerIncluded) {
        break;
      }
      if (lowerCharArray[0].length == (i - 1)) {
        return generatePassword();
      } 
    }
    
  }
      
  
  console.log(generatedPassword);
  return generatedPassword;
}

// Will use to write to page
function writePassword(result) {
  var password = result;
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getLength);

//Print to HTML with this
// var test = "dddd";
// document.getElementById("password").innerHTML = test;
