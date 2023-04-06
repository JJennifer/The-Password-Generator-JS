// Assignment Code
var options= []
var passwordLength = 8;

var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var numbers= ["1","2","3","4","5","6","7","8","9"]
var characters= ["?","#","@","$","%","!","&","^","*",".","+","/",];


var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
   var metCritera = popUpAlert();
   

   if(metCritera) {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
   }
}

function generatePassword() {
  console.log("This button works")
  var randomPassword = "";
  for(var i=0; i< passwordLength;i++) {
    var randomCharacters = Math.floor(Math.random()* options.length);
    randomPassword = randomPassword + options[randomCharacters];
  }
  return randomPassword;
}

function popUpAlert(){
  options = []
  passwordLength= parseInt(prompt("What would you like your password length to be? 8-128 characters"));

   if(isNaN(passwordLength)|| passwordLength<8 || passwordLength >128){
     alert("Password length is not met. It needs to be between 8 to 128 charaters");
     return false;
   }
   if (confirm("Would you like your password to contain lowercase letter?")){
    options = options.concat(lowercase);
   }
   if (confirm("Would you like your password to contain uppercase letter?")){
    options = options.concat(uppercase);
   }
   if (confirm("Would you like your password to contain numbers letter?")){
    options = options.concat(numbers);
   }
   if (confirm("Would you like your password to contain special characters letter?")){
    options = options.concat(characters);
   }
   return true;
}