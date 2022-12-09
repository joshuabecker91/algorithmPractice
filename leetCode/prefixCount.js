

var prefixCount = function(words, pref) {
    let count = 0;
    for(let i = 0; i < words.length; i++){
        let x = words[i].slice(0,pref.length)
        // console.log(x)
        if(x == pref){
            count++
        }
    }
    // console.log(count)
    return count 
};

prefixCount(["pay","attention","practice","attend"], "at")