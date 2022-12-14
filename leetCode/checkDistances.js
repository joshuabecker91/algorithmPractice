

// CORRECT 100% Test Cases beats 85% time
var checkDistances = function(s, distance) {
    let h = {}
    for(let i = 0; i < s.length; i++){
        if(h[s[i]]){
            h[s[i]] = i - h[s[i]]
        } else{
            h[s[i]] = i + 1
        }
    }
    // console.log(h)
    
    for(let key in h){
        if(h[key] !=  distance[(key.charCodeAt() - 97)]){
            // console.log("false")
            return false
        }
    }
    // console.log("true")
    return true
    
};

checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
// checkDistances("zz", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])




// Refactored
var checkDistances = function(s, distance) {
    let h = {}
    for(let i = 0; i < s.length; i++){
        h[s[i]] ? h[s[i]] = i - h[s[i]] : h[s[i]] = i + 1
    }
    for(let key in h){
        if(h[key] !=  distance[(key.charCodeAt() - 97)]) return false
    }
    return true
};

















// let newArray = Array(26).fill(0)
// newArray[s.charCodeAt(i) -97] = h[s[i]]


        // if(newArray[index] == 0){
        //     newArray[index] = i + 1
        // } else {
        //     newArray[index] = i - newArray[index]
        // }


// if(newArray.join('') == distance.join('')){
    //     console.log("true")
    //     return true
    // } else {
//     console.log("false")
//     return false
// }


// let x = s.length/2
// console.log(newArray.slice(0,x), distance.slice(0,x))
// console.log(newArray.slice(0,x).join(''), distance.slice(0,x).join(''))
// newArray.slice(0,x).includes(0)
// if(newArray.slice(0,x).join('') == distance.slice(0,x).join('')){