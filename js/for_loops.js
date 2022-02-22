"use strict"
//// same below
// for(var i = 100; i >= 5; i -= 5) {
/// console.log(i);

// for (var i = 100; i > 0; i = i - 5) {
//     console.log(i);
// }
//
/////same above


/// below are two ways of solving

// var repeatingNumbers = [1, 22, 333, 4444, 55555, 666666, 7777777, 88888888, 999999999,]
//
// for (var i = 0; i < repeatingNumbers.length; i++) {
//     console.log(repeatingNumbers[i])
// }
//
//
//
// for (var repeatingNumber = 1; repeatingNumber <= 9; repeatingNumber++) {
//     console.log(Number(repeatingNumber.toString().repeat(repeatingNumber)))
// }

/// above are two ways of solving






for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() *180) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even")
    } else {
        console.log(randomNumber + " is odd")
    }
}






// function showMultiplicationTable (number) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + (number * i));
//     }
// }
// showMultiplicationTable(7);

