

// CORRECT 100% test cases. beats 90% runtime
var restoreString = function(s, indices) {
    let output = new Array(indices.length)
    for(let i = 0; i < indices.length; i++){
        let x = indices[i]
        output[x] = s[i]
    }
    // console.log(output.join(''))
    return output.join('')
};

restoreString("codeleet", [4,5,6,7,0,2,1,3])