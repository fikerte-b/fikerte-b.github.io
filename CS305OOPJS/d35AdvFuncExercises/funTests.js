"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.

module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests
*/
/**
 * 
 * @param {Array} arr to be modified
 * @param {Function} func that would modify the given array
 * @returns{Array} the modified array
 */
function myMap(arr, func) {
let result = [];
for (let i = 0; i < arr.length; i++){
      let resultElement = func(arr[i]);
      result.push(resultElement);
}
return result;
}

/**
 * 
 * @param {Array} arr  array to be filtered 
 * @param {Function} func that filter the array
 * @returns{Array} the filterd array
 */
function myFilter(arr, func) {
   let result = [];
   for(let i = 0; i < arr.length; i++){
       if(func(arr[i])){
           result.push(arr[i]);
       }
   }
   return result;
}

/**
 * 
 * @param {Array} arr  input array 
 * @param {Function} func input function
 * @param {Number} initialValue the starting value
 * @returns{Number} the calculated value
 */
function myReduce(arr, func, initialValue) {
      let result = initialValue;
      for(let i = 0; i < arr.length; i++){
          result = func(result, arr[i]);
      }
    return  result;
    }