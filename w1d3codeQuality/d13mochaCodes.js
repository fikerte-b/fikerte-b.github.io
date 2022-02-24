"use strict";
/* eslint-disable*/
module.exports = {isVowel,computeSalesCommission,calcDownpayment,sumDigits,multiDigits,convertFahrenheit,calcDistance };

function isVowel(character) {
    if (character === "a" || character === "i"
        || character === "o" || character === "u"
        || character === "e") {
        return true;
    } else {
        return false;
    }

}

function computeSalesCommission(isSalaried, salesAmount) {
    let commission;
    const COMMISSION1 = 0.01;
    const COMMISSION2 = 0.02;
    const COMMISSION3 = 0.03;




    if (isSalaried === true) {
        if (salesAmount < 300) {
            return 0;
        } else if (salesAmount >= 300 && salesAmount <= 500) {
            commission = salesAmount * COMMISSION1;
            return commission;
        } else {
            commission = (500 * COMMISSION1) + ((salesAmount - 500) * COMMISSION2);
            return commission;
        }
    } else {
        if (salesAmount < 300) {
            return 0;
        } else if (salesAmount >= 300 && salesAmount <= 500) {
            commission = salesAmount * COMMISSION2;
            return commission;
        } else {
            commission = (500 * COMMISSION2) + ((salesAmount - 500) * COMMISSION3);
            return commission;
        }
    }
}



function compoundInterest(deposit, rate, years) {

    const monthlyRate = (rate / 12) / 100;

    const numPayments = years * 12;

    let balance = deposit;



    for (let i = 1; i <= numPayments; i++) {

        balance = balance + (balance * monthlyRate);


    }

    return balance;

}


function calcDownpayment(cost) {
    if (cost < 50000) {
        return cost * 0.05;

    } else if (cost >= 50000 && cost <= 100000) {
        return 2500 + (0.1 * (cost - 50000));
    } else if (cost >= 100000 && cost <= 200000) {
        let calCost1 = 7500 + (0.15 * (cost - 100000));
        return calCost1;
    } else {
        return 20000 + (0.1 * (cost - 200000));
    }


}


function sumDigits(num) {
    let sum = 0;
    while (num) {
        sum = sum + num % 10;

        num = Math.floor(num / 10);
    }
    return sum;
}

function multiDigits(num) {
    let product = 1;
    while (num) {
        product = product * num % 10;
        num = Math.floor(num / 10);
    }
    return product;
}


function convertFahrenheit(temp) {
    let celsius = (temp - 32) * (5 / 9);
    return celsius;
}

function calcDistance(x1, y1, x2, y2) {
    let xCor = Math.pow((x2 - x1), 2);
    let YCor = Math.pow((y2 - y1), 2);
    let distance = Math.sqrt((xCor + YCor));
    return distance;
}
