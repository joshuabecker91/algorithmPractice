

// CORRECT works 100% test cases beats 43% time 28% memory
var countKDifference = function(nums, k) {
    let count = 0
    nums.sort()
    console.log(nums)
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(Math.abs(nums[i]-nums[j]) == k){
                count++
            }
        }
    }
    console.log(count)
    return count
};

countKDifference([1,2,2,1], 1)
