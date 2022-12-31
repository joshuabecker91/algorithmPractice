

// CORRECT works on 100% test cases beats 70% time 56% memory
var partitionLabels = function(s) {
    let h = {}
    for(let i = 0; i < s.length; i++){
        let x = s[i]
        if(h[x]){
            h[x]++
        } else{
            h[x] = 1
        }
    }
    let sF = s.split('')
    let sR = s.split('').reverse()

    let uniqueChars = Object.keys(h)
    let array = []
    for(let i = 0; i < uniqueChars.length; i++){
        let letter = uniqueChars[i]
        let firstIndex = sF.indexOf(letter)
        let lastIndex = sR.length - sR.indexOf(letter)
        array.push([letter, firstIndex, lastIndex])
    }
    let sortedArray = array.sort((a,b) => a[1]-b[1])
    let sliceIndexes = []
    let temp = sortedArray[0][2]
    let max = sortedArray[0][2]
    for(let i = 0; i < sortedArray.length; i++){
        if(sortedArray[i][1] == max){
            sliceIndexes.push(sortedArray[i][1])
            temp = sortedArray[i][2]
            max = sortedArray[i][2]
        }
        if(sortedArray[i][2] > max){
            max = sortedArray[i][2]
        }
    }
    if(sliceIndexes.includes(s.length) == false){
        sliceIndexes.push(s.length)
    }
    let sum = sliceIndexes[0]
    for(let i = 1; i < sliceIndexes.length; i++){
        sliceIndexes[i] = sliceIndexes[i] - sum
        sum += sliceIndexes[i]
    }
    console.log(sliceIndexes)
    return sliceIndexes
};

partitionLabels("ababcbacadefegdehijhklij")




// var partitionLabels = function(s) {
//     let h = {} // could do s.split('') and then new set instead
//     for(let i = 0; i < s.length; i++){
//         let x = s[i]
//         if(h[x]){
//             h[x]++
//         } else{
//             h[x] = 1
//         }
//     }

//     let sF = s.split('')
//     console.log(sF)
//     let sR = s.split('').reverse()
//     console.log(sR)

//     let uniqueChars = Object.keys(h)
//     console.log(uniqueChars)
//     let array = []

//     for(let i = 0; i < uniqueChars.length; i++){
//         let letter = uniqueChars[i]
//         let firstIndex = sF.indexOf(letter)
//         let lastIndex = sR.length - sR.indexOf(letter)
//         array.push([letter, firstIndex, lastIndex])
//         console.log(letter, firstIndex, lastIndex)
//     }
//     let sortedArray = array.sort((a,b) => a[1]-b[1])
//     console.log(sortedArray)
//     let sliceIndexes = []
//     let temp = sortedArray[0][2]
//     let max = sortedArray[0][2]
//     for(let i = 0; i < sortedArray.length; i++){
//         if(sortedArray[i][1] == max){
//             sliceIndexes.push(sortedArray[i][1])
//             temp = sortedArray[i][2]
//             max = sortedArray[i][2]
//         }
//         if(sortedArray[i][2] > max){
//             max = sortedArray[i][2]
//         }
//     }
//     if(sliceIndexes.includes(s.length) == false){
//         sliceIndexes.push(s.length)
//     }
//     let sum = sliceIndexes[0]
//     for(let i = 1; i < sliceIndexes.length; i++){
//         sliceIndexes[i] = sliceIndexes[i] - sum
//         sum += sliceIndexes[i]
//     }
//     console.log(sliceIndexes)
//     return sliceIndexes
// };

// partitionLabels("ababcbacadefegdehijhklij")