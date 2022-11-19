"use strict";


const blocks = [1, 3, 1, 3, 3] //11 total
//6 answer
const height = 2

const block = [2, 3 ,1, 1, 1] //8 total
//5 answer

const blockz = [3, 3 ,3, 3, 3] //15 total
//9 answer

const blockzz = [3, 2 ,3, 6, 3] //17 total
//9 answer

const block2 = [3, 2 ,3, 6, 3] //17 total
const height2 = 3
//8 answer

function solution (blocks, height) {
    let widths = []
    let totalWidth = 0;
    for (let i = 0; i < blocks.length; i++) {
       totalWidth += blocks[i];
    }
    let halfTotalWidth = totalWidth/height;

    for (let j = 0; j < blocks.length; j++) {
       let double = blocks[j] + blocks[j + 1]
       if (double > halfTotalWidth) {
           widths.push(double)
       }
    }

    for (let k = 0; k < blocks.length; k++) {
        let triple = blocks[k] + blocks[k + 1] + blocks[k + 2]

        if (triple > halfTotalWidth) {
            widths.push(triple);
        }
    }


   console.log(totalWidth)
   console.log(Math.min(...widths))
    // console.log(widths);
    return Math.min(...widths)

}

solution(block2, height2);




function solution10(az, za, trips) {
    trips = 2;
    let timeSpent = 0;
    const travelTime = 100;

    for (let i = 0; i < trips; i++) {

        if (timeSpent === 0) {
            timeSpent += az[i];
            console.log(az[i]);
            timeSpent += travelTime;
            console.log(timeSpent);
        }

        for (let j = 0; j < za.length; j++) {
            if (timeSpent <= za[j]) {
                timeSpent += (za[j] - timeSpent);
                console.log(timeSpent);
                timeSpent += travelTime;
                break;
            }
        }
    }

    return timeSpent;
}


function practiceSolution(arr) {

    /// This was a practice solution, still needs work

    let count = 0;
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr.length - 1;

        if (arr[i] > arr[i + 1] || arr[num - 1] > arr[num]) {
            newArray.push(arr[i]);
            count += newArray.length


        } else {
            count = arr.length
        }


    }
    return count;
}





// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
// function findOdd(numbers) {
//     let count = 0;
//     for(let i = 0; i < numbers.length; i++){
//         for(let j = 0; j < numbers.length; j++){
//             if(numbers[i] === numbers[j]){
//                 count++;
//             }
//         }
//         if(count % 2 !== 0 ){
//             return numbers[i];
//         }
//     }
// }
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));


// takes a string input, and returns the first character that is not repeated anywhere in the string =>
// function firstNonRepeatingLetter(s) {
//     let letters = s.split("");
//     let result = "";
//     for(let i = 0; i < letters.length; i++) {
//         let counter = 0;
//
//         for(let j = 0; j < letters.length; j++) {
//             if (letters[i].toLowerCase() === letters[j].toLowerCase()){
//                 counter += 1;
//             }
//         }
//         if (counter < 2){
//             result = letters[i];
//             break;
//         }
//     }
//     return result;
// }
// console.log(firstNonRepeatingLetter("sTress"));





// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
//
//     Example
//
// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

function solution(year) {
    return Math.ceil(year / 100)
}


// Given the string, check if it is a palindrome.
//
//     Example
//
// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

function solution(inputString) {
    if(inputString.split('').reverse().join('') === inputString) {
        return true;
    } else {
        return false;
    }

}

//
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
//     Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.
//
// 7 and 3 produce the largest product.

function solution(inputArray) {
    let newArray = []
    for (let i = 0; i < inputArray.length - 1; i++) {
        newArray.push(inputArray[i] * inputArray[i + 1]);

    }
    console.log(newArray)
    return Math.max(...newArray);

}


// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//
//     A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
//

function solution(n) {
    return (n*n) + ((n-1)*(n-1))
}


// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
//
//     Example
//
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.
//
// Ratiorg needs statues of sizes 4, 5 and 7.

let statues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let statues1 = [4, 2, 7, 18]

function sortSolution(statues) {

    let sortedStatues = statues.sort(function(a, b){return a-b})
    let lowNum = sortedStatues[0];
    let highNum = sortedStatues[statues.length -1];
    console.log(sortedStatues)
    console.log(lowNum);
    console.log(highNum);
    console.log(((highNum - lowNum + 1) - (statues.length)))
    return ((highNum - lowNum + 1) - (statues.length))

}


// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
//
//     Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
//
//                                                                                                     Example
//
//                                                                                                     For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.
//
//     There is no one element in this array that can be removed in order to get a strictly increasing sequence.
//
//     For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.
//
//     You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
//


function solution(sequence) {

    let count = 0

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++
        }

        if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
            return false
        }

        if (count > 1) {
            return false
        }

    }

    return true;

}



// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
//
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
//
// Example
//
// For
//
// matrix = [[0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]]
// the output should be
// solution(matrix) = 9.

// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.


