

// CORRECT 100% Test Cases
var findTheDifference = function(s, t) {
    let hashmap1 = {}
    for(let i = 0; i < s.length; i++){
        let x = s[i]
        if(hashmap1[x]){
            hashmap1[x]++
        } else {
            hashmap1[x] = 1
        }
    }
    // console.log(hashmap1)

    let hashmap2 = {}
    for(let i = 0; i < t.length; i++){
        let x = t[i]
        if(hashmap2[x]){
            hashmap2[x]++
        } else {
            hashmap2[x] = 1
        }
    }
    // console.log(hashmap2)

    for(let key in hashmap2){
        if(hashmap1[key] != hashmap2[key]){
            // console.log(key)
            return key
        }
    }

};

findTheDifference("abcd", "abcde")