// Password Generate Button
var generateBtn = document.querySelector("#generate");

// Variables for password criteria
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_=+-/";

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
  var confirmLowercase = window.confirm(
    "Would you like to include lowercase letters?"
  );
  var confirmUppercase = window.confirm(
    "Would you like to include uppercase letters?"
  );
  var confirmNumbers = window.confirm("Would you like to include numbers?");
  var confirmSymbols = window.confirm("Would you like to include symbols?");
  var length = window.prompt(
    "How many characters would you like your password to be?"
  );
  if (confirmLowercase) {
    characters += lowercase;
  }
  if (confirmUppercase) {
    characters += uppercase;
  }
  if (confirmNumbers) {
    characters += numbers;
  }
  if (confirmSymbols) {
    characters += symbols;
  }
  // If statement to ensure password length is between 8 and 128 characters
  if (length < 8 || length > 128) {
    window.alert("Password length must be between 8 and 128 characters long.");
    return generatePassword();
  }
  // For loop to generate password
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
