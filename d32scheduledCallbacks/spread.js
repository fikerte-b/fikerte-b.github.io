"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr of collections
 * @returns {Array} the result array that would be cloned using spread 
 */
function copyArray(arr){
    let result = [];
    result = [...arr];
   return result;

}

/**
 * 
 * @param {Array} arr1 the first array to concatnate 
 * @param {Array} arr2 the second array to concatnate
 * @returns {Array} the result of the conc 
 */
function concat(arr1, arr2){
    let result = [];



}

function findMin(...numbers) {

}

function combineObjs(obj1, obj2){

}