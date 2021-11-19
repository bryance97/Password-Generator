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
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// array of lower case letters
var lettersLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// array of upper case letters
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var validate = 0;

var passLength;

var randomLetters = [];

var lettersLowercase = [];

var numbers = [];

var special = [];

//generate the password
var generatePassword = function () {
  //Asks for length of password
  passLength = prompt(
    "How many characters would you like your password to contain?"
  );
  //If character length is within range then continue to next criteria
  if (passLength >= 8 && passLength <= 128) {
    return passUpper();
  } else {
    //If character length is outside range (12-128 characters) then alert should display
    alert("Select any numeber over 8 and under 128");
    return generatePassword();
  }
};

//ask the user if they want uppercase letters
// if ul, append upper case letetrs to characters array
var passUpper = function () {
  var response = confirm(
    "Would you like to use uppercase letters for your password?"
  );
  if (response === true) {
    //Number given for 'passLength' represents the amount of elements in the password
    for (var i = 0; i < passLength; i++) {
      selectRandomChar(letters, randomLetters);
    }
    validate++;
  }
  return passLower();
};

//ask the user if they want lower case letters
// if ll, append lowercase letters
var passLower = function () {
  var response = confirm("Would you like to use lowercase for your password?");
  if (response === true) {
    for (var i = 0; i < passLength; i++) {
      selectRandomChar(lettersLower, lettersLowercase);
    }
    validate++;
  }
  return passNumeric();
};

//ask the user if they want numbers
// if numbers, append numbers to character array
var passNumeric = function () {
  var response = confirm("Would you like to use numbers for your password?");
  if (response === true) {
    for (var i = 0; i < passLength; i++) {
      selectRandomChar(numericChar, numbers);
    }
    validate++;
  }
  return passSpecial();
};

//ask the user if they want special characters
// if sc, append special characters to character array
var passSpecial = function () {
  var response = confirm(
    "Would you like to use special charatchers for your password?"
  );
  if (response === false) {
    if (validate === 0) {
      alert("Please choose atleast 1 option.");
      passUpper();
    }
  } else {
    for (var i = 0; i < passLength; i++) {
      selectRandomChar(specialChar, special);
    }
  }
  return passWord();
};

//repeat based on number of desired characters
var passWord = function () {
  passWordArray = [];
  var passWordFinal = passWordArray.concat(
    randomLetters,
    lettersLowercase,
    numbers,
    special
  );
  var Final = [];
  for (i = 0; i < passLength; i++) {
    selectRandomChar(passWordFinal, Final);
  }
  return Final.join("");
};

//add random character from character array to password
function selectRandomChar(array, arrayPush) {
  var x = Math.floor(Math.random() * array.length);
  var y = array[x];
  arrayPush.push(y);
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
