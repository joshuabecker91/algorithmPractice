

var partitionArray = function(nums, k) {
    nums.sort((a,b) => a-b)
    let count = 0
    let temp = nums[0]
    for(let i = 0; i < nums.length; i++){
        if((nums[i+1] - temp) > k){
            count++
        }
    }
    console.log(count)
    return count
};

partitionArray([3,6,1,2,5], 2)