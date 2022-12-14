

var uniqueMorseRepresentations = function(words) {
    let alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let output = []
    
    for(let i = 0; i < words.length; i++){
        let newString = ""
        for(let j = 0; j < words[i].length; j++){
            let index = (words[i][j].charCodeAt() - 97)
            newString += alphabet[index]
        }
        console.log(newString)
        if(!output.includes(newString)){
            output.push(newString)
        }
    }
    // console.log(output.length)
    return output.length
};

uniqueMorseRepresentations(["gin","zen","gig","msg"])