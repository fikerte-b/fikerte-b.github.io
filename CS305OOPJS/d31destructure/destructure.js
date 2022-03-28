"use strict";

const { log } = require("console");

/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
module.exports = { topSalary , destructuringAssignment}; //add all of your function names here that you need for the node mocha tests
*/
/**
 * 
 * @param {Object} user 
 * @result {Object} the destructured object and years property changed  to age and defualt for isAdmin
 */
function destructuringAssignment(user){
    let {name, years: age, isAdmin = false} = user;
    console.log(name, age, isAdmin);
}

function topSalary(salaries) {
    let topSal = 0;
    let topName = "";
    if(Object.entries(salaries).length === 0){
        return null;
    }
    for(const [name, salary] of Object.entries(salaries)){
        if(topSal < salary){
            topSal = salary;
            topName = name;
        }
     }
     return topName;
  }


  /**
   * @param{Object} the object that will be turned into JSON
   * @returns{Object} the object that is serialized and read it back into another variable
   * 
   */
  function turnBack(obj){
      let result = {};
      result = JSON.parse(JSON.stringify(obj))
      return result;
  }

  // Yes we can use this method to do a deep clone for an object 