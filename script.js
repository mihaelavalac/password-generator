
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var nrs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var spchar = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']


generateBtn.addEventListener("click", generatePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

function generatePassword() {
  // This variable saves user's response to the "confirm" statements. 
  var selectedChrs = '';
  //This variable takes the value of the password after the random method is executed. 
  var newPassword = '';
  // This variable alert the user to enter a number between 8 and 128 if the user introduced a number outside of the mentioned interval or not a numberical character and returns to the generatepassword function. 
  var passwordLength = prompt(" What length you want for your password? Select a number between 8 and 128.");
  if (Number(passwordLength < 8) | Number(passwordLength > 128) | isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128!");
    return;
  }
  // This variable ask if the user want Uppercase Letters in the password, and if so, the array that contains this type of data "upper" is assigned to selectedChrs variable. 
  var upperLetters = confirm(" Do you want upper letters?");
  if (upperLetters) {
    selectedChrs += upper;
  }

  // This variable ask if the user want Lowercase Letters in the password, and if so, the array that contains this type of data "lower" is assigned to selectedChrs variable. 
  var lowerLetters = confirm(" Do you want lower letters?");
  if (lowerLetters) {
    selectedChrs += lower;
  }

  // This variable ask if the user want numbers in the password, and if so, the array that contains this type of data "nrs" is assigned to selectedChrs variable. 
  var numbers = confirm(" Do you want numbers?");
  if (numbers) {
    selectedChrs += nrs;

  }

  // This variable ask if the user want Special Characters in the password, and if so, the array that contains this type of data "spchr" is assigned to selectedChrs variable. 
  var specialCharacters = confirm(" Do you want special characters?");
  if (specialCharacters) {
    selectedChrs += spchar;
  }
  // This ask the user to introduce at least one type of data for the password if the user did't accept none of the options. 
  if (selectedChrs === '') {
    alert("Please select at least one type of character you would like to include!");
  }
  //This statement verify if the password is between 8 and 128...
  if (Number(passwordLength >= 8) && Number(passwordLength <= 128)) {
    // ...if so, the forloop goes through the characters saved in selectedChrs variable and random generate a password which is equal to passwordlength variable and is assigned to the newpassword variable. 
    for (var i = 0; i < passwordLength; i++) {
      newPassword += selectedChrs.charAt(Math.floor(Math.random() * selectedChrs.length));
    };

    //The key name "password" and the key value "newPassword" is added to the local storage(which allows to store and acces data direct in the browser)
    localStorage.setItem("password", newPassword);
    // This variable  receive the stored value in the local storage and print the password on the screen. 
    var newPasswordStr = localStorage.getItem("password");
    passwordText.textContent = newPasswordStr;
  };

};