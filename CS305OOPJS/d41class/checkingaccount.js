"use strict";
/* global Account  

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
*/
/* exports at end of file since exporting an object, which can only be referenced after definition   */

/**
 * checking account class that extends account class
 * 
 */
class CheckingAccount extends Account{
    /**
     * 
     * @param {Number} number account number 
     * @param {Number} overdraft the amount allowed to withdrow after negative balance 
     */
    constructor(number, overdraft){
      super(number);
      this._overdraft = overdraft;
    }
  /**
   * 
   * @returns{Number} the overdraft amount
   */
    getOverdraft(){
        return this._overdraft;
    }
   /**
    * 
    * @param {Number} amount the overdraft amount that would be set
    * @returns{Number} the overdraft amount; 
    */
    setOverdraft(amount){
        this._overdraft = amount;
    }
   /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraft)) {
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }
    /**
     * @returns{String} returns information about the checking account
     */
    toString(){
        return `CheckingAccount ${this._number}: balance: ${this.getBalance()} overdraft limit: ${this._overdraft}`;

    }

     /**
     * @returns {String} to return a warning massage if balance is negative
     */
      endOfMonth(){
        if(this._balance < 0){
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this.getBalance()} overdraft limit: ${this._overdraft}`;
        }else{
            return "";
        }
     } 
}















/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.CheckingAccount = CheckingAccount;