function solution(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        let matrixLoop = matrix[i]
        for (let i = 0; i < matrixLoop.length; i++) {
            console.log(matrixLoop[i])
        }
    }


}

function solution(matrix) {

    let total = 0

    for (let i = 0; i < matrix[0].length; i++) {

        for (let j = 0; j < matrix.length; j++) {
            let matrixLoop = matrix[j][i]
            if (matrixLoop === 0) {
                console.log(matrixLoop)
                break;

            } else {
                total += matrixLoop
                console.log(matrixLoop)
            }
        }

    }

    return total;


}


//
// Given an array of strings, return another array containing all of its longest strings.
//
//     Example
//
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].


function solution(inputArray) {

    let newArr = []
    let longestInArr = inputArray.reduce(function (a, b) {
            return a.length > b.length ? a : b;
        }
    );


    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length === longestInArr.length) {
            newArr.push(inputArray[i])

        }

    }

    return newArr;

}



// Given two strings, find the number of common characters between them.
//
//     Example
//
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.
//
// Strings have 3 common characters - 2 "a"s and 1 "c".

/////// This is attempt 1 and came very close to working  ///////////////
function solution(s1, s2) {

    let count = 0;
    let sort1 = s1.split('').sort();
    let sort2 = s2.split('').sort();
    let matrix = [sort1, sort2]

    console.log(sort1)
    console.log(sort2)
    console.log(matrix)

    for (let i = 0; i < matrix.length - 1; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === matrix[i + 1][j]) {
                count++
            }
        }
    }


    return count;
}

/////// This is attempt 2 and completed!!!!! ///////////////

function solution(s1, s2) {

    let arr1 = s1.split('');
    let arr2 = s2.split('');
    let count1 = 0;
    let count2 = 0;
    let total = 0;
    let letters = arrayOfLetterInCommon(s1, s2);


    for (let i = 0; i < letters.length; i++) {

        arr1.filter(function(x) {
            if(x === letters[i]) {
                count1++
            }
        });

        arr2.filter(function(x) {
            if(x === letters[i]) {
                count2++
            }
        });

        if (count1 <= count2) {
            total += count1;

        } else if (count2 <= count1) {
            total += count2

        }

        count1 = 0;
        count2 = 0;

    }


    return total;
}




function arrayOfLetterInCommon (string1, string2) {
    let lettersInCommon = '';
    for (let i = 0; i < string1.length; i++) {
        if(string2.includes(string1[i])) {
            lettersInCommon += string1[i];
        }
    }
    let result = '';
    for(let j = 0; j < lettersInCommon.length; j++) {
        if(result.indexOf(lettersInCommon[j]) < 0) {
            result += lettersInCommon[j];
        }
    }

    return result;
}

//
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
//
//     Given a ticket number n, determine if it's lucky or not.
//
// Example
//
// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

function solution(n) {
    let count1 = 0;
    let count2 = 0;
    let arrNum = n.toString().split('')

    for (let i = 0; i <= arrNum.length/2 - 1; i++) {
        count1 += parseInt(arrNum[i]);

    }

    for (let j = arrNum.length/2 ; j <= arrNum.length - 1; j++) {
        count2 += parseInt(arrNum[j]);
    }

    if (count1 === count2) {
        return true;
    } else {
        return false;
    }

}


// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
//
//     Example
//
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].


function solution(a) {

    let answer = []
    let strArr = a.toString().split(',');
    let newArr = strArr.filter(function(x) {
        return x != ('-1');
    });
    let newArrSorted = newArr.sort(function(a, b){return a-b});

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] != ('-1')) {
            strArr[i] = newArrSorted.shift();
        }
    }

    for (let j = 0; j < strArr.length; j++) {
        answer.push(parseInt(strArr[j]));
    }

    return answer;
}

//
// Write a function that reverses characters in (possibly nested) parentheses in the input string.
//
//     Input strings will always be well-formed with matching ()s.
//
//     Example
//
// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
//     Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".


////// This is a partial solve, very hard challenge
function solution(inputString) {

    let inputString2 = inputString.split('')
    let index1 = inputString2.indexOf('(');
    let index2 = inputString2.indexOf(')');
    let indexArray = []
    let reverse = []

    for (let index = 0; index < inputString2.length; index++) {
        if(inputString2[index] === '(' || inputString2[index] === ')') {
            indexArray.push(index);
        }
    }

    console.log(indexArray);

    for(let i = index1 + 1; i < index2; i++) {
        reverse.push(inputString2[i])
    }

    reverse = reverse.reverse()

    for(let j = index1 + 1; j < index2; j++) {
        let count = 1
        inputString2.splice([j], count, reverse.shift())
        count++
    }

    let answer = ''
    for(let k = 0; k < inputString2.length; k++) {

        if (inputString2[k] !== '(' && inputString2[k] !== ')') {
        answer += inputString2[k];
        }
    }


 return answer;


}


const a2b = [109, 200, 500];
const b2a = [99, 210, 450];
const trips = 1;

