

// 219 Contains Duplicate II 

// Correct - Refactored again using Map() w/ .has .get .set - beats 63% time and 11% memory
// faster on time than using an Object type hashmap
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let x = nums[i]
        if(map.has(x)){
            let temp = map.get(x)
            temp.push(i)
            map.set(x, temp)
        } else {
            map.set(x, [i])
        }
    }
    for(let a of map.values()){
        for(let i = 0; i < a.length-1; i++){
            if(Math.abs(a[i] - a[i+1]) <= k){
                return true
            }
        }
    }
    return false 
}

containsNearbyDuplicate([1,2,3,1], 3)



// Correct - refactored using a hashmap - Beats 29% on time and 13% on memory
var containsNearbyDuplicate = function(nums, k) {
    let h = {}
    for(let i = 0; i < nums.length; i++){
        let x = nums[i]
        if(h[x]){
            h[x].push(i)
        } else {
            h[x] = [i]
        }
    }
    for(let key in h){
        let a = h[key]
        for(let i = 0; i < a.length-1; i++){
            if(Math.abs(a[i] - a[i+1]) <= k){
                return true
            }
        }
    }
    return false 
}

// containsNearbyDuplicate([1,2,3,1], 3)



// Correct but doesn't use a hashmap
// beats 9% time 0(n^2) and 95% on memory 0(1)
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j] && Math.abs(i-j) <= k){
                return true
            }
        }
    }
    return false
};

// containsNearbyDuplicate([1,2,3,1], 3)