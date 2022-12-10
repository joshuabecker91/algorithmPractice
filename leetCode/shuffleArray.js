

// CORRECT 100% Test Cases
var shuffle = function(nums, n) {
    let left = nums.slice(0, n)
    let right = nums.slice(n, (n*2)+1)
    // console.log(left, right)
    let output = []
    for(let i = 0; i < left.length; i++){
        output.push(left[i])
        output.push(right[i])
    }
    // console.log(output)
    return output
};

shuffle([2,5,1,3,4,7], 3)

