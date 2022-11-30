

var smallerNumbersThanCurrent = function(nums) {
    let output = []
    let newArray = nums.slice(0).sort((a,b) => a-b)
    // console.log(nums)
    // console.log(newArray)
    for(let i = 0; i < nums.length; i++){
        let num = newArray.indexOf(nums[i])
        // console.log(num)
        output.push(num)
    }
    // console.log(output)
    return output
};

smallerNumbersThanCurrent([8,1,2,2,3])