

var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++){
        let reversedWord = words[i].split('').reverse().join('')
        if(reversedWord == words[i]){
            return words[i]
        }
    }
    return ""
};

firstPalindrome(["abc","car","ada","racecar","cool"])
