// Given an array of bird sightings where every element represents a bird type id, 

// 1. Determine the id of the most frequently sighted type. 

// 2. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Type 1: 2 sightings
// Type 2: 2 sightings
// Type 3: 1 sighting

// arr = [1,1,2,2,3]

function migratoryBirds(arr) {
    // Write your code here

    let birds = [0,0,0,0,0]

    for(let i=0;i<arr.length;i++){
        birds[arr[i]-1] = birds[arr[i]-1] + 1;
    }
    console.log(birds)

    // find the largest bird count in array
    let index = 0;
    let max = 0;
    for(let i=0; i<birds.length; i++){
        // if(birds[i] == max){
        //     max2 = birds[i]
        // }
        if(birds[i] > max){
            index = i;
            max = birds[i];
        }
    }
    console.log(max, `bird type ${index+1}`)
    console.log(`${index+1}`)
    return index + 1;
}

// migratoryBirds([1,1,2,2,3,5])
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])


// if(arr[i] = 1){
//     birds[0] = birds[0] + 1;
// }

// if(arr[i] = 2){
// birds[1] = birds[1] + 1;
// }

// if(arr[i] = 3){
//     birds[2] = birds[2] + 1;
// }

// if(arr[i] = 4){
//     birds[3] = birds[3] + 1;
// }