const a2b2 = [0, 200, 500];
const b2a2 = [99, 210, 600];
const trips2 = 2;

const a2b3 = [5, 206];
const b2a3 = [105, 306];
const trips3 = 2;

function solution10(a2b, b2a, trips) {
    let timeSpent = 0;
    const travelTime = 100;

    for (let i = 0; i < trips; i++) {

        if (timeSpent === 0) {
            timeSpent += a2b[i];
            console.log(a2b[i]);
            timeSpent += travelTime;
            console.log(timeSpent);
        }

        for (let j = 0; j < b2a.length; j++) {
            if (timeSpent <= b2a[j]) {
                timeSpent += (b2a[j] - timeSpent);
                console.log(timeSpent);
                timeSpent += travelTime;
                break;
            }
        }
    }

    return timeSpent;
}

// console.log("answer: " + solution10(a2b, b2a, trips));
// console.log("answer: " + solution10(a2b2, b2a2, trips2));
console.log("answer: " + solution10(a2b3, b2a3, trips3));







// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times. function findOdd(numbers) {     let count = 0;     for(let i = 0; i < numbers.length; i++){         for(let j = 0; j < numbers.length; j++){             if(numbers[i] === numbers[j]){                 count++;             }         }         if(count % 2 !== 0 ){             return numbers[i];         }     } } // console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
function findOdd(numbers) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] === numbers[j]){
                count++;
            }
        }
        if(count % 2 !== 0 ){
            return numbers[i];
        }
    }
}
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
// takes a string input, and returns the first character that is not repeated anywhere in the string =>
function firstNonRepeatingLetter(s) {
    let letters = s.split("");
    let result = "";
    for(let i = 0; i < letters.length; i++) {
        let counter = 0;

        for(let j = 0; j < letters.length; j++) {
            if (letters[i].toLowerCase() === letters[j].toLowerCase()){
                counter += 1;
            }
        }
        if (counter < 2){
            result = letters[i];
            break;
        }
    }
    return result;
}
// console.log(firstNonRepeatingLetter("sTress"));




// return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. =>
function getMiddle (x) {
    const mid = Math.floor(x.length / 2);
    let result = x[mid];
    if(x.length % 2 === 0) {
        result = x[mid - 1] + result;
    }
    return result;
}
console.log(getMiddle("testing"));






function disemvowel(str) {
    const test = []
    str = str.split('')
    str.forEach(function(x) {
        if (x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u' && x !== 'A' && x !== 'E' && x !== 'I' && x !== 'O' && x !== 'U') {
            test.push(x)
        }
    });

    return test.join('');
}


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
//     solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){

    const endingLength = ending.length;
    const strLength = str.length;
    let newStr = '';

    for (let i = strLength - endingLength; i < str.length; i++) {
        newStr += str[i];
    }

    if (newStr === ending) {
        return true;
    } else {
        return false;
    }

}

//
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//     Examples:
//
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321

function descendingOrder(n){
    const numArray = n.toString().split('').sort().reverse();
    const str = numArray.join('')
    return parseInt(str)
}


// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not. =>

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= (mpg * fuelLeft);
};




// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false. =>
// function validatePIN (pin) {
//     return (pin.length === 4 || pin.length === 6)
//         && typeof pin === "string"
//         && Number.isInteger(+pin);
// }

function validatePIN(pin) {
    for(let i = 0; i < pin.length; i++) {
        if (!Number.isInteger(+pin[i])) {
            return false;
        }
    }
    if (/\s/.test(pin)) {
        return false;
    }
    return (pin.length === 4 || pin.length === 6);
}




