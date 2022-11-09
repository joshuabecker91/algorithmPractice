

// count the Math.abs() ABSOLUTE difference between the number of vowels 
// and the number of consonants in each word
// return the array of words in the ascending order of these absolute differences
// .sort((a,b)=> a-b)
// If the absolute difference is the same, sort the words in alphabetic order.
function solution(text) {
    let textArray = text.split(' ')
    console.log(textArray)
    let absoluteDifference = []
    let vowels = ['a','e','i','o','u']
    let hashmap = {}
    for(let i = 0; i < textArray.length; i++){
        let word = textArray[i]
        let vowelCount = 0;
        let consonantCount = 0;
        for(let j = 0; j < textArray[i].length; j++){
            console.log(word[j])
            if(vowels.includes(word[j])){
                vowelCount++
            } else {
                consonantCount++
            }
        }
        let difference = Math.abs(consonantCount-vowelCount)
        hashmap[word] = difference
        // absoluteDifference.push(difference)
        absoluteDifference.push([difference, word])
    }
    console.log(hashmap)
    // console.log(absoluteDifference, word)
    // console.log(absoluteDifference.sort((a,b)=> a[0]-b[0]))
    let sortedByDiff = absoluteDifference.sort((a,b)=> a[0]-b[0])
    // .localCompare()
    console.log(sortedByDiff)

    // arr.sort(function (str1, str2) {
    //     return str1.localeCompare(str2);
    let result = []
    // let newHashmap = {}
    for(let z = 0; z < sortedByDiff.length; z++){
        let index = 2;
        // console.log(sortedByDiff[1][0], sortedByDiff[0][0])
        if(sortedByDiff[z+1][0] > sortedByDiff[z][0]){
            let x = sortedByDiff.slice(z,index)
            result.push(x)
            index = z
            console.log(result)
        }
    }

    // let sortedAlphabetically = sortedByDiff.sort((a,b)=> a[1]-b[1])
    // let sortedAlphabetically = sortedByDiff.sort(function (a, b) {
    //     if (a[1] < b[1]) {
    //         return -1;
    //     }
    //     if (a[1] > b[1]) {
    //         return 1;
    //     }
    //         return 0;
    //     });
    // console.log(sortedAlphabetically)
    // let outcome = []
    // for(let i = 0; i < sortedByDiff.length; i++){
    //     outcome.push(sortedByDiff[i][1])
    // }
    // console.log("outcome", outcome)
    // return outcome
}

solution("baseball soccer beach drink")



    // && a[1]-b[1]
    // return absoluteDifference.sort((a,b)=> a[0]-b[0] && a[1]-b[1])
    // let words2 = textArray.sort()

    // console.log(words2)
    // return words2

    // console.log(textArray.sort((a,b)=> a-b))

    // absoluteDifference.sort((function(index){
    //     return function(a,b){
    //         return(a[index] === b[index] ? 0 : )
    //     }
    // }))
    // console.log(textArray.sort((a,b)=> a-b))



    // let pointer = nums1.length-1;
    // m--;
    // n--;

    // while (n >= 0) {
    //     if (nums1[m] > nums2[n]) {
    //         nums1[pointer] = nums1[m];
    //         m--;
    //     } else {
    //         nums1[pointer] = nums2[n];
    //         n--;
    //     }
    //     pointer--;
    // }
    // return nums1;



// function swapElements(arr, i1, i2) {
//     // Step 1
//     let temp = arr[i1];

//     // Step 2
//     arr[i1] = arr[i2];

//     // Step 3
//     arr[i2] = temp;
// }

// const arr = [1, 2, 3, 4];

// swapElements(arr, 0, 3);

// console.log(arr); // [ 4, 2, 3, 1 ]



// function swapElements(arr, i1, i2) {
//     [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
// }

// const arr = [1, 2, 3, 4];

// swapElements(arr, 0, 3);

// console.log(arr); // [ 4, 2, 3, 1 ]