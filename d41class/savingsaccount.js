/* eslint-disable valid-jsdoc */
"use strict";
/* global Account require  
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
*/
/* exports at end of file since exporting an object, which can only be referenced after definition   */

/**
 * class constructor that extends another class
 * @param{Number} number account number
 * @param(Number) interest interest rate for the saving account
 * 
 */
class SavingsAccount extends Account{
   // eslint-disable-next-line require-jsdoc
   constructor(number, interest){
       super(number);
       this._interest = interest;
   }
   /**
    * getter method for the interest
    * @returns {number} the interest rate
    */
   getInterest(){
       return this._interest;
   }
   /**
    * setter method for the interest
    * @param {Number} interest interest rate for the saving account 
    * @returns{Undefined} the method has no return value
    */
   setInterest(interest){
     this._interest = interest;
   }
   /**
    *  calculating and adding interest to the balance
    * @param{} no parameter
    * @returns{undefined} no return value
    */
   addInterest(){
       this._balance+=(this._balance *(this._interest/100));
   }
   /**
    * 
    * @returns {String} displays the information
    */
   toString(){
       return `SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
   }

   /**
     * @returns {String} a string of the amount of  interest  added 
     */
    endOfMonth(){
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }
}


/* global exports */
//exports.SavingsAccount = SavingsAccount;