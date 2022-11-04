


function solution(l, r) {
    let hashmap = {}
    let count = 0;
    for(let i = l; i <= r; i++){
        let sum = i.toString().split('').reduce((a, b) => Number(a) + Number(b), 0)
        let lower = i - sum
        let upper = i + sum
        for(let j = lower; j <= upper; j++){
            if(i != j){
                // console.log(i, j)
                let array = [i,j]
                let sortedArray = array.sort((i,j) => i - j) 
                if(hashmap[sortedArray]){
                    hashmap[sortedArray]++
                    count++
                } 
                else {
                    hashmap[sortedArray] = 1
                }
                // console.log(hashmap)
            }
        }
    }
    console.log(count)
    return count
}

solution(10,12)



                // console.log(sortedArray)
                // let x = sortedArray[0]
                // let y = sortedArray[1]
                // console.log(x,y)

    // let count = 0;
    // let s = 0;
    // if(a != b &&   b  [a - s(a), a + s(a)]   )
    // (a < b && a > l && b > l && a < r && b < r){
    // }
    // console.log(i.toString().split(''))

        // console.log(sum, i)
        // if(a > (i - sum) && a < (i + sum)){
        //     console.log("true")
        // }

                        // else {
                //     (hashmap[x] == hashmap[y])
                // }