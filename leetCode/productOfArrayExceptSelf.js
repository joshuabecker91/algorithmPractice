


var productExceptSelf = function(nums) {
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        // let newArray = nums.splice(i,1);
        answer.push(nums[i])
        for(let x = 0; x < nums.length; x++){
            if(x != i){
                answer[i] *= nums[x];
            }
        }
    }
    console.log(answer)
};

productExceptSelf([1,2,3,4])




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