

// CORRECT works 100% test cases beats 87% time and 60% memory
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let h = {}
    for(let i = 0; i < allowed.length; i++){
        let x = allowed[i]
        if(!h[x]){
            h[x] = 1
        }
    }
    // console.log(h)

    for(let i = 0; i < words.length; i++){
        let y = words[i]
        let allowedBoolean = true
        for(let j = 0; j < words[i].length; j++){
            let letter = y[j]
            if(!h[letter]){
                allowedBoolean = false
                break
            }
        }
        if(allowedBoolean == true){
            count++
        }
    }
    // console.log(count)
    return count
};

countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])