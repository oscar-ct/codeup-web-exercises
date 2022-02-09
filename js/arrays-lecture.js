"use strict"



// var groceryList = ["bread", "eggs", "butter", "milk"]
// // console.log(groceryList[0])
// // console.log("I have to buy " + groceryList[0])
//
//
// var people = ["bob ", "tom ", "rob ", "fred "]
// // console.log(people[0] + people[3])
// // console.log(people[1] + "is my best friend")
//
// /// this shows the number of items in the grocery list
// //groceryList[0].length
//
// for (var i = 0; i < groceryList.length; i++) {
//     if (i !== groceryList.length - 1) {
//         console.log("I have to buy " + groceryList[i] + " and ....");
//     } else {
//         console.log("I have to buy " + groceryList[i] + ".")
//     }
//
// }

//
// var cities = ["San Antonio", "Austin", "Dallas", "Houston"]
//
//
// for (var i = 0; i < cities.length; i++) {
//     console.log("Student number " + (i+1) + " lives in " + cities[i])
// }
//
// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
//
// prices.forEach(function(elements, i) {
//     console.log("Item number " + (i+ 1) + " cost $" +elements);
// })
//



var hamletQuote = "To be or not to be, that is the question";
var noCommasHamletQuote = hamletQuote.replace(",", "").toLowerCase();
var hamletQuoteArray = noCommasHamletQuote.split(" ");

console.log(hamletQuoteArray);
hamletQuoteArray.reverse();
console.log(hamletQuoteArray);


var hamletQuoteBackwards = hamletQuoteArray.join(" ");
console.log(hamletQuoteBackwards);

var hamletQuoteWordList = hamletQuoteArray.join(",");
console.log(hamletQuoteWordList);

var bringBackTheOriginal = hamletQuoteWordList.replaceAll(","," ");
var theOriginalArray = bringBackTheOriginal.split(" ");
theOriginalArray.reverse();
var theOriginalQuote = theOriginalArray.join(" ");
console.log(theOriginalQuote);
