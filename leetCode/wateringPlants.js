

// CORRECT 100% Test cases
var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let waterRemain = capacity;
    for(let i = 0; i < plants.length; i++){
        if(waterRemain >= plants[i]){
            waterRemain -= plants[i]
            steps++
        } else {
            steps += i*2
            waterRemain = capacity
            i--
        }
    }
    return steps
};

wateringPlants([2,2,3,3], 5)


// var wateringPlants = function(plants, capacity) {
//     let steps = 0;
//     let waterRemain = capacity;
//     // if we do not have enough water for the plant in front, return to negative 
//     // one count steps then come back and reset capavity
//     for(let i = 0; i < plants.length; i++){
//         if(waterRemain >= plants[i]){
//             waterRemain -= plants[i]
//             steps++
//             // console.log(plants, waterRemain)
//         } else {
//             steps += i*2
//             waterRemain = capacity
//             // console.log(plants, waterRemain)
//             i--
//         }
//     }
//     console.log(steps)
//     return steps
// };

// wateringPlants([2,2,3,3], 5)