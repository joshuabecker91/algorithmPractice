
// ar = [1,2,1,2,1,3,2]
// 1 3 / 2 rounded down   1
// 2 3 / 2 rounded down   1
// 3 1 / 2 rounded down + 0
// ----------------------
                    //  2

// count total for each color 
// then divide each by 2 to find whole number of pairs (math.floor)
// sum all pairs to get total pair count 

function sockMerchant(n, ar) {
    let hashmap = {}
    let count = 0;
    for(let i = 0; i < ar.length; i++){
        let sock = ar[i]
        if(hashmap[sock]){
            hashmap[sock]++
        } else {
            hashmap[sock] = 1
        }
        // console.log(hashmap)
    }
    // console.log("end", hashmap)
    for(let key in hashmap){
        // console.log(hashmap[key])
        count += Math.floor(hashmap[key] / 2)
        // console.log("count", count)
    }
    // console.log(count)
    return count
}

sockMerchant(7, [1,2,1,2,1,3,2])