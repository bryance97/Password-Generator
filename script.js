// array of special characters
var specialChar = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// array of numbers
var numericChar = [
  "0", 
  "1", 
  "2", 
  "3", 
  "4", 
  "5", 
  "6", 
  "7", 
  "8", 
  "9"
];

// array of lower case letters
var lettersLower = [
  "abcdefghijklmnopqrstuvwxyz"
];

// array of upper case letters
var letters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
];

var validate = 0;

var passLength;
var randomLetters = [];

var lettersLowercase = [];

var numbers = [];

var special = [];

var generatePassword = function () {
  //ask the user how many characters
  passLength = prompt(
    "How many characters would you like your password to contain?"
  );
  //If character length is within range then continue to next criteria
  if (passLength >= 8 && passLength <= 128) {
    return useSpecial();
  } else {
    //If character length is outside range (12-128 characters) then alert should display
    alert("Select any numeber over 8 and under 128");
    return generatePassword();
  }
};

//ask the user if they want special characters
// if sc, append special characters to character array

var useSpecial = function() {
  response = confirm(
    "Would you like to use special charatchers for your password?"
  );
  if (response === true) {
    for (var i = 0; i < length; i++) {
      selectRandomChar(specialCharacters);
    }
  }
  return useNumber();
}

//ask the user if they want special characters
// if sc, append special characters to character array

//ask the user if they want numbers
// if numbers, append numbers to character array
var useNumber = function() {
  response = confirm("Would you like to use numbers for your password?");
  if (response === true) {
    for (var i = 0; i < length; i++) {
      selectRandomChar(numericCharacters);
    }
    validate++;
  }
  return useUpper();
}

//ask the user if they want uppercase letters
// if ul, append upper case letetrs to characters array
var useUpper = function () {
  response = confirm(
    "Would you like to use uppercase letters for your password?"
  );
  if (response === true) {
    //Number given for 'passLength' represents the amount of elements in the password
    for (var i = 0; i < length; i++) {
      selectRandomChar(upperCasedCharacters);
    }
    validate++;
  }
  return useLower();
}

//ask the user if they want lower case letters
// if ll, append lowercase letters
var useLower = function() {
  response = confirm("Would you like to use lowercase for your password?");
  if (response === true) {
    if (validate === 0) {
      alert("Please choose atleast 1 option.");
      useNumber();
    }
  } else {
    for (var i = 0; i < length; i++) {
      selectRandomChar(lowerCasedCharacters);
    }
    validate++;
  }
  return passWord();
}

//generate the password
//repeat based on number of desired characters

function passWord() {
  passWordArray = [];
  var passWordFinal = passWordArray.concat(
    lowerCasedCharacters,
    upperCasedCharacters,
    specialCharacters,
    numericCharacters
  );
  var Final = [];
  for (i = 0; i < length; i++) {
    selectRandomChar(passWordFinal, Final);
  }
  return Final.join("");
}

//add random character from character array to password
function selectRandomChar(array, arrayPush) {
  var x = Math.floor(Math.random() * array.length);
  var y = array[x];
  arrayPush.push)
}

//return the password

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
