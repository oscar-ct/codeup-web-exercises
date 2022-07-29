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