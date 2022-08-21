//Get the string from the user input
//Control Function
function getInput() {
    
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse the string
//Logic Function
function reverseString(userString) {

    let revString = [];

    //Reverse a string using a for loop
    for (let index = (userString.length - 1); index >= 0; index--) {
        revString += userString[index];
        }

    return revString;

}

//Display the reversed string on the msg
//View Function
function displayReverse(revString) {

    
}