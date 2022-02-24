// "use strict"
//
// function jsWarmups (input) {
//     return input = "I have no idea what you just said";
// }
//
// // console.log(jsWarmups());
//
// function returnNum (num) {
//     return num * 2;
// }
//
// // console.log(returnNum(100))
//
//
//
// function math (number) {
//     return number + number;
// }
//
//
//
// /// squares a number
// function math1 (number) {
//     return number ** 2;
// }
//
//
//
// function math2 (num1, num2) {
//     return (num1 + num1) + (num2 + num2);
// }
//
//
//
// function takesInAString (string) {
//     return string.length;
// }
//
//
//
// function twoStrings (str1, str2) {
//     var string = str1 + str2
//     return string.length;
// }
//
//
//
// function returnToString (num){
//     if (num % 2 === 0) {
//         return "even";
//     }   else {
//         return "odd";
//     }
// }
//
//
// var removeBs2 = ["abc", "ab", "cat", "Bay"]
// removeBs2 = removeBs2.join(",").toLowerCase().replaceAll("b", "").split(",");
//
// console.log(removeBs2)
//
//
//
// function removeBs (array) {
//     return array.join(",").toLowerCase().replaceAll("b", "").split(",");
// }
// console.log(removeBs(["abc", "ab", "cat", "Bay"]));
//
//
//
//
// function removeBs3 (array) {
//     return array.join(",").replaceAll("b", "").replaceAll("B", "").split(",");
// }
// console.log(removeBs3(["abc", "ab", "cat", "Bay"]));
//
//
// var user = {
//     username: "jbomb",
//     email: "john@email.com",
//     isAdmin: true
// };
//
//
//
// //
// // ================================= WARM UP 02/14/2022
// // Write a function, createUserMsg, that takes in a user object like the following...
// // {
// //     username: ‘jbomb’,
// //     email: ‘john@email.com’,
// //     isAdmin: true
// // }
// // ...and returns a string output that displays in the console like this...
// // ‘User jbomb is an admin and can be reached at john@email.com’
// // If jbomb were not an admin, the message should display...
// // ‘User jbomb is not an admin and can be reached at john@email.com’
// //
// //
// //
//
//
// function createUserMessage(user) {
// //     if(user.isAdmin) {
// //         return "User " + user.username + " is an admin and can be reached at " + user.email;
// //     } else {
// //         return "User " + user.username + " is not an admin and can be reached at " + user.email;
// //     }
// // }
//
//     return "User " + user.username + " is " + ((user.isAdmin) ? "" : " not ") + "an admin and can be reached at " + user.email;
// }
// console.log(createUserMessage(user));
//
//
//
// function areaOrPerimeter (l, w){
//     if (isNaN(parseFloat(l)) || (isNaN(parseFloat(w)))) {
//         return false
//     }
//     if (parseFloat(l) === (parseFloat(w))) {
//         return l*w
//     }
//     if (parseFloat(l) !== parseFloat(w)) {
//         return (l+w) * 2
//     }
// }
//
//
// var information2 = [
//     {
//         firstName: 'Oscar',
//         lastName: "Castro",
//         email: 'oc@codeup.com',
//         username: 'oc123',
//         password: 'oc987'
//     }
//     ];
//
//
// var information = {
//     firstName: 'Oscar',
//     lastName: 'Castro',
//     email: 'oc@codeup.com',
//     username: 'oc123',
//     password: 'oc987'
// }
//
// information2.forEach(function(info) {
//     console.log("firstName : " + info.firstName + "\n" + "lastName : " + info.lastName);
// });
//
//
// function getSimpleUser (info) {
//     return {
//         firstName: info.firstName,
//         lastName: info.lastName
//     }
// }
// console.log(getSimpleUser(information));
//
//
// var info = {
//     firstName: 'Batman',
//     lastName: 'Robin',
//     email: 'oc@codeup.com',
//     username: 'oc123',
//     password: 'oc987'
// }
// console.log(getSimpleUser(info));
//
//
// // var numbers = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]
// //
// // numbers.forEach(function(num) {
// //     if (num % 2 === 0) {
// //
// //     }
// // });
//
//
// // ================================= JS Challenge
// // Create a function, analyzeArray, that takes in an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// // analyzeArray([1, 2, 3]) returns...
// // {
// //     lengthOfArray: 3,
// //         containsAllStrings: false,
// //     combineResult: 6
// // }
// // analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// // {
// //     lengthOfArray: 3,
// //         containsAllStrings: true,
// //     combineResult: ‘abc’
// // }
// // analyzeArray([‘bob’, 100, null]) returns...
// // {
// //     lengthOfArray: 3,
// //         containsAllStrings: true,
// //     combineResult: ‘bob123null’
// // }
//
// var testArray1 = [1,2,3];
// var testArray2 = ["a,", "b", "c"];
// var testArray3 = ["bob", 100, null];
//
//
// function analyzeArray(arr) {
//
//
// }
//
// console.log(analyzeArray(testArray1));
// console.log(analyzeArray(testArray2));
// console.log(analyzeArray(testArray3));
//




// ================================= WARM UP
//
// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//
var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
// createNames(firstNames, lastNames) // returns...
//
//     [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.



function createNames (info, info2) {
    var newArr = []
    for (var i = 0; i < 5; i++) {
        newArr.push({
            firstName: info[i],
            lastName: info2[i]
        });
    }
    return newArr
}
console.log(createNames(firstNames, lastNames))





function remainder (num1, num2) {
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        return false
    }
    if (num1 > num2) {
        return num1 % num2
    }
        return num2 % num1
}

console.log(remainder(3, 16))





function printer_error (str) {
    var totalOverM = 0;
    for (var i in str) {
        if(str[i] > "m") {totalOverM++}
    }
    return "" + totalOverM + "/" + str.length
}

console.log(printer_error("mmmmmzzzzzzzz"))









