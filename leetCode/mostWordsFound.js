

// CORRECT works 100% test cases 80% time 40% memory
var mostWordsFound = function(sentences) {
    let max = -Infinity
    for(let i = 0; i < sentences.length; i++){
        let mySentence = sentences[i].split(' ')
        if(mySentence.length > max){
            max = mySentence.length
        }
        // console.log(mySentence)
    }
    return max
};


mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])