

// CORRECT words 100% test cases beats 86% memory and 67% time
var similarPairs = function(words) {
    let newWordsUnique = []
    for(let i = 0; i < words.length; i++){
        let newWord = [...new Set(words[i])]
        let newWordSorted = newWord.sort()
        // console.log(newWordSorted.join(''))
        newWordsUnique.push(newWordSorted.join(''))
    }
    // console.log(newWordsUnique)
    let count = 0
    for(let i = 0; i < newWordsUnique.length; i++){
        for(let j = i+1; j < newWordsUnique.length; j++){
            if(newWordsUnique[i] == newWordsUnique[j]){
                count++
            }
        }
    }
    console.log(count)
    return count
};

similarPairs(["aba","aabb","abcd","bac","aabc"])
