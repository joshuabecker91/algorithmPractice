

// CORRECT works 100% test cases beats 67% time 77% memory
var createTargetArray = function(nums, index) {
    let target = new Array(0)
    // console.log(target)
    for(let i = 0; i < index.length; i++){
        let ind = index[i]
        target.splice(ind,0,nums[i])
    }
    // console.log(target)
    return target
};

createTargetArray([0,1,2,3,4], [0,1,2,2,1])