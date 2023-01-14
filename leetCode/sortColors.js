

// CORRECT works 100% test cases beats 67% time 72% memory
// You must solve this problem without using the library's sort function.
var sortColors = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] >= nums[j]){
                let temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
            }
        }
    }
    return nums
};

sortColors([2,0,2,1,1,0])