// Write a function, which takes a non-negative integer between 0 and 359999 (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// if less than 0 or more than 359999 we’ll return null =>
function humanReadable(seconds) {
    if (seconds < 0 || seconds > 359999) {
        return null;
    }
    if (seconds === 0) {
        return '00:00:00';
    }
    let hours = Math.floor(seconds / 3600)
    seconds = seconds - (hours * 3600)
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - (minutes * 60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    // return hours + ":" + minutes + ":" + seconds;
    return `${hours}:${minutes}:${seconds}`;
}




//return maximum sum of contiguous subsequence in an array of numbers =>
//Kadane’s algorithm (https://en.wikipedia.org/wiki/Maximum_subarray_problem) =>
const maxSequence = function(arr){
    let sum = 0;
    let maxSum = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr.length === 0) {
            return 0;
        }
        sum = Math.max(arr[i], sum + arr[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

//using forEach =>
function maxSequence2(arr){
    let sum = 0;
    let maxSum = 0;
    if(arr.length === 0){
        return 0;
    }
    arr.forEach(n => {
        sum = Math.max(n, sum + n);
        maxSum = Math.max(maxSum, sum);
    });
    return maxSum;
}



// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
//
//     You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
//
//     Example
//
// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].

function solution(a) {
    let numOne = 0;
    let numTwo = 0;
    const numArray = [];
    for (let i = 0; i < a.length; i++) {
        if ([i] % 2 === 0) {
            numOne += a[i];
        } else {
            numTwo += a[i];
        }
    }
    numArray.push(numOne);
    numArray.push(numTwo);
    console.log(numOne);
    console.log(numTwo);
    console.log(numArray);
    return numArray;
}




// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function solution(picture) {
    const newArr = [];
    picture.forEach(function(str) {
        newArr.push('*' + str + '*');
    });

    let asterisks = '';

    for (let i = 0; i < newArr[0].length; i++) {
        asterisks += '*';
    }

    newArr.splice(0, 0, asterisks);
    newArr.splice(newArr.length, newArr.length - 1, asterisks);

    console.log(newArr);
    return newArr;

}


// Are Similar???
// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
//
//     Given two arrays a and b, check whether they are similar.
//
//     Example
//
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// solution(a, b) = true.
//
//     The arrays are equal, no need to swap any elements.
//
//     For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// solution(a, b) = true.
//
//     We can obtain b from a by swapping 2 and 1 in b.
//
//     For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// solution(a, b) = false.
//
//     Any swap of any two elements either in a or in b won't make a and b equal.


function solution(a, b) {
///  THIS SOLUTION IS DOES NOT PASS THE CHALLENGE ABOVE, HOWEVER THIS WILL CHECK IF 2 INTEGER ARRAYS ARE IDENTICAL REGARDLESS OF INTEGER ORDER
    const matrix = [a.sort(), b.sort()];
    let count = 0;
    console.log(matrix)

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length; j++) {

            console.log(matrix[i][j])
            console.log(matrix[i+1][j])

            if (matrix[i][j] === matrix[i + 1][j]) {
                count++
            }
        }
    }
    console.log(count)
    if (count === a.length) {
        return true;
    } else {
        return false;
    }
}


///  THIS SOLUTION DOES PASS THE CHALLENGE ABOVE :] !!!!!!!
function solution(a, b) {

    const matrix = [a, b];
    let count = 0;
    let iArray = [];
    console.log(matrix)

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length; j++) {

            if (matrix[i][j] !== matrix[i + 1][j]) {
                iArray.push(matrix[i][j]);
                iArray.push(matrix[i + 1][j]);
            } else {
                count++
            }

        }
    }

    console.log(iArray)

    if(count === a.length) {
        return true;
    }

    if (iArray.length <= 4) {

        for (let k = 0; k < iArray.length; k++) {
            return !(iArray[k] !== iArray[k + 3] || iArray[k + 1] !== iArray[k + 2]);
        }

    } else {
        return false;
    }


}






// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array. =>
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k <= 0 || k > strarr.length) {
        return "";
    }

    let longStr = "";
    let newStr = "";

    for (let i = 0; i < strarr.length; i++) {
        newStr = strarr.slice(i, i + k);
        if (newStr.join("").length > longStr.length ) {
            longStr = newStr.join("");
        }
    }
    return longStr;
}
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));


for (let i = 0; i < 1000; i++) {
    count++
    console.log(count)
}


// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
//
//     Example
//
// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.


function solution(inputArray) {
    let max = inputArray[0];
    let moves = 0;
    for(let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= max) {
            moves += max - inputArray[i] + 1;
            inputArray[i] = max + 1;
        }
        max = inputArray[i]
    }
    return moves
}




//
//
//
// Given a string, find out if its characters can be rearranged to form a palindrome.
//
//     Example
//
// For inputString = "aabb", the output should be
// solution(inputString) = true.
//
//     We can rearrange "aabb" to make "abba", which is a palindrome.
function solution(inputString) {
    // let count = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v', 'w','v' ,'y','z'];
    let count = "abcdefghijklmnopqrstuvwxyyz"
    let words = ""
    for (let i = 0; i < inputString.length ; i++) {
        for (let j = 0; j < count.length; j++) {
            if (inputString[i] === count[j] && !words.includes(count[j])) {
                words += count[j]
                console.log(words)
            }
        }
    }

    let wordCount = 0;

    for (let k = 0; k < inputString.length; k++) {
        for (let l = 0; l < words.length; l++) {
            if (inputString[k] === words[l]) {
                wordCount++
            }
        }
    }

    console.log(wordCount)

    if (wordCount % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
////// This is a work in progress and not completed yet ////////






////// attempt #2  !!!!!!  This is a work in progress and not completed yet ////////
function solution(inputString) {

    let inputStringArray = inputString.split('')
    let matrix = [inputStringArray.sort(), inputStringArray.sort()]
    let words = 0;
    let wordCount = []
    console.log(matrix)

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === matrix[i + 1][j - 1] && matrix[i + 1][j] === matrix[i][j - 1]) {
                words += 2

                wordCount.push(words);
                words = 0;
            }
            else if (matrix[i][j - 1] === matrix[i + 1][j - 1] && matrix[i][j] !== matrix[i + 1][j - 1] && matrix[i + 1][j] !== matrix[i][j - 1] && matrix[i][j] !== matrix[i + 1][j + 1] ) {
                words++
                wordCount.push(words);
                words = 0;

            }


        }
    }
    console.log(wordCount)

    let correctCount = 0;
    wordCount.filter(function (x) {
        if (x === 1) {
            correctCount++
        }
    });

    console.log(correctCount)

    if(correctCount <= 1) {
        return true;
    } else {
        return false;
    }


}



