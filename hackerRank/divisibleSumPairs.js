


function divisibleSumPairs(n, k, ar) {
    let pairCount = 0;
    for(let i = 0; i < ar.length; i++){
        for(let j = 0; j < ar.length; j++){
            if(i < j && (ar[i] + ar[j]) % k == 0){
                pairCount += 1;
            }
        }
        
    }
    console.log(pairCount);
    return pairCount;
}

divisibleSumPairs(6, 3, [1,3,2,6,1,2])

