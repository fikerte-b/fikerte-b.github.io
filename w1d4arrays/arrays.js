"use strict";


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray,reverseArrayInplace, scoreExams, generateArray }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num1 is a number
 * @param {number} num2 is a number 
 * @param {number} num3 is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(num1, num2, num3) {
    let maximum = Math.max(num1, num2, num3);
    return maximum;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const number of arr) {
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (const number of arr) {
        tot *= number;
    }
    return tot;

}
/** 
 * @param{Array} arr of words
 * @returns{number} length of longest word 
 */

// eslint-disable-next-line require-jsdoc
function findLongestWord(arr) {
    let longWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longWord) {
            longWord = arr[i].length;
        }
    }
    return longWord;
}

/**
 * 
 * @param {Array} arr of numbers.
 * @returns{Array} returns reverse of array 
 */
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
/**
 * 
 * @param {Array} arr  as input
 * @returns {Array} reverse of the given array
 */
function reverseArrayInplace(arr){
    let temp;
    for(let i=0; i<arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr/length-i-1];
        arr[arr/length -i-1] = temp;
    }
    return arr;

}


// eslint-disable-next-line require-jsdoc
function scoreExams(studentAnswers, correctAnswers){

let studentScore = [];
for(let i =0; i < studentAnswers.length; i++){
    let count = 0;
    let index = 0;
    for(let j =0;j < studentAnswers[i].length; j++){
        if(studentAnswers[i][j] === correctAnswers[index]){
            count++;
        }
        index++;
     }
        studentScore.push(count);
    }
    return studentScore;
}

/**
 * 
 * @param {number} row of the multi dimensional array
 * @param {number} column of the multi dimensional array 
 * @returns {Array} returns two dimensional array of sequential integer numbers starting from 1
 */

// eslint-disable-next-line require-jsdoc
function generateArray(row, column) {
    let twoDimentionalArray = [];
    let value = 1;
    for (let i = 0; i < row; i++) {
        let singleArray = [];
        for (let j = 0; j < column; j++) {
            singleArray.push(value);
            value++;
            //  console.log(singleArray);
        }
        //console.log(singleArray);
        twoDimentionalArray.push(singleArray);
    }
    return twoDimentionalArray;

}