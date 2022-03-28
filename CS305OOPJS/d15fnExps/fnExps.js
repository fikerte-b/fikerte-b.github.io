"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests
*/
/**
 *@param {number} num the input
 *@returns {Number} double the input
 */
function double(num){
    return num * 2;
}


/**
 * @param {number} num input
 * @returns {number} 100 times the input
 */
 function times100(num){
     return 100 * num;
 }


/**
 * @param {Array} arr array of number type input
 * @param {Function} fun is function as input 
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, fun){
    let result = [];
    for(let element of arr){
        let newValue = fun(element);
        result.push(newValue);
    }
    return result;
}