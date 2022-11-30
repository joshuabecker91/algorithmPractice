

var maxProductDifference = function(nums) {
    let newArray = nums.sort((a,b) => a-b)
    console.log(newArray)
    let length = newArray.length-1
    let max = (newArray[length-1] * newArray[length])
    let min = (newArray[0] * newArray[1])
    // console.log(max - min)
    return (max - min)
};

maxProductDifference([5,6,2,7,4])