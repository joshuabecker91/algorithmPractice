function getMissingRanges(ranges) {
    let hashmap = {}
    for(let i = 0; i < ranges.length; i++){
        let a = ranges[i][0];
        let b = ranges[i][1];
        for(let x = a; x < b; x++){
            // console.log(a, b)
            if(hashmap[x]){
                hashmap[x]++
                // console.log(hashmap)
            }
            else{
                hashmap[x] = 1
                // console.log(hashmap)
            }
        }
    }
    // console.log(hashmap)
    // let q = 0
    // let newArray = []
    // for(const key of Object.hashmap(object)){
    //     if(q != key)
    //     newArray.push(q)
    //     q++
    // }
    let newArray = []
    let max = Object.keys(hashmap).pop()
    let min = Object.keys(hashmap).shift()
    // console.log(max)
    for(let q = min; q <= max; q++){
        // console.log(q)
        // if(Object.keys(hashmap)[q]){
        if(q in hashmap){
        }
        else{
            newArray.push(q)
        }
    }
    // console.log(newArray, "newArray")
    
    let result = []
    let k = []
    for(let x = 0; x < newArray.length; x++){
        if(newArray[x+1] != (newArray[x]+1)){
            let z = newArray[x]
            let s = z+1
            k.push(z)
            k.push(s)
            result.push(k)
            k = []
        }
        else{
            let z = newArray[x]
            if(newArray[x-1] != (newArray[x]-1)){
                k.push(z)
            }
        }
    }
    
    
    console.log(result)
    return result
}