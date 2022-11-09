

function solution(a, b) {
    let hashmapA = {}
    let hashmapB = {}
    for(let i = 0; i < a.length; i++){
        let letter = a[i]
        if(hashmapA[letter]){
            hashmapA[letter]++
        }
        else {
            hashmapA[letter] = 1
        }
    }
    console.log(hashmapA)
    for(let i = 0; i < b.length; i++){
        let letter = b[i]
        if(hashmapB[letter]){
            hashmapB[letter]++
        }
        else {
            hashmapB[letter] = 1
        }
    }
    console.log(hashmapB)

    let total = Infinity;
    for(let key in hashmapA){
        // let numOfWords;
        console.log(!hashmapB[key])
        if(!hashmapB[key]){
            console.log()
            total = 0;
            return total;
        }
        let amount = Math.floor(hashmapB[key] / hashmapA[key])
        if(amount < total){
            // numOfWords = amount
            total = amount
        }
    }
    if(total == Infinity){
        total = 0;
    }
    console.log(total)
    return total
}


// solution("abc", "abccba")
solution("za", "bzc")




// compare how many value of hashmapA == hashmapB and then divide Math.floor
// if doesnt exist
// console.log(hashmapA[key])
// console.log(hashmapB[key])


// function solution(a, b) {
//     let count = 0;
//     while (b.length > 0) {
//         for (letter in a) {
//             if (b.includes(a[letter]) )
//                 b = b.replace(a[letter], '');
//             else    
//                 return count;
//         }
//         count++;
//     }
//     return count;
// }

// function stringContruction(a, b){
//     let min = Infinity
//     for(let i = 0; i < a.length; i++){
//         let count = 0
//         for(let j = 0; j < b.length; j++){
//             // console.log(a[i], b[j])
//             if(a[i] == b[j]){
//                 count++
//             }
//         }
//         // console.log(count, 'count')
//         min = Math.min(min, count)
//         // console.log(min, 'min')
//     }
//     return min
// }