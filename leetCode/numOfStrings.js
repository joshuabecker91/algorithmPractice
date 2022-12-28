

var numOfStrings = function(patterns, word) {
    let count = 0
    for(let i = 0; i < patterns.length; i++){
        if(word.includes(patterns[i])){
            count++
        }
    }
    console.log(count)
    return count
};


numOfStrings(["a","abc","bc","d"], "abc")