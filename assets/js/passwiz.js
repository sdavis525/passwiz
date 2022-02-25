// Assignment code here

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
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
      alert("Please check atleast one box!");
      return;
    }
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
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
  
  }
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
       
    var password=document.getElementById("password");

  document.getElementById("password").value = password;
   
  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById("password").addEventListener("click", Password);

};
