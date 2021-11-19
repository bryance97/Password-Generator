
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
  var useNumbers = parseInt(
    prompt("Would you like to use numbers?")
  );
  //ask the user if they want special characters
  var useSpecial = parseInt(
    prompt("Would you like to use special charatchers?")
  );
  //ask the user if they want uppercase letters
  var useUpper = parseInt(
    prompt("Would you like to use uppercase letters?")
  );
  //ask the user if they want lower case letters
  var useLower = parseInt(
    prompt("Would you like to use lowercase?")
  );
  // if numbers, append numbers to character array
  // if sc, append special characters to character array
  // if ul, append upper case letetrs to characters array
  // if ll, append lowercase letters
  //generate the password
  //repeat based on number of desired characters
  //add random character from character array to password
  //return the password
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

