

// CORRECT works 100% test cases beats 70% time 90% memory
var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[j] - nums[i] == diff && nums[k] - nums[j] == diff){
                    count++
                }
            }
        }
    }
    // console.log(count)
    return count
};

arithmeticTriplets([0,1,4,6,7,10], 3)