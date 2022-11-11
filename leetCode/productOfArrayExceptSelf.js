

var productExceptSelf = function(nums) {
    // First, create a prefix array that moves from the left,
    // gathering the running product of the prefix at each index
    const prefix = []
    // Move left in the input array
    for (let i=0; i<nums.length; i++) {
        // If i === 0, start with `1`, since there is no prefix
        if (i===0) {
            prefix[i] = 1
        } else {
            // Otherwise, multiply nums[i-1] times the prefix at position i-1,
            // and add that to the prefix array at position i
            prefix[i] = nums[i-1] * prefix[i-1]
        }
    }
    // Then, let's create a suffix array
    const suffix = []
    // Move right in the input array
    for (let i=nums.length - 1; i>=0; i--) {
        // For the last index, we have no suffix, so just add a 1 to that position
        if (i===nums.length - 1) {
            suffix[i] = 1
        } else {
            // Otherwise, we multiply nums[i+1] by the suffix at position i+1
            // and add that to the suffix array at position i
            suffix[i] = nums[i + 1] * suffix[i + 1]
        }
    }
    // Finally, our result array should be the products of prefix * suffix for each position
    const result = []
    for (let i=0; i<nums.length; i++) {
        result[i] = prefix[i] * suffix[i]
    }
    return result
};





// var productExceptSelf = function(nums) {
//     const result = [];
//     let productSoFar = 1;
//     for (let i = 0; i < nums.length; i++) {
//         result[i] = productSoFar
//         productSoFar *= nums[i]
//         console.log(result, productSoFar)
//     }
//     console.log("--------------------")
//     productSoFar = 1
//     for (let j = nums.length-1; j >= 0; j--) {
//         result[j] *= productSoFar
//         productSoFar *= nums[j]
//         console.log(result, productSoFar)
//     }
//     console.log(result)
//     return result;
// };

// productExceptSelf([1,2,3,4])





// var productExceptSelf = function(nums) {
//     let answer = []
//     // let array = []
//     // let hashmap = {}
//     for(let i = 0; i < nums.length; i++){
//         let product = nums.reduce((a,b,index) => {
//             if(i != index){
//                 return(a*b)
//             } else {
//                 return a
//             }
//         })
//         answer.push(product)
//     }
//     console.log(answer)
//     return answer
// }

// productExceptSelf([1,2,3,4])


//  CORRECT BUT TIMES OUT 18/22 test cases
// var productExceptSelf = function(nums) {
//     let answer = []
//     // let array = []
//     // let hashmap = {}
//     for(let i = 0; i < nums.length; i++){
//         let left = nums.slice(0,i)
//         let right = nums.slice(i+1,nums.length+1)
//         // console.log(left,right)
//         let newArray = left.concat(right)
//         // array.push(newArray)
//         answer.push(newArray.reduce((a,b) => a*b))
//         // console.log(newArray)
//         // let product = newArray.reduce((a,b) => a*b)
//         // // console.log(product)
//         // answer.push(product)
//         console.log(answer)
//     }
//     return answer
// };

// productExceptSelf([1,2,3,4])




// var productExceptSelf = function(nums) {
//     let answer = [];
//     for(let i = 0; i < nums.length; i++){
//         // let newArray = nums.splice(i,1);
//         answer.push(nums[i])
//         for(let x = 0; x < nums.length; x++){
//             if(x != i){
//                 answer[i] *= nums[x];
//             }
//         }
//     }
//     console.log(answer)
// };

// productExceptSelf([1,2,3,4])




// function productArray(arr, n)
// {

//     // Base case
//     if (n == 1) {
//         document.write(0);
//         return;
//     }

//     // Initialize memory to all arrays
//     let left = new Array(n);
//     let right = new Array(n);
//     let prod = new Array(n);

//     let i, j;

//     /* Left most element of left array
//     is always 1 */
//     left[0] = 1;

//     /* Right most element of right
//     array is always 1 */
//     right[n - 1] = 1;

//     /* Construct the left array */
//     for (i = 1; i < n; i++)
//         left[i] = arr[i - 1] * left[i - 1];

//     /* Construct the right array */
//     for (j = n - 2; j >= 0; j--)
//         right[j] = arr[j + 1] * right[j + 1];

//     /* Construct the product array using
//     left[] and right[] */
//     for (i = 0; i < n; i++)
//         prod[i] = left[i] * right[i];

//     /* print the constructed prod array */
//     for (i = 0; i < n; i++)
//         document.write(prod[i] + " ");

//     return;
// }

// // Driver code
// let arr = [ 10, 3, 5, 6, 2 ];
// let n = arr.length;
// document.write("The product array is :" + "</br>");

// productArray(arr, n);