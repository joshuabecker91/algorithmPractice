// The Utopian Tree goes through 2 cycles of growth every year.
// Each spring, it doubles in height. Each summer, its height increases by 1 meter.
// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. 
// How tall will the tree be after  growth cycles?
// For example, if the number of growth cycles is , the calculations are as follows:

// int n: the number of growth cycles to simulate

function utopianTree(n) {
    let height = 1;
    let cycles = n;
    for(let i = 1; i <= cycles; i++){
        if(i % 2 != 0 || i == 1){
            height = height * 2;
        }
        else { 
            height = height + 1;
        }
    }
    console.log(height)
    return height
}

utopianTree(4)

// int: the height of the tree after the given number of cycles


// function utopianTree(n) {
//     let height = 1;
//     let cycles = n;
//     // let cycleCount = 0;

//     // each itteration is one growth season 
//     for(let i = 1; i <= cycles; i++){
//         // spring
//         if(i % 2 != 0 || i == 1){ // if odd spring
//             height = height * 2;
//             // cycleCount ++
//             // console.log(cycleCount, height)
//         }
//         // summer
//         else { // if even summer
//             height = height + 1;
//             // cycleCount ++
//             // console.log(cycleCount, height)
//         }
//     }
//     console.log(height)
//     return height
// }

// utopianTree(4)