"use strict"

function jsWarmups (input) {
    return input = "I have no idea what you just said";
}

// console.log(jsWarmups());

function returnNum (num) {
    return num * 2;
}

// console.log(returnNum(100))



function math (number) {
    return number + number;
}



/// squares a number
function math1 (number) {
    return number ** 2;
}



function math2 (num1, num2) {
    return (num1 + num1) + (num2 + num2);
}



function takesInAString (string) {
    return string.length;
}



function twoStrings (str1, str2) {
    var string = str1 + str2
    return string.length;
}



function returnToString (num){
    if (num % 2 === 0) {
        return "even";
    }   else {
        return "odd";
    }
}


var removeBs2 = ["abc", "ab", "cat", "Bay"]
removeBs2 = removeBs2.join(",").toLowerCase().replaceAll("b", "").split(",");

console.log(removeBs2)



function removeBs (array) {
    return array.join(",").toLowerCase().replaceAll("b", "").split(",");
}
console.log(removeBs(["abc", "ab", "cat", "Bay"]));




function removeBs3 (array) {
    return array.join(",").replaceAll("b", "").replaceAll("B", "").split(",");
}
console.log(removeBs3(["abc", "ab", "cat", "Bay"]));