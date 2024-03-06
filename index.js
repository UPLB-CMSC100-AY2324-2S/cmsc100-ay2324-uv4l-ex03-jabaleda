// Baleda, Julianne Paulene A.
// CMSC 100 UV4L JavaScript Basics Part 1

// function for validating if 2 passwords match
//  - accepts 2 string params
//  - THINK: input from a sign up form.
//  - New Password:                 -----
//  - Re-enter new password:        -----
function validateMatch(str1, str2) {
    if(str1 === str2) {
        return true;
    } else {
        return false;
    }
}


// function for reversing the password
function reversePassword(str1) {
    // reverse a string
    var strReversedTemp = [];
    var str1Length = str1.length;
    var currStrIndex = str1Length-1;

    // loop
    for (let i=0; i<str1Length; i++){
        strReversedTemp[i] = str1[currStrIndex];
        currStrIndex--;
        //console.log(strReversed[i]);
    }

    // convert array to string 
    var reversedFinal = strReversedTemp.join("");

    return reversedFinal;
}


// function for storing the password to the object
// store name, two passwords
// return an object
// if two given passwords are a valid match -> call reverse function, set as newpassword. else newpassword = password1.
function storePassword(name, password1, password2) {
    // object
    const object = {
        name: name,
        newpassword: ""
    };

    // validate if two passwords match
    var isMatch = validateMatch(password1, password2);

    if(isMatch == true){
        object.newpassword = reversePassword(password1);
    }else{
        object.newpassword = password1;
    }

    return object;
}


// sample output
console.log( reversePassword("reverseMe") );
console.log ( storePassword("John", "Pass1234", "Pass1234") );
console.log ( storePassword("John", "Pass123", "Pass12345") );