// Attempt #3 THIS IS A WORKING SOLUTION YAYYYY
function solution(inputString) {

    // let alphabet  = "abcdefghijklmnopqrstuvwxyyz";
    // for (let i = 0; i < inputString.length ; i++) {
    //     for (let j = 0; j < alphabet.length; j++) {
    //         if (inputString[i] === alphabet[j] && !words.includes(alphabet[j])) {
    //             words += alphabet[j];
    //         }
    //     }
    // }

    let words = inputString[0];

    for (let i = 1; i <= inputString.length; i++) {
        if (!words.includes(inputString[i - 1])) {
            words += inputString[i - 1];
        }
    }


    let wordCountArray = [];
    let wordCount = 0;
    let inputStringArray = inputString.split('');

    for (let k = 0; k < words.length; k++) {
        inputStringArray.filter(function(char) {
            if (char === words[k]) {
                wordCount++;
            }
        });
        wordCountArray.push(wordCount);
        wordCount = 0;
    }

    let oddCounter = 0;
    wordCountArray.filter(function (char) {
        if (char % 2 !== 0) {
            oddCounter++;
        }
    });

    return oddCounter <= 1;


}



// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
//
//     Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
//
//     Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
//
//     Example
//
// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.


function solution(yourLeft, yourRight, friendsLeft, friendsRight) {

    let strengthArray1 = [yourLeft, yourRight];
    let strengthArray2 = [friendsLeft, friendsRight];
    strengthArray1.sort();
    strengthArray2.sort();

    return strengthArray1[0] === strengthArray2[0] && strengthArray1[0 + 1] === strengthArray2[0 + 1]

}


// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
//
//     Example
//
// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.


function solution(inputArray) {

    let differenceArray = [];

    for (let i = 1; i < inputArray.length - 1; i++) {
        let num = Math.abs(inputArray[i] - inputArray[i - 1]);
        let num2 = Math.abs(inputArray[i] - inputArray[i + 1]);


        if (num > num2) {
            differenceArray.push(num);
        } else {
            differenceArray.push(num2);
        }

    }

    console.log(differenceArray);

    return Math.max(...differenceArray)


}



// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
//
//     Given a string, find out if it satisfies the IPv4 address naming rules.
//
//     Example
//
// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;
//
// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.
//
// 316 is not in range [0, 255].
//
//     For inputString = ".254.255.0", the output should be
// solution(inputString) = false.
//
//     There is no first number.


function solution(inputString) {

    let charArray = inputString.split('');
    let numArray = inputString.split('.');
    let dotArray = charArray.filter(function(char) {
        return char === '.';
    });
    let revisedNumArray = numArray.filter(function(num) {
        return num !== '' && num <= 255 && num >= 0;

    });
    let invalidNumChecker = true;

    revisedNumArray.forEach(function(num) {
        let numArray = num.split('');
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] == 0 && numArray.length > 1) {
                invalidNumChecker = false;
            }
        }
    });

    return dotArray.length === revisedNumArray.length - 1 && revisedNumArray.length === 4 && invalidNumChecker;

}



// You are given an array of integers representing coordinates of obstacles situated on a straight line.
//
//     Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
//
//     Find the minimal length of the jump enough to avoid all the obstacles.
//
//     Example
//
// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

function solution(inputArray) {

    let max = Math.max(...inputArray)
    for (let i = 1; i < max; i++) {
        // const check = function(element) {
        //     return element % i === 0
        // }
        let divisable = inputArray.some(function(num) {
            return num % i === 0
        });
        if (divisable === false) {
            console.log(i)
            return i;
        }
    }
    console.log(max);
    return max + 1;

}



// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either =>

function firstNonConsecutive(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] + 1 !== array[i]) {
            return array[i];
        }
    }
    return null;
}
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]));



// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
//
//     Example
//
//     For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].


