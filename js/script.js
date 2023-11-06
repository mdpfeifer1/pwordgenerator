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

function generate() {
  var passwordLength = 8;
  var allCharacters = numberCharacters.concat(upperCasedCharacters, lowerCasedCharacters, specialCharacters, numberCharacters);
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  return password;
}
  
  function writePassword() {
    var password = generate();
    if (password !== null) {
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  
}
generateBtn.addEventListener("click", writePassword);





