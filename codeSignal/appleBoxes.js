

function solution(k) {
    let redTotal = 0;
    let yellowTotal = 0;
    for(let i = 1; i <= k; i++){
        if(i % 2 == 0){
            redTotal += (i * i);
        }
        else{
            yellowTotal += (i * i);
        }
    }
    console.log(redTotal, yellowTotal);
    console.log(redTotal - yellowTotal);
    return redTotal - yellowTotal;
}

solution(5);

// even = red 
// odd = yellow 

// red total - yellow total 