function solution (inputArray, elemToReplace, substitutionElem) {

    const a = inputArray.map(function(num) { return num == elemToReplace ? substitutionElem : num; });


    const b = inputArray.map(function(num) {
        if (num === elemToReplace) {
            return substitutionElem;
        } else {
            return num;
        }
    });

    inputArray.forEach(function(num, i) {
        if (num === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    });

// return a;
// return b;
    return inputArray;


}


// Check if all digits of the given integer are even.
//
//     Example
//
// For n = 248622, the output should be
// solution(n) = true;
// For n = 642386, the output should be
// solution(n) = false.

function solution(n) {
    const str = '' + n;
    const strArray = str.split('');
    let oddCount = 0;

    strArray.forEach(function(num) {
        if (num % 2 !== 0) {
            oddCount++;
        }
    });

    return oddCount === 0;

}



// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
//
// Check if the given string is a correct variable name.
//
//     Example
//
// For name = "var_1__Int", the output should be
// solution(name) = true;
// For name = "qq-q", the output should be
// solution(name) = false;
// For name = "2w2", the output should be
// solution(name) = false.


function solution(name) {
    const strList = 'abcdefghijklmnopqrstuvwxyz0123456789_';
    const numList = '0123456789'

    const nameArr = name.toLowerCase().split('');
    let count = 0;

    nameArr.forEach(function(char) {
        if(!strList.includes(char)) {
            count++
        }
    });

    return !numList.includes(nameArr[0]) && count === 0;


}



// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
//
// Example
//
// For inputString = "crazy", the output should be solution(inputString) = "dsbaz".


function alphabeticShift(inputString) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    const inputStringArray = inputString.split('')
    const shiftArray = [];

    inputStringArray.forEach(function(char) {
        for (let i = 0; i < alphabetArray.length; i++) {
            if (char === alphabetArray[i] && char !== 'z') {
                shiftArray.push(alphabetArray[i + 1]);
            } else if (char === 'z') {
                shiftArray.push('a');
                break;
            }
        }
    });

    return shiftArray.join('');
}




// Given two cells on the standard chess board, determine whether they have the same color or not.
//
//     Example
//
// For cell1 = "A1" and cell2 = "C3", the output should be
// solution(cell1, cell2) = true.
// For cell1 = "A1" and cell2 = "H3", the output should be
// solution(cell1, cell2) = false.




function chessBoardCellColor(cell1, cell2) {

    const letterArray = ['A','B','C','D','E','F','G','H'];
    const blackChessboard = [];
    const whiteChessboard = [];

    letterArray.forEach(function(char) {
        for (let i = 1; i < 9; i++) {
            let move = char + i;
            if (char === 'A' || char === 'C' || char === 'E' || char === 'G') {
                if (i % 2 !== 0) {
                    blackChessboard.push(char + i);
                } else {
                    whiteChessboard.push(char + i);
                }
            } else {
                if (i % 2 === 0) {
                    blackChessboard.push(char + i);
                } else {
                    whiteChessboard.push(char + i);
                }
            }
        }
    });


    if (whiteChessboard.includes(cell1) && whiteChessboard.includes(cell2)) {
        return true;
    } else if (blackChessboard.includes(cell1) && blackChessboard.includes(cell2)) {
        return true;
    } else {
        return false;
    }

}


// function which returns the sum of following series upto nth term(parameter).
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments. =>

function solution(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += 1 / (3 * i + 1);
    }
    return total.toFixed(2);
}



// Testing fizzbuzz with JavaScript

const fizzBuzz = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Fizz');
        } else if (i % 3 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}



// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.
//
// Example
//
// For deposit = 100, rate = 20, and threshold = 170, the output should be
// solution(deposit, rate, threshold) = 3.
//
// Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:
//
//     year 0: 100;
// year 1: 120;
// year 2: 144;
// year 3: 172.8.
//     Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.

function depositProfit(deposit, rate, threshold) {

    let total = deposit;
    let count = 0;

    while (total < threshold) {
        let amount = (rate / 100) * total;
        total += amount;
        count++;
        console.log(total);
    }

    return count;


}


// Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:
//
//     abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// (where abs denotes the absolute value)
//
// If there are several possible answers, output the smallest one.
//
//     Example
//
// For a = [2, 4, 7], the output should be solution(a) = 4.
//
// for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
// for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
// for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
// The lowest possible value is when x = 4, so the answer is 4.
//
// For a = [2, 3], the output should be solution(a) = 2.
//
// for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.
// for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.
// Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.


function absoluteValuesSumMinimization(a) {

    let b = [];

    a.forEach(function(number) {
        let total = 0;
        for (let i = 0; i < a.length; i++) {
            total += Math.abs(number - a[i]);
        }
        b.push(total);
        total = 0;
    });

    const minNum = Math.min(...b);
    const minIndex = b.indexOf(minNum);

    return a[minIndex];

}



// Imagine you are in a universe where you can just perform the following arithematic operations. Addition(+), Subtraction(-), Multiplication(*), Division(/). You are given given a postfix expression. Postfix expression is where operands come after operator. Each operator and operand are seperated by a space. You need to evaluate the expression.
//
// For example: 25 45 + is equivalent of 25 + 45, hence the answer would be 70. Instead if you are given 20 40 + 60 *, it is equivalent of (20+40) * 60, hence the answer should be 3600. 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.
//
// Create a method 'evaluate' that takes a string as input and returns a long resulted in the evaluation. Just concentrate on happy paths. Assume that expression is always valid and division is always an integer division.
//

