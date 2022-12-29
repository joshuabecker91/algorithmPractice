

// CORRECT works 100% test cases beats 73% time and 14% memory
var removeOccurrences = function(s, part) {
    let del = part.length
    while(s.includes(part)){
        let i = s.indexOf(part)
        let x = s.split('')
        x.splice(i, del)
        // console.log(x)
        s = x.join('')
    }
    // console.log(s)
    return s
};

removeOccurrences("daabcbaabcbc", "abc")



// can also use substring instead of splitting and joining

// console.log(s.indexOf(part))
// let i = s.indexOf(part)
// let sSplit = (s.split(''))
// sSplit.splice(i, dLength)
// console.log(sSplit)