

// CORRECT 100% Test cases 
var licenseKeyFormatting = function(s, k) {
    let sArray = s.split('-').join('').split('')
    for(let i = 0; i < sArray.length; i++){
        if(isNaN(sArray[i])){
            sArray[i] = sArray[i].toUpperCase()
        }
    }
    // console.log(sArray)
    let licenseKey = []
    let count = 0
    for(let i = sArray.length-1; i >= 0; i--){
        licenseKey.unshift(sArray[i])
        count++
        if(count >= k && i != 0){
            licenseKey.unshift("-")
            count = 0
        }
    }
    // console.log(licenseKey.join(''))
    return licenseKey.join('')
};

licenseKeyFormatting("5F3Z-2e-9-w", 4)



// Tried refactoring but still slow beats 5% and 15%
var licenseKeyFormatting = function(s, k) {
    let sArray = s.split('')
    let licenseKey = []
    let count = 0
    while(sArray.length > 0){
        let char = sArray.pop()
        if(char != '-'){
            if(isNaN(char)){
                char = char.toUpperCase()
            }
            licenseKey.unshift(char)
            count++
            if((count >= k) && sArray.length > 0){
                licenseKey.unshift("-")
                count = 0
            }
        }
    }
    if(licenseKey[0] == '-'){
        licenseKey = licenseKey.slice(1)
    }
    return licenseKey.join('')
}

// licenseKeyFormatting("5F3Z-2e-9-w", 4)
licenseKeyFormatting("--a-a-a-a--", 2)