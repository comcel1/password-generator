// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Arrays
var numberCharCodes= '0123456789';
var lowercaseCharCodes = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseCharCodes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbolCharCodes = '!@#$%^&*()';
var charactersInPassword = "";


function generatePassword () 
{
  // questions 
    var passwordLength = window.prompt('How many characters would you like your password to be? Enter a number between 8 and 128.');
    
    // validate prompt answer
    while (isNaN(passwordLength) || passwordLength < 8 || 128 < passwordLength)
    passwordLength = Number(window.prompt("Your password must be between 8 and 128 characters. Please try again."))

    var passwordNumbers = window.confirm('Would you like your password to include numbers?');
    var passwordLowercase = window.confirm('Would you like your password to include lowercase letters?');
    var passwordUppercase = window.confirm('Would you like your password to include uppercase letters?');
    var passwordSymbols = window.confirm('Would you like your password to include symbols?');
 
      // add if statements for the window prompts

      if (passwordNumbers) charactersInPassword += numberCharCodes;
      if (passwordLowercase) charactersInPassword += lowercaseCharCodes;
      if (passwordUppercase) charactersInPassword += uppercaseCharCodes;
      if (passwordSymbols) charactersInPassword += symbolCharCodes;

      var cumulativePassword = "";
      for (var i = 0; i < parseInt(passwordLength); i++) {
        var randomIndex = Math.floor(Math.random() * charactersInPassword.length);
        cumulativePassword += charactersInPassword[randomIndex];
      }
      return cumulativePassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
