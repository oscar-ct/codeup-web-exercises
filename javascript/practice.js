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



