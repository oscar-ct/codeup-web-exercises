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


//
// function createNames (info, info2) {
//     var newArr = []
//     for (var i = 0; i < 5; i++) {
//         newArr.push({
//             firstName: info[i],
//             lastName: info2[i]
//         });
//     }
//     return newArr
// }
// console.log(createNames(firstNames, lastNames))



//
//
// function remainder (num1, num2) {
//     if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
//         return false
//     }
//     if (num1 > num2) {
//         return num1 % num2
//     }
//         return num2 % num1
// }
//
// console.log(remainder(3, 16))
//
//


//
// function printer_error (str) {
//     var totalOverM = 0;
//     for (var i in str) {
//         if(str[i] > "m") {totalOverM++}
//     }
//     return "" + totalOverM + "/" + str.length
// }
//
// console.log(printer_error("mmmmmzzzzzzzz"))
//



var message1 = "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
var message2 = "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."
var message3 = "The cost of the ferry across Loch Ness is 3.50"
var message4 = "The leading batter this year is hitting three fifty"


function isLockNessMonster(s) {
    var lockNess = s.replace(',')
    var lockNessArray = lockNess.split(" ")

    if (lockNessArray.includes("tree") || lockNessArray.includes("fiddy") || lockNessArray.includes("3.50"))
   return ("Beware of the monster!!")
    else {
        return ("Carry on friend")
    }
}
//
// console.log(isLockNessMonster(message1))
// console.log(isLockNessMonster(message2))
// console.log(isLockNessMonster(message3))
// console.log(isLockNessMonster(message4))
//


//
// // WARM UP #1 (03/04/2022)
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// }
// // function parcelWeight() {
// //     return parcel.weight
// // }
// function parcelWeight(parcel) {
//     return parcel.weight
// }
// console.log(parcelWeight(parcel))
//



// WARM UP #2 (03/04/2022)
// var parcels = [{
//     parcelNumber: 1,
//     weight: 20,
// }, {
//     parcelNumber: 2,
//     weight: 25
// }]
// function parcelWeights(parcel) {
//     return parcel[0].weight + parcel[1].weight
// }
// // function parcelWeights () {
// //     return parcels[0].weight + parcels[1].weight
// // }
// console.log(parcelWeights(parcels))
//
//
//

// WARM UP #3 (03/04/2022)

// function outputParcelInfo(array) {
//     var outputDiv = document.getElementById("hello");
//     var total = 0;
//     var html = "<table><tr><th>Parcel Number</th><th>Weight</th>";
//
//     for (var i = 0; i < array.length; i++) {
//         total += array[i].weight;
//         html += "<tr><td>" + array[i].parcelNumber + "</td></td>" + array[i].weight + "</td></tr>";
//     }
//     html += "<tr><td>Total:</td><td>" + total + "</td></table>";
//     outputDiv.innerHTML = html
// }
//
// outputParcelInfo(parcels);


// WARM UP #4 (03/04/2022)






// WARM UP #1  03/07/2022



// Consider the following array of users:
//
//     var users = [
//         {
//             username: 'fsmith',
//             email: 'fsmith@email.com',
//             numberOfLogins: 23
//         },
//         {
//             username: 'ksmith',
//             email: 'ksmith@email.com',
//             numberOfLogins: 100
//         },
//         {
//             username: 'lsmith',
//             email: 'lsmith@email.com',
//             numberOfLogins: 10
//         }
//     ];

// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
//
// returnFirstUser(users) should return...
//
// {
//     username: 'fsmith',
//         email: 'fsmith@email.com',
//     numberOfLogins: 23
// }
function returnFirstUser (array) {
    return array[0]
}
// console.log(returnFirstUser(users))


// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// returnTotalUserLogins(users) should return... 133
function returnTotalUserLogins(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i].numberOfLogins;
    }
    return total
}
// console.log(returnTotalUserLogins(users))

// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...
//
// {
//     username: 'ksmith',
//         email: 'ksmith@email.com',
//     numberOfLogins: 100
// }

// function returnMostFrequentUser(users) {
//     var mostFrequentUser = users[0];
//     for (var i = 0; i < users.length; i++) {
//         if (users[i].numberOfLogins > mostFrequentUser.numberOfLogins) {
//             mostFrequentUser = users[i];
//         }
//     }
//     return mostFrequentUser;
// }
// console.log(returnMostFrequentUser(users));
//
// function returnMostFrequentUser2(users) {
//     var mostFrequentUser = users[0];
//     users.forEach(function(user) {
        // console.log(user.numberOfLogins, mostFrequentUser.numberOfLogins)
        // console.log(user.numberOfLogins > mostFrequentUser.numberOfLogins);
//         if (user.numberOfLogins > mostFrequentUser.numberOfLogins) {
//             mostFrequentUser = user;
//         }
//     });
//     return mostFrequentUser;
// }
// console.log(returnMostFrequentUser2(users));




