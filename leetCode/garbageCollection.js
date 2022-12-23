

// CORRECT works 100% test cases beats 64% time 54% memory, notes cleaned up
var garbageCollection = function(garbage, travel) {
    let minutes = 0
    let travelP = 0
    let travelG = 0
    let travelM = 0
    for(let i = 0; i < garbage.length; i++){
        if(garbage[i].includes("P")){
            minutes += (garbage[i].match(/P/g) || []).length
            minutes += travelP 
            travelP = 0
        }
        if(garbage[i].includes("G")){
            minutes += (garbage[i].match(/G/g) || []).length
            minutes += travelG
            travelG = 0
        }
        if(garbage[i].includes("M")){
            minutes += (garbage[i].match(/M/g) || []).length
            minutes += travelM
            travelM = 0
        }
        travelP += travel[i]
        travelG += travel[i]
        travelM += travel[i]
    }
    return minutes
};

garbageCollection(["G","P","GP","GG"], [2,4,3])





// // CORRECT works 100% test cases beats 64% time 54% memory
// var garbageCollection = function(garbage, travel) {
//     let minutes = 0
//     let travelP = 0
//     let travelG = 0
//     let travelM = 0
//     for(let i = 0; i < garbage.length; i++){ // loop through entire garbage array
//         if(garbage[i].includes("P")){
//             // console.log((garbage[i].match(/P/g) || []).length, "P")
//             minutes += (garbage[i].match(/P/g) || []).length
//             minutes += travelP 
//             travelP = 0
//         }
//         if(garbage[i].includes("G")){
//             // console.log((garbage[i].match(/G/g) || []).length, "G")
//             minutes += (garbage[i].match(/G/g) || []).length
//             minutes += travelG
//             travelG = 0
//         }
//         if(garbage[i].includes("M")){
//             // console.log((garbage[i].match(/M/g) || []).length, "M")
//             minutes += (garbage[i].match(/M/g) || []).length
//             minutes += travelM
//             travelM = 0
//         }
//         travelP += travel[i]
//         travelG += travel[i]
//         travelM += travel[i]
//     }
//     // console.log("total minutes: ", minutes)
//     return minutes
// };





// let remainder = garbage.slice(i+1,garbage.length+1).join('')
// if(remainder.includes("P") == true){
//     minutes += travel[i]
// }
// if(remainder.includes("G") == true){
//     minutes += travel[i]
// }
// if(remainder.includes("M") == true){
//     minutes += travel[i]
// }





// var garbageCollection = function(garbage, travel) {
//     let trucks = ["P", "G", "M"]
//     let minutes = 0;
//     for(let i = 0; i < trucks.length; i++){ // loop through the trucks 
//         let x = trucks[i]
//         for(let j = 0; j < garbage.length; j++){ // loop through entire garbage array
//             if(x == "P"){
//                 console.log((garbage[j].match(/P/g) || []).length, "P")
//                 minutes += (garbage[j].match(/P/g) || []).length
//             }
//             else if (x == "G"){
//                 console.log((garbage[j].match(/G/g) || []).length, "G")
//                 minutes += (garbage[j].match(/G/g) || []).length
//             }
//             else {
//                 console.log((garbage[j].match(/M/g) || []).length, "M")
//                 minutes += (garbage[j].match(/M/g) || []).length
//             }
//             if(garbage.slice(j+1,garbage.length+1).join('').includes(x) == true){
//                 console.log("travel", travel[j], "j", j)
//                 minutes += travel[j]
//             } else {
//                 break
//             }
//         }
//     }
//     console.log("total minutes: ", minutes)
//     return minutes
// };

// garbageCollection(["G","P","GP","GG"], [2,4,3])




// var garbageCollection = function(garbage, travel) {
//     let trucks = ["P", "G", "M"]
//     let minutes = 0;
//     for(let i = 0; i < trucks.length; i++){ // loop through the trucks 
//         let x = trucks[i]
//         for(let j = 0; j < garbage.length; j++){ // loop through entire garbage array
//             if(x == "P"){
//                 minutes += (garbage[j].match(/P/g) || []).length
//             }
//             else if (x == "G"){
//                 minutes += (garbage[j].match(/G/g) || []).length
//             }
//             else {
//                 minutes += (garbage[j].match(/M/g) || []).length
//             }
//             if(garbage.slice(j+1,garbage.length+1).join('').includes(x) == true){
//                 minutes += travel[j]
//             } else {
//                 break
//             }
//         }
//     }
//     return minutes
// };





// var garbageCollection = function(garbage, travel) {
//     let minutes = 0;
//     for(let i = 0; i < garbage.length; i++){ // loop through entire garbage array
//         if(garbage[i].includes("P")){
//             minutes += (garbage[i].match(/P/g) || []).length
//         }
//         if(garbage[i].includes("G")){
//             minutes += (garbage[i].match(/G/g) || []).length
//         }
//         if(garbage[i].includes("M")){
//             minutes += (garbage[i].match(/M/g) || []).length
//         }
//         let remainder = garbage.slice(i+1,garbage.length+1).join('')
//         if(remainder.includes("P") == true){
//             minutes += travel[i]
//         }
//         if(remainder.includes("G") == true){
//             minutes += travel[i]
//         }
//         if(remainder.includes("M") == true){
//             minutes += travel[i]
//         }
//     }
//     return minutes
// };