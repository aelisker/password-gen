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

  //check if lower char is included in random password if selected
  if (criteria.lower) {

    //convert array of lower case characters to string
    var lowerString = lowerCharArray.toString();

    //run for loop for length of all lower case characters
    for (var i = 0; lowerCharArray[0].length > i; i++) {

      //select character at index of string of characters and declare as variable
      var letterToTest = lowerString.charAt(i);

      //search generated password for each letter, write value to boolean variable
      var lowerIncluded = generatedPassword.includes(letterToTest);  

      //if true, break out because at least one char is included
      if (lowerIncluded) {
        break;
      }

      //if length of array item is i + 1, we've gone through all char and haven't found match. need to regen password.
      if (lowerCharArray[0].length == (i + 1)) {
        return generatePassword();
      } 
    }   
  }

  //check if upper char is included in random password if selected
  if (criteria.upper) {
    var upperString = upperCharArray.toString();
    for (var i = 0; upperCharArray[0].length > i; i++) {
      var letterToTest = upperString.charAt(i);
      var upperIncluded = generatedPassword.includes(letterToTest);  
      if (upperIncluded) {
        break;
      }
      if (upperCharArray[0].length == (i + 1)) {
        return generatePassword();
      } 
    }   
  }

  //check if number is included in random password if selected
  if (criteria.number) {
    var numberString = numberCharArray.toString();
    for (var i = 0; numberCharArray[0].length > i; i++) {
      var letterToTest = numberString.charAt(i);
      var numberIncluded = generatedPassword.includes(letterToTest);  
      if (numberIncluded) {
        break;
      }
      if (numberCharArray[0].length == (i + 1)) {
        return generatePassword();
      } 
    }   
  }

  //check if special char is included in random password if selected
  if (criteria.special) {
    var specialString = specialCharArray.toString();
    for (var i = 0; specialCharArray[0].length > i; i++) {
      var letterToTest = specialString.charAt(i);
      var specialIncluded = generatedPassword.includes(letterToTest);  
      if (specialIncluded) {
        break;
      }
      if (specialCharArray[0].length == (i + 1)) {
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
