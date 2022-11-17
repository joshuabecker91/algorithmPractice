

var singleNumber = function(nums) {
    let hashmap = {}
    if(nums.length == 1){
        return nums[0]
    }
    for(let i = 0; i < nums.length; i++){
        let x = nums[i]
        // hashmap[x] ? hashmap[x]++ : hashmap[x] = 1
        if(hashmap[x]){
            hashmap[x]++
        } else {
            hashmap[x] = 1
        }
    }
    console.log(hashmap)
    for(let key in hashmap){
        if(hashmap[key] == 1){
            console.log(key)
            return key
        }
    }
};

singleNumber([5,5,1])



// var singleNumber = function(nums) {
//     let single = 0;
//     for(let i=0; i<nums.length; i++) {
//         single^=nums[i]
//         console.log(single, (single >>> 0).toString(2))
//     }
//     return single;
// }



// nums.map(x => )

// nums.map() => {
// }