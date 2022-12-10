

// truckSize, which is the maximum number of boxes that can be put on the truck. 
// boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]

// CORRECT 100% Test cases beats 83% time and 69% memory.
var maximumUnits = function(boxTypes, truckSize) {
    let boxTypesSorted = boxTypes.sort((a,b) => b[1] - a[1]);
    let numOfBoxes = 0;
    let numOfUnits = 0;
    for(let i = 0; i < boxTypesSorted.length; i++){
        let boxCount = boxTypesSorted[i][0]
        let boxUnits = boxTypesSorted[i][1]
        let boxesRemain = boxCount
        while(boxesRemain > 0 && (numOfBoxes < truckSize)){
            boxesRemain--
            numOfBoxes ++
            numOfUnits += boxUnits
        }
    }
    return numOfUnits
};

// maximumUnits([[1,3],[2,2],[3,1]], 4)
maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)




// var maximumUnits = function(boxTypes, truckSize) {
//     let boxTypesSorted = boxTypes.sort((a,b) => b[1] - a[1]);
//     // console.log(boxTypesSorted)
//     let numOfBoxes = 0;
//     let numOfUnits = 0;
//     for(let i = 0; i < boxTypesSorted.length; i++){
//         let boxCount = boxTypesSorted[i][0]
//         let boxUnits = boxTypesSorted[i][1]
//         let boxesRemain = boxCount
//         // while there are still boxes remaining && there is still room on the truck 
//         // decrement one box at a time, increment units, and check if there is still room in the truck
//         while(boxesRemain > 0 && (numOfBoxes < truckSize)){ 
//             boxesRemain--
//             numOfBoxes ++
//             numOfUnits += boxUnits
//             // console.log(numOfBoxes, numOfUnits)
//         }
//     }
//     console.log(numOfUnits)
//     return numOfUnits
// };



// without nested loop
// var maximumUnits = function(boxTypes, truckSize) {
//     // Sort box types values by unit size (boxTypes[1])
//     // Loop through the types and add items until box number is full

//     boxTypes.sort((a,b) => b[1] - a[1]);
//     console.log("BOXTYPES:", boxTypes);
//     let count = 0;
//     let items = 0;

//     // Early escape
//     if (boxTypes.length === 0) {
//         return 0;
//     }

//     // Loop to find the items
//     for (let i=0; i< boxTypes.length; i++) {
//         if (boxTypes[i][0] < (truckSize - count)) {
//             items += boxTypes[i][0] * boxTypes[i][1]
//             count += boxTypes[i][0]
//             console.log("BOXES:", boxTypes[i][0], "ITEMS PER BOX:", boxTypes[i][1], "TOTAL ITEMS:", items)
//         } else {
//             let addBoxes = truckSize - count;
//             items += addBoxes * boxTypes[i][1]
//             count += addBoxes
//             console.log("BOXES (Partial):", addBoxes, "ITEMS PER BOX:", boxTypes[i][1], "TOTAL ITEMS:", items)
//             break;
//         }
//     }
//     return items;
// };