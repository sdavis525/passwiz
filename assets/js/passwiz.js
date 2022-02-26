// Assignment code here


// Get references to the #generate element

 
 //lowercase, uppercase, numbers, special characters
 var special = ['!','@','#','$','%','^','&','*','+',]

 var numeric = ['0','1','2','3','4','5','6','7','8','9',]
 
 var lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',]
 
 var upper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',]
 
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
    userChoices.length = parseInt(prompt("how many characters"))
    userChoices.lowerCase = confirm("would you like lower")
    userChoices.upperCase = confirm("would you like upper")
    userChoices.numeric = confirm("would you like numeric")
    userChoices.special = confirm("would you like special")
  }
    
   
   
   getChoices()
   
   // make sure there is at least 8 characters
    
  console.log(userChoices)
   
   //if (userChoices.length >= 8 && userChoices.length <= 128) {
      //userChoices.length = length
    //} else {
    //  alert('chose an incorrect value, setting to 8 characters')
    //}
  
  
    // generate a password

    
    function generatePassword() {
        var password = ""
        var choicesArr = []
        if (userChoices.special) {
          choicesArr.push(special)
        }
        if (userChoices.lower) {
          choicesArr.push(lower)
        }
        if (userChoices.numeric) {
          choicesArr.push(numeric)
        }
        if (userChoices.upper) {
            choicesArr.push(upper)
        }
        for (var i=0; i<userChoices.length; i++) {
        
            console.log(choicesArr)
            password += getCharacter(choicesArr[Math.floor(Math.random() * choicesArr.length)])
        }
       
    }

      
      function getCharacter(arr) {
       
       
        var randIndex = Math.floor(Math.random() * arr.length);
        var character = arr[randIndex]
        return character
       
      }
      
        



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


  //generatePassword() 
 
  //getChoices()
     


// Add event listener to generate button

//var generateBtn=document.querySelector("#generate")


//generateBtn.addEventListener("click", writePassword);





