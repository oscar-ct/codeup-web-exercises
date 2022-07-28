
blocks = [1, 3, 1, 3, 3] //11
//6
height = 2

block = [2, 3 ,1, 1, 1] //8
//5

blockz = [3, 3 ,3, 3, 3] //15
//9

function solution (blocks, height) {
   let totalWidth = 0;
   for (let i = 0; i < blocks.length; i++) {
       totalWidth += blocks[i];
   }


   for (let j = 0; j < 100; j++) {
       // console.log((height * j));
       if((height * j) >= totalWidth) {
           console.log(j)
           break;
       }
   }







}

solution(blockz, height);


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