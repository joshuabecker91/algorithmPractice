

var findAndReplacePattern = function(words, pattern) {
    let output = []
    for(let i = 0; i < words.length; i++){
        let h = {} 
        let string = words[i]
        let matchIsTrue = true
        let isUsedLetter = []
        for(let j = 0; j < pattern.length; j++){
            if(h[pattern[j]]){  
                if(h[pattern[j]] != string[j]){
                    matchIsTrue = false
                }
            }else{
                if(isUsedLetter.includes(string[j])){
                    matchIsTrue = false
                }else{
                    h[pattern[j]] = string[j]
                    isUsedLetter.push(string[j])
                }
            }
        }
        if(matchIsTrue == true){
            output.push(string)
        }
    }
    return output
};


findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb")