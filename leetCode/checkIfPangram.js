

// CORRECT faster than hashmap beats 82% time 92% memory
var checkIfPangram = function(sentence) {
    let array = new Array(26).fill(0)
    for(let i = 0; i < sentence.length; i++){
        let x = sentence.charCodeAt(i) - 97
        array[x]++
    }
    if(array.includes(0)){
        return false 
    } else {
        return true
    }
};


// // CAN also use set
// let newSet = [...new Set(sentence)];
//     if (newSet.length<26) {
//         return false;
//     } else {
//         return true;
//     }


// CORRECT works 100% test cases
// var checkIfPangram = function(sentence) {
//     let h = {}
//     for(let i = 0; i < sentence.length; i++){
//         let x = sentence[i]
//         if(h[x]){
//             h[x]++
//         } else {
//             h[x]=1
//         }
//     }
//     if(Object.keys(h).length == 26){
//         return true
//     } else {
//         return false 
//     }
// };

checkIfPangram("thequickbrownfoxjumpsoverthelazydog")



// var checkIfPangram = function(sentence) {
//     let h = {}
//     for(let i = 0; i < sentence.length; i++){
//         let x = sentence[i]
//         if(h[x]){
//             h[x]++
//         } else {
//             h[x]=1
//         }
//     }
//     // console.log(h)
//     let letters = Object.keys(h)
//     // console.log(letters)
//     // console.log(letters.length)
//     if(letters.length == 26){
//         console.log("true")
//         return true
//     } else {
//         console.log("false")
//         return false 
//     }
// };




    // let values = Object.values(h)
    // for(let i = 0; i < values.length; i++){
    //     if(values[i] < 1){
    //         console.log(false)
    //         return false
    //     }
    // }