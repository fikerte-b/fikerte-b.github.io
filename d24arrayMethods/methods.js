/* eslint-disable require-jsdoc */
/* eslint-disable id-length */
"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests
*/

/**
 * 
 * @param {String} str of words that are separated by "-"
 * @return {String} str after camelized.
 */
function camelize(str){
  let strArray = str
    .split("-")
    .map(function(word, index){
    if(index === 0)
    return word[0];
    else{
      return word[0].toUpperCase() + word.slice(1);
    }
    })
    // eslint-disable-next-line quotes
    .join('');
  
  return strArray;
}

/**
 * 
 * @param {Array} arr of numbers 
 * @param {Number} a the lower value 
 * @param {Number} b the maximum value
 * @return {Array} the numbers in between a and b inclusive 
 */
function filterRange(arr, a, b) {
   const result = arr.filter(number => number >= a && number <= b);
   return result;
  }

 /**
  * 
  * @param {Array} arr to be filtered 
  * @param {Number} a the lower value 
  * @param {Number} b the higher value
  * @returns {Arrar} the modified array value between a and b
  */
  function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i< arr.length; i++){
          if(arr[i] < a || arr[i] > b){
              arr.slice(i, 1);
              
          }
      
      }
      
  
    return arr;

  }
 

  function Calculator() {
    this.calc = {
      ["-"] : (a, b) => a-b,
      ["+"] : (a, b) => a + b

    };
    this.calculate = function(str){
      let splitted = str.split(" ");
      let  a = +splitted[0];
      let operator = splitted[1];
      let b = +splitted[2];
     if(!this.calc[operator]){
       return NaN;
     }
     return this.cal[operator](a, b);
    };
    this.addMethod = function(property, func) {
      this.calc[property] = func;
    };
  }

  function unique(arr) {
    let uniqueArray = [];
    for(let element of arr){
      if(!uniqueArray.includes(element)){
         uniqueArray.push(element);
      }
    }
    return uniqueArray;
  }


  function groupById(array) {
    let result = array.reduce((obj, value) => {
      obj[value.id] = value;
      return value;
    }, {});
    return result;
  }

  