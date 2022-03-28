/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";
/**
 * 
 * @param {Number} from starting number
 * @param {Number} to the last number to be displayed
 * @returns{undefined} no return , it will just print out every second
 */

// using setInterval
function printNumbers(from, to){
    let current = from;
    let timerId = setInterval(function(){
        console.log(current);
        if(current === to){
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}


// to print out each number in every second * number.
// print 5 in 5 seconds, 6 in 6 seconds
function printNumbersInterval(from, to){
    let current = from;
    let timeSet = 1000;
    let timerId = setInterval(function(){
        console.log(current);
        if(current === to){
            clearInterval(timerId);
        }
        current++;
    }, timeSet);
    timeSet*=current;
}

// using setTimeout
function printNumbersSet(from, to){
    let current = from;
    setTimeout(function run(){
        console.log(current);
        if(current < to){
            setTimeout(run, 1000);
        }
        current++;
    }, 1000);
}
printNumbers(1, 4);
printNumbersInterval(1, 4);
printNumbersSet(1,4);