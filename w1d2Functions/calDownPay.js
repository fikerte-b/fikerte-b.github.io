/*
Defining Table

Input:      cost of a house

Output:      house down payment.

Processing: if the cost of the house is less than 50K calculate (0.05 * cost).

            esle if cost of the house is greater than or equal 50k and less than or equal to 100k calculate (2500 + (0.1 * (cost - 50000))),

            else if cost of the house is greater than or equal 100k and less than or equal to 200k calculate (7500 + ( 0.15 * (cost-100000)).

            else calculate (20000 + (0.1 * (cost -200000));

*/


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


console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));

