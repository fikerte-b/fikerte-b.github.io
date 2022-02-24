
/* eslint-disable*/

const  assert = require("assert");

function computeSalesCommission(isSalaried, salesAmount){
    let commission;
    const COMMISSION1 = 0.01;
    const COMMISSION2 = 0.02;
    const COMMISSION3 = 0.03;
    
    
    
     
     if(isSalaried === true){
         if(salesAmount < 300 ){
            return 0; 
         }else if( salesAmount >= 300 && salesAmount <= 500){
             commission = salesAmount * COMMISSION1;
             return commission;
         }else{
             commission = (500 * COMMISSION1) + ((salesAmount -500) * COMMISSION2);
             return commission;     }
     }else{
        if(salesAmount < 300){
            return 0;   
         }else if(salesAmount >= 300 && salesAmount <= 500){
            commission = salesAmount * COMMISSION2;
            return commission;
            }else{
            commission = (500 * COMMISSION2) + ((salesAmount - 500) * COMMISSION3);
            return commission;
            }
     }
    }

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