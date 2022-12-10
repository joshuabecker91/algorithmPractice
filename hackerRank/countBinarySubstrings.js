

function getSubstringCount(s) {
    let output = []
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            let newString = s.slice(i,j+1)
            if(newString.length % 2 == 0){
                output.push(newString)
            }
        }
    }
    // console.log(output)
    let newArray = []
    for(let i = 0; i < output.length; i++){
        let a = output[i]
        let half = a.length/2
        let x = a.slice(0,half)
        let y = a.slice(half,a.length+1)
        // console.log(x,y)
        if(x.includes(1) && y.includes(1) || x.includes(0) && y.includes(0)){
        } else {
            newArray.push(a)
        }
    }
    console.log(newArray)
    return newArray.length
}


// I think this works for 100% test cases it is just timing out. 
// Would need to be refactored to more efficient data structure
// for optimal time and space effeciency 


// let numOfZeros = a.replace(/[^0]/g, "")
// let numOfOnes = a.replace(/[^1]/g, "")
// if(numOfZeros.length == numOfOnes.length){
// }


// function getSubstringCount(s) {
//     let output = []
//     for(let i = 0; i < s.length; i++){
//         for(let j = i; j < s.length; j++){
//             let newString = s.slice(i,j+1)
//             let numOfZeros = newString.replace(/[^0]/g, "")
//             let numOfOnes = newString.replace(/[^1]/g, "")
//             if(numOfZeros.length == numOfOnes.length){
//                 output.push(newString)
//             }
//         }
//     }
//     let count = 0

//     for(let i = 0; i < output.length; i++){
//         let a = output[i]
//         let half = a.length/2
//         let x = a.slice(0,half)
//         let y = a.slice(half,a.length+1)
//         if(x.includes(1) && y.includes(1) || x.includes(0) && y.includes(0)){
//         } else {
//             count++
//         }
//     }
//     return count
// }




// function getSubstringCount(s) {
//     let output = []
//     for(let i = 0; i < s.length; i++){
//         for(let j = i; j < s.length; j++){
//             let newString = s.slice(i,j+1)
//             let numOfZeros = newString.replace(/[^0]/g, "")
//             let numOfOnes = newString.replace(/[^1]/g, "")
//             if(numOfZeros.length == numOfOnes.length){
//                 output.push(newString)
//             }
//         }
//     }
//     let newArray = []

//     for(let i = 0; i < output.length; i++){
//         let a = output[i]
//         let half = a.length/2
//         let x = a.slice(0,half)
//         let y = a.slice(half,a.length+1)
//         if(x.includes(1) && y.includes(1) || x.includes(0) && y.includes(0)){
//         } else {
//             newArray.push(a)
//         }
//     }
//     return newArray.length
// }




// function getSubstringCount(s) {
//     let output = []
//     for(let i = 0; i < s.length; i++){
//         for(let j = i; j < s.length; j++){
//             let newString = s.slice(i,j+1)
//             let numOfZeros = newString.replace(/[^0]/g, "")
//             let numOfOnes = newString.replace(/[^1]/g, "")
//             if(numOfZeros.length == numOfOnes.length){
//                 output.push(newString)
//             }
//         }
//     }
//     let newArray = []

//     for(let i = 0; i < output.length; i++){
//         let a = output[i]
//         let half = a.length/2
//         let x = a.slice(0,half)
//         let y = a.slice(half,a.length+1)
//         if(x.includes(1) && y.includes(1) || x.includes(0) && y.includes(0)){
//         } else {
//             newArray.push(a)
//         }
//     }
//     return newArray.length
// }



// function getSubstringCount(s) {
//     let output = []
//     for(let i = 0; i < s.length; i++){
//         for(let j = i; j < s.length; j++){
//             let newString = s.slice(i,j+1)
//             // console.log(newString)
//             let numOfZeros = newString.replace(/[^0]/g, "")
//             let numOfOnes = newString.replace(/[^1]/g, "")
//             if(numOfZeros.length == numOfOnes.length){
//                 output.push(newString)
//                 // console.log("yes equal 0s and 1s")
//             }
//         }
//     }
//     // console.log(output)
//     // console.log(output.length)
//     let newArray = []

//     for(let i = 0; i < output.length; i++){
//         let a = output[i]
//         let half = a.length/2
//         let x = a.slice(0,half)
//         let y = a.slice(half,a.length+1)
//         console.log(a, "x", x,"y", y)
//         if(x.includes(1) && y.includes(1) || x.includes(0) && y.includes(0)){
//         } else {
//             newArray.push(a)
//         }
//     }
//     // console.log(newArray)
//     // console.log(newArray.length)
//     return newArray.length
// }

getSubstringCount("001100011")
// getSubstringCount("000110")