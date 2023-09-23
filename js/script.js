var generateBtn = document.querySelector("#generate");


// Array of Characters
var specialCharacters = [
    "@",
    "%",
    "+",
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
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];


function passwordOptions() {
    var userInput = prompt("How many characters would you like in your password?");
  
    if (userInput === null) {
      return null;
    }
  
    userInput = parseInt(userInput);
  
    if (isNaN(userInput) (userInput < 8)( userInput > 128)) {
      alert("Please enter a valid number between 8 and 128.");
      return passwordOptions();
    }
}
    var confirmSpecialCharacters = confirm("Include special characters?");
    var confirmNumberCharacters = confirm("Include numbers?");
    var confirmUppercaseCharacters = confirm("Include uppercase characters?");
    var confirmLowercaseCharacters = confirm("Include lowercase characters?");
  
    if (
      !confirmSpecialCharacters &&
      !confirmNumberCharacters &&
      !confirmUppercaseCharacters &&
      !confirmLowercaseCharacters
    ) {
      alert("You must select at least one character type.")
     return passwordOptions();
    }

    return [
      userInput,
      confirmLowercaseCharacters,
      confirmNumberCharacters,
      confirmSpecialCharacters,
      confirmUppercaseCharacters
    ];
  
  
  function getRandomPassword(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  function generate() {
    var options = passwordOptions();
  
    if (!options) {
      return null;
    }
    var length = options[0];
    var hasLowercaseCharacters = options[1];
    var hasNumberCharacters = options[2];
    var hasSpecialCharacters = options[3];
    var hasUppercaseCharacters = options[4];
  
    var possiblePassword = [];
  
    if (hasSpecialCharacters) {
      possiblePassword = possiblePassword.concat(specialCharacters);
    }
    if (hasNumberCharacters) {
      possiblePassword = possiblePassword.concat(numberCharacters);
    }
    if (hasUppercaseCharacters) {
      possiblePassword = possiblePassword.concat(upperCasedCharacters);
    }
    if (hasLowercaseCharacters) {
      possiblePassword = possiblePassword.concat(lowerCasedCharacters);
    }
  
    var passwordResults = [];
  
    for (let i = 0; i < length; i++) {
      var randomCharacter = getRandomPassword(possiblePassword);
      passwordResults.push(randomCharacter);
    }
  
    var finalPassword = passwordResults.join("");
    console.log(finalPassword);
    return finalPassword;
  }
  
  function writePassword() {
    var password = generate();
    if (password !== null) {
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  
  
  generateBtn.addEventListener("click", writePassword);
}




