

// CORRECT works 100% test cases beats 98% time 58% memory
var buildArray = function(nums) {
    let newArray = []
    for(let i = 0; i < nums.length; i++){
        newArray.push(nums[nums[i]])
    }
    console.log(newArray)
    return newArray
};

buildArray([0,2,1,5,3,4])
