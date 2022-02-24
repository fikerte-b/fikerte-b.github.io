"use strict";
const assert = require("assert");
const functionsModule = require("./d13mochaCodes.js");

const isVowel = functionsModule.isVowel;
const computeSalesCommission = functionsModule.computeSalesCommission;
const compoundInterest = functionsModule.compoundInterest;
const calcDownpayment = functionsModule.calcDownpayment;
const sumDigits = functionsModule.sumDigits;
const multiDigits = functionsModule.multiDigits;
const convertFahrenheit = functionsModule.convertFahrenheit;
const calcDistance = functionsModule.calcDistance;


// The mocha test for the isVowel
describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });


   // The mocha test for the computeSalesCommission
   describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });


   //mocha unit test for compoundInterest
   describe("test of compundInterest", function(){
       it("tests compound interest 110.47", function(){
           assert.equal(compoundInterest(100,10,1), 110.47130674412968);
       });
       it("tests compound interest 110.47", function(){
        assert.equal(compoundInterest(1000,5,10), 16470.0949769028);
    });
   });