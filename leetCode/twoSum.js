
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    let solution = [];
    for(let i = 0; i < nums.length; i++){
        for(let x = i+1; x < nums.length; x++){ // x has to start at i + 1 so that it is always offset by one
            if(nums[i] + nums[x] == target){
                solution.push(i);
                solution.push(x);
                console.log(solution)
                return solution;
            }
        }
    }
    // console.log(solution);
    // return solution;
}

// twoSum([3,2,4], 6);
twoSum([2,5,5,11], 10);