// WARM UP 03/08/2022


var operations1 = [
    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    }
]

var operations2 = [
    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    },
    {
        operation: 'multiply',
        integer: 3
    },
]
var operations3 = [

    {
        operation: 'subtract',
        integer: 5
    },
    {
        operation: 'multiply',
        integer: -2
    },
    {
        operation: 'add',
        integer: 10
    },
]


// function computeOperations (array, int) {
//     var total = 0;
//
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].operation === "add") {
//             total += array[i].integer
//         }
//     }
//     return int + total
// }
// console.log(computeOperations(operations1, 10))



function computeOperations (array, int) {
    var total = int;

    for (var i = 0; i < array.length; i++) {
        if (array[i].operation === "add") {
            total += array[i].integer
        } else if (array[i].operation === "multiply") {
            total *= array[i].integer
        } else if (array[i].operation === "subtract") {
            total -= array[i].integer
        }
    }
    return total
}


function computeOperations2 (array, int) {
    var total = int;
    array.forEach(function(arr) {
        if (arr.operation === "add") {
            total += arr.integer
        } else if (arr.operation === "multiply") {
            total *= arr.integer
        } else if (arr.operation === "subtract") {
            total -= arr.integer
        }
    });
    return total

}

//
// console.log(computeOperations2(operations3, 10))
// console.log(computeOperations2(operations2, 10))
// console.log(computeOperations2(operations1, 10))



//
// ================================= WARM UP
//
// Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.
//
// Examples:

var nums1 = [1, 2, 3, 4, 5];
var nums2 = [2, 2, 3, 4, 5];
var nums3 = [10, 0, -5, 4, 5];
var nums4 = [2, 2, -5, 2, 2];
var nums5 = [2, 2, 2, 2, 2];


function includesTwo (num) {
    return num === 2
}
//
// function addTwos(array) {
//     var all = array.filter(includesTwo)
//     var sum = 0
//    for (var i = 0; i < all.length; i++) {
//        sum += all[i]
//    }
//    return sum
// }
//
//
// console.log(addTwos(nums3))
//
//
//
// addTwos(nums1) // returns 2
// addTwos(nums2) // returns 4
// addTwos(nums3) // returns 0
// addTwos(nums4) // returns 8
// addTwos(nums5) // returns 10



// ================================= WARM UP
//
// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.

function returnStringObject (str) {
    var obj = {
        stringValue: str,
        stringArray: str.split('')
    }
return obj
}

// console.log(returnStringObject('Hello'))


//
//     Examples...
//
// returnStringObject('hello') // returns...
//
// {
//     stringValue: 'hello',
//         stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
//     stringValue: 'codeup',
//         stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }



// function countNegatives (arr) {
//     newArr = arr.filter(function(num){
//         return num < 0
//     });
//     if(newArr.length > 0) {
//         return newArr.length
//     } else {
//         return 0
//     }
// }

// console.log(countNegatives([-5, 10, 2]))



// function countNegatives(num) {
//     var total = 0
//     if (num < 0) {
//         total++;
//     }
//     return total;
// }

var num4 = [-3, 10, 2, 1]


// function countNegatives(nums) {
//     var total = 0;
//     nums.forEach(function(n) {
//         if (n < 0) {
//             total++;
//         }
//     });
//     return total;
// }
// console.log(countNegatives(num4));

function countNegatives (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            total++
        }
    }
    return total
}

// console.log(countNegatives(num4));


var usernames = [
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@email.com'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        email: 'sally@email.com'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        email: 'fred@email.com'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith',
        email: 'cathy@email.com'
    },
    {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joe@email.com'
    },
];


// function createFirstNamesArray (arr){
//     var firstNames = []
//     for(var i = 0; i < arr.length; i++) {
//         firstNames += arr[i].firstName + ','
//     }
//     firstNames = firstNames.split(',')
//     firstNames.pop()
//     return firstNames
// }

// console.log(createFirstNamesArray(usernames)); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']


$('#change-color').click(function(){
    $('#square').css('background', 'red')
})



// $('.square').eq(0).hover(function (){
//     $(this).css('background', 'blue');
// }, function () {
//     $(this).css('background', 'white');
// });
//
// $('.square').eq(1).hover(function (){
//     $(this).css('background', 'red');
// }, function () {
//     $(this).css('background', 'white');
// });
//
// $('.square').eq(2).hover(function (){
//     $(this).css('background', 'green');
// }, function () {
//     $(this).css('background', 'white');
// });


// function encodeStr (string) {
//     return string.toLowerCase()
//         .replaceAll('a', '@')
//         .replaceAll('i', '1')
//         .replaceAll('s', '$')
//         .replaceAll('a', '@')
// }
//
// console.log(encodeStr('apple'));
// console.log(encodeStr('codeup'));
// console.log(encodeStr('SASS'));
// console.log(encodeStr('bike'));