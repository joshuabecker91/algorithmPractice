

// CORRECT works 100% test cases 
var countVowelStrings = function(n) {
    let x = 1
    let y = 1

    let i = 4
    while(i > 0){
        x *= n+i
        i--
    }

    let j = 4
    while(j > 0){
        y *= j
        j--
    }

    // console.log(x,y,i,j)
    console.log(x/y) // 24 because 4*3*2*1 = 24
    return x/y
};

// countVowelStrings(1)
countVowelStrings(33)



// let vowels = ["a","e","i","o","u"]



// return ((n+1)*(n+2)*(n+3)*(n+4)) / (4*3*2*1)
// ["a","e","i","o","u"]



// refactored
// var countVowelStrings = function(n) {
//     return ((n+1)*(n+2)*(n+3)*(n+4)) / (4*3*2*1) 
// };


