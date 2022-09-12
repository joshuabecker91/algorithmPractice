// A video player plays a game in which the character competes in a hurdle race. 
// Hurdles are of varying heights, and the characters have a maximum height they can jump. 
// There is a magic potion they can take that will increase their maximum jump height by unit for each dose. 
// How many doses of the potion must the character take to be able to jump all of the hurdles. 
// If the character can already clear all of the hurdles, return 

// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle

function hurdleRace(k, height) {
    let max = 0;
    for(let i = 0; i < height.length; i++){
        if(height[i] > max){
            max = height[i]
        }
    }
    if(k >= max){
        return 0
    }
    let steroids = max - k
    console.log(steroids)
    return steroids
}

hurdleRace([5,4], [1,6,3,5,2])