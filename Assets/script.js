// Assignment Code
var options= []
var passwordLength = 8;

var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var numbers= ["1","2","3","4","5","6","7","8","9"]
var characters= ["?","#","@","$","%","!","&","^","*",".","+","/",];


var generateBtn = document.querySelector("#generate");

//this makes the red button that says generate password start the function in line 60 which will begin by calling on line 17 by clicking it
generateBtn.addEventListener("click", writePassword);


function popUpAlert(){
  var number 
  passwordLength= parseInt(prompt("What would you like your password length to be? 8-128 characters"));
// If the user does not input a number(in integer format) between 8-128 it will not let them continue to the rest of the ifs and it will return false for function on line 60 after the alert
   if(isNaN(passwordLength)|| passwordLength<8 || passwordLength >128){
     alert("Password length is not met. It needs to be between 8 to 128 charaters");
     return false;
   }
   if (confirm("Would you like your password to contain lowercase letter?")){
    options = options.concat(lowercase);
    number++
   } 
   if (confirm("Would you like your password to contain uppercase letter?")){
    options = options.concat(uppercase);
    number++
   } 
   if (confirm("Would you like your password to contain numbers letter?")){
    options = options.concat(numbers);
    number++
   } 
   if (confirm("Would you like your password to contain special characters letter?")){
    options = options.concat(characters);
    number++
   } 
//this will count the number of answers true above and if all where clicked false then it will return false for function on line 60 since var number will remain zero
// this is to force the user to atleast pick 1 character
   if (number==0){ 
     return false;   
   }
   
  return true;
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

function writePassword() {
  var metCritera = popUpAlert();
  
  if(metCritera) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value);
  } else {
   alert("Click button again")
  }
}