function postfixEvaluator(string) {

    let numArray = [];
    let expressionArray = [];
    const stringArray = string.split('');

    stringArray.forEach(function(char) {
        if (!isNaN(parseInt(char))) {
            numArray.push(char);
        } else if (isNaN(parseInt(char)) & char !== " ") {
            expressionArray.push(char);
        }
    });
    console.log(numArray);
    console.log(expressionArray);


}



// Given array of integers, remove each kth element from it.
//
//     Example
//
// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].


function extractEachKth(inputArray, k) {

// const newArray = [];
//     for (let i = 1; i < inputArray.length + 1; i++) {
//         if (i % k !== 0) {
//             newArray.push(inputArray[i - 1]);

//         }
//     }

// return newArray;

    return inputArray.filter(function(num, i) {
        return (i+1) % k !== 0;
    });

}



// Find the leftmost digit that occurs in a given string.
//
//     Example
//
// For inputString = "var_1__Int", the output should be
// solution(inputString) = '1';
// For inputString = "q2q-q", the output should be
// solution(inputString) = '2';
// For inputString = "0ss", the output should be
// solution(inputString) = '0'.



function firstDigit(inputString) {
    const inputStrArr = inputString.split('');
    let numStr = '';
    inputStrArr.forEach(function(char) {
        if (!isNaN(parseInt(char))) {
            numStr += char;
        }
    })

    console.log(numStr[0]);
    return numStr[0];
}

//
// Given a string, find the number of different characters in it.
//
//     Example
//
// For s = "cabca", the output should be
// solution(s) = 3.
//
// There are 3 different characters a, b and c.
//
//     Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] string s
//
// A string of lowercase English letters.
//
//     Guaranteed constraints:
//     3 ≤ s.length ≤ 1000.
//
//     [output] integer


function differentSymbolsNaive(s) {
    const strArr = s.split('');
    let diffChar = '';
    strArr.forEach(function(char) {
        if (!diffChar.includes(char)) {
            diffChar += char;
        }
    });
    return diffChar.length;
}


// Given array of integers, find the maximal possible sum of some of its k consecutive elements.
//
//     Example
//
// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// solution(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:
//
//     2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.


function arrayMaxConsecutiveSum(inputArray, k) {

    let sum = inputArray.slice(0, k).reduce((a, b) => a + b);
    let numArr = [sum];


    for(let i = 0; i < inputArray.length - k; i++){
        sum += inputArray[i + k] - inputArray[i];
        console.log(sum)
        numArr.push(sum)

    }
    return Math.max(...numArr);

}



// Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.
//
//     Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.
//
// Example
//
// For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
// solution(upSpeed, downSpeed, desiredHeight) = 10.
//
// #	Day	Night
// 1	100	90
// 2	190	180
// 3	280	270
// 4	370	360
// 5	460	450
// 6	550	540
// 7	640	630
// 8	730	720
// 9	820	810
// 10	910	900
// The plant first reaches a height of 910 on day 10.


function growingPlant(upSpeed, downSpeed, desiredHeight) {

    let height = 0;
    let count = 0;

    while (height <= desiredHeight) {
        height += upSpeed;
        count++
        if (height >= desiredHeight) {
            break;
        }
        height = height - downSpeed;
    }

    return count;

}


// Given a string, output its longest prefix which contains only digits.
//
//     Example
//
// For inputString = "123aa1", the output should be
// solution(inputString) = "123".
//

function longestDigitsPrefix(inputString) {

    let nonDigitIndexes = [];
    inputString.split('').forEach(function(char, i) {
        if (isNaN(parseInt(char))) {
            nonDigitIndexes.push(i)
        }
    });

    return inputString.slice(0, nonDigitIndexes[0])
}


//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

function solution (inputArray) {
    let num = 1;
    let array = [];
    for (let i = 0; i < inputArray.length; i++) {
        solution.push(num + ": " + inputArray[i])
        num += 1;
    }
    return array;
}


// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
//
//     The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.
//
//     Given a valid email address, find its domain part.
//
//     Example
//
// For address = "prettyandsimple@example.com", the output should be
// solution(address) = "example.com";
// For address = "fully-qualified-domain@codesignal.com", the output should be
// solution(address) = "codesignal.com".

function findEmailDomain(address) {
    let answer = address.split('@');
    return answer[answer.length - 1];
}


//
// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
//
//     Example
//
// For st = "abcdc", the output should be
// solution(st) = "abcdcba".


function buildPalindrome(st) {

    let inputArrayReverse = st.split('').reverse();
    let arrayList = [];

    if (st === inputArrayReverse.join('')) {
        return st;
    }

    for (let i = 0; i < inputArrayReverse.length; i++) {

        let newArr = inputArrayReverse.slice(i, inputArrayReverse.length);
        let stPalindrome = st + newArr.join('');
        let stPalindromeReverse = stPalindrome.split('').reverse().join('');

        if (stPalindrome === stPalindromeReverse) {
            arrayList.push(stPalindrome);
        }

    }

    let shortestStr = arrayList.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
    });

    return shortestStr;

}



