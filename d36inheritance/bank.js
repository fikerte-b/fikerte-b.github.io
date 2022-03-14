/* eslint-disable require-jsdoc */
"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.

module.exports = { makeBank }; //add all of your function names here that you need for the node mocha tests
*/

/* 2.	use constructor instead of object faactory
*/


function MakeBank() {
    //let bank = {};
    //const bank = { transactionsDB: [], };
    this.bank = function(){};
    this.transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];

    this.getBalance = function (id) {
        const customer = this.transactionsDB.find(customer => customer.customerId === id);
        let balance = 0;
        for (const trans of customer.customerTransactions) { balance += trans; }
        return balance;
    };

    this.bankBalance = function () {
        let total = 0;
        for (const trans of this.transactionsDB) {
            total += this.getBalance(trans.customerId);
            // total += bank.getBalance(trans.customerId) check it
        }
        return total;
    };
    //return bank;
}