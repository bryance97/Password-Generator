// Assignment code here
var generateBtn = document.querySelector("#generate");

  // array of special characters
  var specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",];

  // array of numbers
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // array of lower case letters
  var lowerCasedCharacters = ["abcdefghijklmnopqrstuvwxyz"];

  // array of upper case letters
  var upperCasedCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];


function generatePassword() {
  //ask the user how many characters
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  //ask the user if they want numbers
  //ask the user if they want special characters
  //ask the user if they want uppercase letters
  //ask the user if they want lower case letters
  // if numbers, append numbers to character array
  // if sc, append special characters to character array
  // if ul, append upper case letetrs to characters array
  // if ll, append lowercase letters
  //generate the password
  //repeat based on number of desired characters
  //add random character from character array to password
  //return the password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
