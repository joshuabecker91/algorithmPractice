

var commonFactors = function(a, b) {
    let count = 0;
    let x = a 
    if(b < a){
        x = b 
    }
    while(x > 0){
        if((a % x == 0) && (b % x == 0)){
            count++
        }
        x--
    }
    console.log(count)
    return count 
};

commonFactors(12,6)