"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
module.exports = { ucFirst,checkSpam, truncate, extractCurrencyValue, getMaxSubSum, camelize}; //add all of your function names here that you need for the node mocha tests

*/

function ucFirst(str) {
  let firstUpper = "";
  if(!str){
    return str;
  }
  firstUpper = str.charAt(0).toUpperCase() + str.slice(1);
  return firstUpper;
 
  }

 
  function checkSpam(str) {
    
    //let upperStr = str.toUpperCase;
    return (str.includes("ViAgRA") || str.includes("xxxxx"));
 
  }


  function truncate(str, maxlength) {
    if(str.length > maxlength){
      return str.slice(0, maxlength-1) + "…";
    }
    else{
      return str;
    }

  }




  function extractCurrencyValue(str){
    return Number(str.slice(1));
  }


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;


}


function camelize(str) {
  let strArray = str.split("-");
  let resultStr = strArray[0];
  for(let i = 1; i < strArray.length; i++){
    let word = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    resultStr = resultStr + word;

  }
  return resultStr;
  }


