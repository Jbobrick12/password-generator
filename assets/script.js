  // Password Generate Button
var generateBtn = document.querySelector("#generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*_=+-/';

// Function to write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate password
function generatePassword() {
  var characters = "";
  var password = "";
// Prompts for password criteria
  var lowercase = window.confirm("Would you like to include lowercase letters?");
  var uppercase = window.confirm("Would you like to include uppercase letters?");
  var numbers = window.confirm("Would you like to include numbers?");
  var symbols = window.confirm("Would you like to include symbols?");
  var length = window.prompt("How many characters would you like your password to be?");
  if (lowercase) {
    characters += lowercase;
  }
  if (uppercase) {
    characters += uppercase;
  }
  if (numbers) {
    characters += numbers;
  }
  if (symbols) {
    characters += symbols;
  }
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
