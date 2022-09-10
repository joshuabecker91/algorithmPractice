// You are given two arrays of integers a and b of the same length, and an integer k. 

// We will be iterating through array a from left to right, 

// and simultaneously through array b from right to left, 

// and looking at pairs (x, y), where x is from a and y is from b.

// Such a pair is called tiny if the concatenation xy is strictly less than k.

// Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

// a and b are the same length

let tinyPairCount = 0;

function solution(a, b, k) {
    let length = a.length;
    let x = length - 1
    for(let i = 0; i < length; i++){
        a[i] 
        b[x]
        console.log(x, "this is x")
        console.log(b[x])
        // console.log(Number(`${a[i]}` + `${b[x]}`))  undef
        console.log(`${a[i]}` + `${b[x]}`)
        if(`${a[i]}` + `${b[x]}` < k){
            console.log(`${a[i]}` + `${b[x]}`)
            tinyPairCount ++
        }
        x--
    }
    console.log(tinyPairCount)
    return tinyPairCount
}

solution([1, 2, 3], [1, 2, 3], 31)