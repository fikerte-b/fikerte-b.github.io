
//const prompt = require("prompt-sync")();

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

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));