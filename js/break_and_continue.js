"use strict"



while (true) {
    var promptNum = prompt("Enter an odd number between, 1-50");
    if (promptNum % 2 !== 0 && promptNum<= 50 && promptNum>=1) {
        console.log("Number to skip is: " + promptNum)
        break;
    }
}


for (var i = 1; i <= 50; i++) {

        if (i === Number(promptNum)) {
            console.log("Yikes! Skipping number: " + promptNum);
            continue;
        } if (i % 2 === 0) {
            continue;
        }
            console.log("Here is an odd number: " + i);
}


