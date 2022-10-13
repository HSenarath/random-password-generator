// all possible character values that can be used to generate a random password
const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',
    'V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n',
    'o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
    ];

// variables storing button elements
const generatorBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

// variable storing text field element
const passwordGenerated = document.getElementById("password-generated");