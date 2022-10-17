// all possible character values that can be used to generate a random password
const allCharacters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',
    'V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n',
    'o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
];

// variable to store the password length user picked
const passwordLengthEl = document.getElementById("password-length");

// variables for copy button
const copyMessageEl = document.getElementById("copied-message");
let isPasswordCreated = false;

// variables storing button elements
const generatorBtn = document.getElementById("generator-btn");
const copyBtn = document.getElementById("copy-btn");

// variable storing text field element
let passwordGenerated = document.getElementById("password-generated");

// function that gets triggered when the 'Generate Password' button is selected
generatorBtn.addEventListener("click", function (){
    copyMessageEl.textContent="";
    let passwordElements = "";
    let passwordLength = passwordLengthEl.value;
    

    for (i = 0; i < passwordLength; i++) {
        // outputs random number between 1 and length of the character array
        let randomNumber = Math.floor(Math.random() * allCharacters.length) + 1;
        passwordElements += allCharacters[randomNumber];
    }
    passwordGenerated.value = passwordElements;
    isPasswordCreated = true;
})

// function that gets triggered when the 'Copy' button is selected
copyBtn.addEventListener("click", function (){
    if (isPasswordCreated === true) {
        let input = passwordGenerated.value;

        navigator.clipboard.writeText(input);
    
        copyMessageEl.textContent = "Copied Successfully!";
    }
})