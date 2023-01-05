

// CORRECT works 100% test cases
var numSplits = function(s) {
    let count = 0
    let left = []
    let right = s.split('')
    let leftH = {}
    let rightH = {}
    for(let i = 0; i < s.length; i++){
        let x = s[i]
        if(rightH[x]){
            rightH[x]++
        } else {
            rightH[x] = 1
        }
    }
    for(let i = 0; i < s.length; i++){
        let x = right.shift()
        left.push(x)
        if(leftH[x]){
            leftH[x]++
        } else {
            leftH[x] = 1
        }
        if(rightH[x] > 1){
            rightH[x]--
        } else {
            delete rightH[x]
        }
        if(Object.keys(leftH).length == Object.keys(rightH).length){
            count++
        }
    }
    return count
};



// Filter possibly faster than new set but still not fast enough
// var numSplits = function(s) {
//     let count = 0
//     let left = []
//     let right = s.split('')
//     for(let i = 1; i < s.length; i++){
//         left.push(right.shift())
//         var uniqueLeft = left.filter((v, i, a) => a.indexOf(v) === i);
//         var uniqueRight = right.filter((v, i, a) => a.indexOf(v) === i);
//         if(uniqueLeft.length == uniqueRight.length){
//             count++
//         }
//     }
//     return count
// };



// Not fast enough... using new set too demanding on time / space
// var numSplits = function(s) {
//     let count = 0
//     let left = []
//     let right = s.split('')
//     for(let i = 1; i < s.length; i++){
//         left.push(right.shift())
//         let leftSet = [ ...new Set(left)]
//         let rightSet = [ ...new Set(right)]
//         if(leftSet.length == rightSet.length){
//             count++
//         }
//     }
//     return count
// };



// var numSplits = function(s) {
//     let count = 0
//     for(let i = 0; i < s.length-1; i++){
//         let left = s.slice(0,i+1)
//         let right = s.slice(i+1,s.length)
//         console.log(left, right)
//         let leftSet = [ ...new Set(left)]
//         let rightSet = [ ...new Set(right)]
//         console.log(leftSet, rightSet)
//         if(leftSet.length == rightSet.length){
//             count++
//         }
//     }
//     console.log(count)
//     return count
// };

numSplits("aacaba")
