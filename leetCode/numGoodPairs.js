

// CORRECT works 100% beats 93% time 47% memory
var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j] && i < j){
                count++
            }
        }
    }
    return count
};

numIdenticalPairs([1,2,3,1,1,3])