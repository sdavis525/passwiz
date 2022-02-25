
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 console.log("Hooray! It worked!")

 
 //lowercase, uppercase, numbers, special characters
 var specialCharters = ['!','@','#','$','%','^','&','*','+',];

 var numericCharters = ['0','1','2','3','4','5','6','7','8','9',];
 
 var lowerdCasedCharters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',];
 
 var upperCasedCharters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',];
 
// an object of user choices that we will get from user
var userChoices = {
    length: 8,
    lowerCase: false,
    upperCase: false,
    numeric: false,
    special: false
  }
  
  // an function that gets user choices and saves them to our object
  function getChoices() {
    // user choices
    var length = parseInt(prompt("how many characters"))
    var lower = confirm("would you like lower")
    var upper = confirm("would you like upper")
    var numeric = confirm("would you like numeric")
    var special = confirm("would you like special")
    
    // make sure there is at least 8 characters
    if (length >= 8 && length <= 128) {
      userChoices.length = length
    } else {
      alert('chose an incorrect value, setting to 8 characters')
    }
  
    // if user wants specific option, set our object to reflect that
    if (lower) {
      userChoices.lowerCase = true;
    }
  
    if (upper) {
      userChoices.upperCase = true;
    }
    
    if (numeric) {
      userChoices.numeric = true;
    }
    
    if (special) {
      userChoices.special = true;
    }
  
    // generate a password
    createPassword()
  }
  
  // function to generate password
  function createPassword() {
    // our password to be
    var password = ""
  
    // if user choice object contains chosen opti
    if (userChoices.lowerCase) {
      password += "abc";
    }
    if (userChoices.upperCase) {
      password += "ABC";
    }
    if (userChoices.numeric) {
      password += "123";
    }
    if (userChoices.special) {
      password += "!@#"
    }
  
    console.log(password)
  }
  
  getChoices()









 return "password will go here!";

}

// Write password to the #password input
function writePassword() {
            
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


