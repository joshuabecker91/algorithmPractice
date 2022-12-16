

var minTimeToType = function(word) {
    let count = 1;
    if(word.length == 1){
        return count
    }
    for(let i = 0; i < word.length-1; i++){
        let currentLetter = word[i].charCodeAt() - 97
        let nextLetter = word[i+1].charCodeAt() - 97
        let difference = Math.abs(nextLetter - currentLetter)
        if(i == 0){
            if(currentLetter > 13){
                count += (26 - currentLetter)
            } else {
                count += currentLetter
            }
        }
        // have to find the min of distance going both ways and use the min
        if(difference > 13){
            difference = (26 - difference)
        }
        // console.log(word[i], currentLetter, word[i+1], nextLetter, difference)
        count += difference
        count++
        // console.log("count", count)
    }
    // console.log("count", count)
    return count 
};

// minTimeToType("abc")
minTimeToType("bza")