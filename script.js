// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var posCar=[];  // empty array for poss ca
var Result=[];

// Function to prompt user for password options
function getPasswordOptions() {

  var passwordLength = prompt("How many characters would you like in the password?");
  var upperCase = confirm("Are Uppercase letters allowed?");
  var lowerCase = confirm("Are Lowercase letters allowed?");
  var Numeric = confirm("Are Numeric characters allowed?");
  var special = confirm("Are special characters allowed?");
   /*Other Requirements:
    - code should validate for each input: 
        - Many times users will try to input incorrect input to try and break the app. What if a user inserts 
          a letter instead of a number when we ask for password length? How can we check to see that the correct 
          data type (a number) was inserted? 
      

      - What can we use to display a message to the user in the browser if they input incorrect content ? 
  */

  //  where should this function be called within the file?
  var dataUser = {
    passwordLength:passwordLength,
    upperCase:upperCase,
    lowerCase:lowerCase,
    Numeric:Numeric,
    special:special

  }

return dataUser;


}

// Function for getting a random element from an array
function getRandom(arr) {

   // accepts an array as input
  // how can we generate random numbers and use them to grab content from the arrays ?
  //  where should this function be called within the file?
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomCharacter = arr[randomIndex];
  return randomCharacter;

}

// Function to generate password with user input
function generatePassword() {

  //passwordLength 10 < 64
  //lowercase, uppercase, special char,number
  //validate input charactor between 10 and 64 one charactor type is bring selected
  // display generate password on display
  if(passwordLength >= 8 && passwordLength < 64) {
    
  } else {
   
  }

  var passwordOptions=getPasswordOptions();
 //console.log(passwordOptions);
 if(passwordOptions.lowerCase){
     posCar=posCar.concat(lowerCasedCharacters);
 }
 if(passwordOptions.upperCase){
  posCar=posCar.concat(upperCasedCharacters);
}
if(passwordOptions.Numeric){
  posCar=posCar.concat(numericCharacters);
}
if(passwordOptions.special){
  posCar=posCar.concat(specialCharacters);
}
console.log(posCar);

for (let index = 0; index < passwordOptions.passwordLength; index++) {
  var charactor = getRandom(posCar);
 Result.push(charactor);
  console.log(charactor);

}
return Result.join("");


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);