// A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.
//
//     The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).
//
// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
//
//     Example
//
// For inputString = "00-1B-63-84-45-E6", the output should be
// solution(inputString) = true;
// For inputString = "Z1-1B-63-84-45-E6", the output should be
// solution(inputString) = false;
// For inputString = "not a MAC-48 address", the output should be
// solution(inputString) = false.


function IsMAC48Address(inputString) {

    const letters = 'ABCDEF'
    const numbers = '0123456789'
    const emptyString = ''

    let inputStringArray = inputString.split('-');
    console.log(inputStringArray);
    let count = 0;

    if (inputStringArray.includes(emptyString) || inputStringArray.length !== 6) {
        return false;
    }

    for (let i = 0; i < inputStringArray.length; i++) {
        let chars = inputStringArray[i].split('');

        for (let j = 0; j < chars.length - 1; j++) {
            if (letters.includes(chars[j]) && numbers.includes(chars[j + 1])) {
                count++;
            } else if (letters.includes(chars[j + 1]) && numbers.includes(chars[j])) {
                count++;
            } else if (numbers.includes(chars[j]) && numbers.includes(chars[j + 1])) {
                count++;
            } else if (letters.includes(chars[j + 1]) && letters.includes(chars[j])) {
                count++;
            }
        }
    }

    console.log(count);
    return count === 6;

}



// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
//
//     Example
//
// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.


function deleteDigit(n) {

    let s = n.toString();
    let arr = s.split('');
    let nums = [];

    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1);
        let total = arr.reduce(function(a, b) {
            return a + b
        }, 0);
        nums.push((parseInt(total)));
        arr = s.split('');
    }

    console.log(nums)
    let largestNum = nums.reduce(function(a, b) {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    });

    console.log(largestNum);
    // return Math.max(...nums)
    return largestNum;

}


// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
//
//     Example
//
// For text = "Ready, steady, go!", the output should be
// solution(text) = "steady".


function longestWord(text) {
    const strArr = text.split(' ');
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newArr = [];

    strArr.forEach(function(word) {
        const wordArr = word.split('');
        let englishText = wordArr.filter(function(char) {
            return alphabet.includes(char);
        });
        newArr.push(englishText.join(''));
    })

    // console.log(newArr);
    // newArr.sort(function(a, b) {
    //     return a.length - b.length;
    // });
    // console.log(newArr);

    // return newArr[newArr.length - 1];


    return newArr.reduce(function(a, b) {
        if (a.length <= b.length) {
            return b;
        } else {
            return a;
        }
    });

}


// Check if the given string is a correct time representation of the 24-hour clock.
//
//     Example
//
// For time = "13:58", the output should be
// solution(time) = true;
// For time = "25:51", the output should be
// solution(time) = false;
// For time = "02:76", the output should be
// solution(time) = false.

function validTime(time) {
    const timeArray = time.split(':');
    const hour = timeArray[0];
    const minute = timeArray[1];
    let validTimeArray = [];
    if (hour <= 23 && minute <= 59) {
        validTimeArray.push(hour, minute);
    }
    return validTimeArray.length === 2;
}



// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.
//
//     Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.
//
//     Example
//
// For inputString = "2 apples, 12 oranges", the output should be
// solution(inputString) = 14.


function sumUpNumbers(inputString) {
    const inputArray = inputString.split('');
    const newArr = [];

    const numbersAndBangArray = inputArray.map(function(char) {
        if (isNaN(parseInt(char))) {
            return "!";
        } else {
            return char;
        }
    });

    const numbersAndBangString = numbersAndBangArray.join('');
    const numbersOnlyArray = numbersAndBangString.split('!');

    numbersOnlyArray.forEach(function(char) {
        if (char !== '') {
            newArr.push(char);
        }
    });


    return newArr.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);


}



// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
//
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
//
//     Example
//
// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.


function CircleOfNumbers(n, firstNumber) {

    console.log(n);
    console.log(firstNumber);

    return (n/2 + firstNumber) % n;

}

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function haystack (haystack, needle) {
    if (haystack.length >= needle.length) {
        let j;
        for (let i = 0; i < haystack.length; i++) {
            for (j = 0; j < needle.length; j++) {
                if (needle[j] !== haystack[i + j]) {
                    break;
                }
            }
            if (j === needle.length) {
                return i;
            }
        }
    }
    return -1;
    ///////   solution #2, by c-berry;   ////////
    // return haystack.indexOf(needle);
}




// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false
const isSameTree = (p, q) => {
    return JSON.stringify(p) === JSON.stringify(q);
};
// console.log(isSameTree([1, 2, 3], [1, 2, 3]));
// console.log(isSameTree([1, 2], [1, null, 2]));

const isSameTree2 = (p, q) => {
    if (p == null && q == null){
        return true
    }
    if (p==null || q==null) {
        return false
    }
    if (p.val !== q.val) {
        return false
    }
    return isSameTree2(p.left, q.left) && isSameTree2(p.right,q.right);
};