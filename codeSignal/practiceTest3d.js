

function solution(a, k) {
    let count = 0;
    for(let i = 0; i < a.length; i++){
        for(let j = i+1; j < a.length; j++){
            if((a[i] + a[j]) % k == 0 && i < j){
                count++
            }
        }
    }
    console.log(count);
}

solution([1, 2, 3, 4, 5], 3);


// i < j 

// a[i] + a[j]