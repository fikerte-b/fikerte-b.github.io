function sumDigit(num){
    let sum=0;
    while(num){
        sum+= num%10;
        
        num = Math.floor(num/10);
    }
    return sum;
    }
    
    function multiDigit(num){
        let product =1;
        while(num){
            product*=num%10;
            num= Math.floor(num/10);
        }
        return product;
    }
    
    console.log("expect 10: ",sumDigit(1234));
    console.log("expect 3: ",sumDigit(102));
    console.log("expect 8: ",sumDigit(8));

    console.log("expect 24: ",multiDigit(1234));
    console.log("expect 0: ",multiDigit(102));
    console.log("expect 8: ",multiDigit(8));
