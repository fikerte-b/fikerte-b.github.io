let commission;
const COMMISSION1 = 0.01;
const COMMISSION2 = 0.02;
const COMMISSION3 = 0.03;
const prompt = require("prompt-sync")();
let salesPerson = prompt("Is the sales person salaried? Yes/No");
let sales = prompt("Please enter the sales amount:");

 
 if(salesPerson == "Yes"){
     if(sales < 300 ){
         console.log("No Commission"); 
     }else if( sales >= 300 && sales <= 500){
         commission = sales * COMMISSION1;
         console.log(commission);
     }else{
         commission = sales * COMMISSION2;
         console.log(commission);
     }
 }else{
    if(sales < 300){
        console.log("No Commission");
    }else if(sales >= 300 && sales <= 500){
        commission = sales * COMMISSION2;
        console.log(commission);
    }else{
        commission = sales * COMMISSION3;
        console.log(commission);
    }
 }

 //Question #2
//Using while loop
let age1 = prompt("Please enter the age?");
while(age1 <= 18){
 console.log(age1);
 age1 = prompt("Please enter another age?");
}

//Using do while
let age2 = prompt("Please enter the age?");
do{
    console.log(age2);
    age2 = prompt("Please enter another age?");
}while(age2 <= 18)


//Question #3

//Question #4

for(let i = 1; i < 6; i++){
    let result = "";
    for(let j =1; j < 6; j++){
      result = result + j;
    }
    console.log(result);
}

for(let i = 1; i < 6; i++){
    let result = "";
    for(let j =1; j < i+1; j++){
        result = result + i;
    }
    console.log(result);

}

for(let i = 5; i > 0; i--){
    let result = "";
    for(let j =1; j < i+1; j++){
        result = result + i;
    }
    console.log(result);

}

