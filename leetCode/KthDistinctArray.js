

// CORRECT works 100% test cases
var kthDistinct = function(arr, k) {
    let h = {}
    for(let i = 0; i < arr.length; i++){
        let x = arr[i]
        if(h[x]){
            h[x]++
        } else {
            h[x] = 1
        }
    }
    let uniques = []
    for(let key in h){
        if(h[key] == 1){
            uniques.push(key)
        }
    }
    return uniques[k-1] ? uniques[k-1] : "";
};

kthDistinct(["d","b","c","b","c","a"], 2)


// var kthDistinct = function(arr, k) {
//     let h = {}
//     for(let i = 0; i < arr.length; i++){
//         let x = arr[i]
//         if(h[x]){
//             h[x]++
//         } else {
//             h[x] = 1
//         }
//     }
//     console.log(h)

//     let count = 0
//     let hArray = Object.entries(h)
//     for(let i = 0; i < hArray.length; i++){
//         if(hArray[i][1] == 1){
//             count++
//         }
//         if(count == k){
//             return hArray[i][0]
//         }
//     }
//     return ""
// };
