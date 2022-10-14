// all possible character values that can be used to generate a random password
const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',
    'V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n',
    'o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
    ];

const passwordLength = 15;
const copyMessageEl = document.getElementById("copied-message");

// variables storing button elements
const generatorBtn = document.getElementById("generator-btn");
const copyBtn = document.getElementById("copy-btn");

// variable storing text field element
let passwordGenerated = document.getElementById("password-generated");

generatorBtn.addEventListener("click", function (){
    let passwordElements = "";

    for (i = 0; i < passwordLength; i++) {
        // outputs random number between 1 and length of the character array
        let randomNumber = Math.floor(Math.random() * characters.length) + 1
        passwordElements += characters[randomNumber]
    }
    passwordGenerated.value = passwordElements
})

copyBtn.addEventListener("click", function (){
    let input = passwordGenerated.value;

    navigator.clipboard.writeText(input);

    copyMessageEl.textContent = "Copied Successfully";
})