"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum,
    includesEvenAge, findSum, findAverage, maxNum, maxAge, aveEvenAge, aveOddAge }; //add all of your function names here that you need for the node mocha tests
*/

function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
return arr.map(people => `${people.name}: ${people.age *2}`);
    // people.name + ": " + people.age * 2 );
}

function filterEven(arr){
    return arr.filter(number => number % 2 ===0);

}

function filterOver10(arr) {
    return arr.filter(people => people.age > 10);

}

function findEvenNum(arr){
    return arr.find(number => number%2 === 0);

}

function findEvenAge(arr){
    return arr.age.find(people => people % 2 ===0);

}

function includesEvenNum(arr){
    let result = arr.find(number => number % 2 ===0);
    return arr.includes(result);

}

function includesEvenAge(arr){
    let result = findEvenAge(arr);
    return arr.includes(result);

}
// reduce
function findSum(arr){
    return arr.reduce((sum, current) => sum + current,0);
}
function findAverage(arr){
    let sum = arr.reduce((number, current) => number + current, 0);
    return sum/arr.length;
}
function maxNum(arr){
    let result = arr.reduce((max, current) => current > max ? current : max, -Infinity);
    return result;
}

function maxAge(arr){
    return arr.reduce((min, current) => min.age < current.age ? current : min);
}
   
function aveEvenAge(arr){
    let result = arr
       .map(people => people.age)
       .filter(num => num % 2 === 0);
    let reduceResult = result.reduce((sum, current) => sum + current, 0)/result.length;
   return reduceResult;
}
function aveOddAge(arr){
   let result = arr
      .map(people => people.age)
      .filter(num => num % 2 !== 0);
   let reduceResult = result.reduce((sum, current) => sum + current, 0)/result.length;
  return reduceResult;
}