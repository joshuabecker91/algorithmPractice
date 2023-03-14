/*
'''
438. Find All Anagrams in a String

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:
                  abc
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.



🔎 EXPLORE
- What are some other insightful & revealing test cases?
- we can sort the word and then compare to see if they are equal, substring and p word


🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Sort substring and compare to see if equal to p word
Time: O(n * logn) We are sorting inside of a n loop 
Space: O(1) since we are creating a new output array 

Algorithm 2:
we could initialzie an alphabetical hashmap and then...
iterate and constantly update hashmap and check to see if we have enough letters


📆 PLAN
Outline of algorithm #1: 
Initialize an output array which will be returned
let pSorted = p.sort()

for loop with i variable
  j = i + p.length-1
  let newWord = string.substring(i, j)
  if(newWord.sort().join('') == pSorted){
    output.push(i)
  }
return output


🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// Refactored
var findAnagrams = function (s, p) {
    let output = []
    let pArray = p.split('')
    let map = new Map()
    for (let i = 0; i < pArray.length; i++) {
        if (!map.has(pArray[i])) {
            map.set(pArray[i], 0)
        }
        map.set(pArray[i], map.get(pArray[i]) + 1)
    }

    let sArray = s.split('')
    let left = 0
    let right = left + pArray.length - 1

    while(right < sArray.length){
        let thisMap = new Map(map)
        for (let i = left; i <= right; i++) {
            if (thisMap.has(sArray[i])) {
                thisMap.set(sArray[i], thisMap.get(sArray[i]) - 1)
            }
        }
        let boolean = true
        let mapArray =  Array.from(thisMap)
        for (let i = 0; i < mapArray.length; i++) {
            if (mapArray[i][1] != 0) {
                boolean = false
                break
            }
        }
        if (boolean === true) {
            output.push(left)
        }
        left++
        right++
    }
    return output
}

console.log(findAnagrams("abacbabc", "abc"))


// Can you iterate over a Map()
// Can you do Object.values() on a map or do you need to do Array.from?



// hashmap constantly updating new Map()
// 26 length array 
// recursively where pass in substring to helper function 


// // Solution
// const findAnagrams = (s, p) => {
//     let result = [];
//     let map = new Map();
//     let charCount = p.length;

//     /* Get character frequencies */
//     for (const char of p) map.set(char, map.get(char) + 1 || 1);

//     /**
//      * Define left/right pointers and traverse.
//      * Once your right pointer hits the length of (p) input string, check if there's an anagram (length must be the same by property).
//      */
//     let [left, right] = [0, 0];

//     while (right < s.length) {
//         /* If we find a match, but still char frequencies remaining, decrement count */
//         if (map.get(s[right]) > 0) {
//             charCount--;
//         }

//         /* If we've seen this character, decrement count in map and increment pointer */
//         if (map.has(s[right])) {
//             map.set(s[right], map.get(s[right]) - 1);
//         }
//         right++;

//         /* Anagram found */
//         if (charCount === 0) {
//             result.push(left);
//         }

//         /* If we exhaust the anagram length (equals), we need to restore the anagram characters for future use */
//         if (right - left === p.length) {
//             if (map.get(s[left]) >= 0) {
//                 charCount++;
//             }
//             if (map.has(s[left])) {
//                 map.set(s[left], map.get(s[left]) + 1);
//             }
//             left++;
//         }
//     }

//     return result;
// };




// var findAnagrams = function (s, p) {
//     let output = []
//     let pSorted = p.split('') //.sort()
//     let map = new Map()
//     for (let i = 0; i < pSorted.length; i++) {
//         if (!map.has(pSorted[i])) {
//             map.set(pSorted[i], 0)
//         }
//         map.set(pSorted[i], map.get(pSorted[i]) + 1)
//     }
//     console.log(map)

//     let sArray = s.split('')
//     let left = 0
//     let right = left + pSorted.length - 1
//     while(right < sArray.length){
//         let thisIterationMap = new Map(map)
//         for (let i = left; i <= right; i++) {
//             if (thisIterationMap.has(sArray[i])) {
//                 thisIterationMap.set(sArray[i], thisIterationMap.get(sArray[i]) - 1)
//             }
//         }
//         console.log(thisIterationMap, left, right)
//         let boolean = true
//         let mapArray =  Array.from(thisIterationMap)
//         console.log(mapArray)
//         for (let i = 0; i < mapArray.length; i++) {
//             if (mapArray[i][1] != 0) {
//                 console.log(false)
//                 boolean = false
//                 break
//             }
//         }
//         if (boolean === true) {
//             console.log(true)
//             output.push(left)
//         }
//         left++
//         right++
//     }
//     return output
// }

// console.log(findAnagrams("abacbabc", "abc"))





















// var findAnagrams = function (s, p) {
//     let output = []
//     let pSorted = p.split('') //.sort()
//     let map = new Map()
//     for (let i = 0; i < pSorted.length; i++) {
//         if (!map.has(pSorted[i])) {
//             map.set(pSorted[i], 0)
//         }
//         map.set(pSorted[i], pMap.get(pSorted[i]) + 1)
//     }
//     console.log(map)

//     let sArray = s.split('')

//     function helper(i = 0) {
//         // base case
//         if (i + pSorted.length - 1 > sArray.length - 1) {
//             return output
//         }
//         let thisIterationMap = new Map(map)
//         for (let x = i; x < (i + pSorted.length); x++) {
//             if (thisIterationMap.has(sArray[x])) {
//                 thisIterationMap.set(sArray[x], thisIterationMap.get(sArray[x]) - 1)
//             }
//         }
//         console.log(thisIterationMap, i)
//         let q = true
//         let mapArray = Object.values(thisIterationMap)
//         for (let z = 0; z < mapArray.length; z++) {
//             if (mapArray[z] != 0) {
//                 console.log(false)
//                 q = false
//                 break
//             }
//         }
//         if (q === true) {
//             console.log(true)
//             output.push(i)
//         }
//         helper(i + 1)
//         // return output
//     }
//     helper()
//     return output
// }

// console.log(findAnagrams("abacbabc", "abc"))









  
  
  // var findAnagrams = function(s, p) {
  //   let output = []
  //   let pSorted = p.split('').sort().join('')
  //   let sArray = s.split('')
    
  //   function helper(i = 0, j = pSorted.length - 1){
  //     // base case
  //     if(j > sArray.length + 1 - pSorted.length + 1){
  //       return output
  //     }
  //     if(sArray.slice(i, j+1).sort().join('') === pSorted){
  //       output.push(i)
  //     }
  //     helper(i+1, j+1)
  //     // return output
  //   }
  //   helper()
  //   return output
  // }
  
  // [4,30,56,82,108,134,160,186,212,238,264,290,316,342,368,394,420,446,472,498,524,550,576,602,628,654,680,706,732,758,784,810,836,862,888,914,940,966,992,1018,1044,1070,1096,1122,1148,1174,1200,1226,1252,1278,1304,1330,1356,1382,1408,1434,1460,1486,1512,1538,1564,1590,1616,1642,1668,1694,1720,1746,1772,1798,1824,1850,1876,1902,1928,1954,1980,2006,2032,2058,2084,2110,2136,2162,2188,2214,2240,2266,2292,2318,2344,2370,2396,2422,2448,2474,2500,2526,2552,2578,2604,2630,2656,2682,2708,2734,2760,2786,2812,2838,2864,2890,2916,2942,2968,2994,3020,3046,3072,3098,3124,3150,3176,3202,3228,3254,3280,3306,3332,3358,3384,3410,3436,3462,3488,3514,3540,3566,3592,3618,3644,3670,3696,3722,3748,3774,3800,3826,3852,3878,3904,3930,3956,3982,4008,4034,4060,4086,4112,4138,4164,4190,4216,4242,4268,4294,4320,4346,4372,4398,4424,4450,4476,4502,4528,4554,4580,4606,4632,4658,4684,4710,4736,4762,4788,4814,4840,4866,4892,4918,4944,4970,4996,5022,5048,5074,5100,5126,5152,5178,5204,5230,5256,5282,5308,5334,5360,5386,5412,5438,5464,5490,5516,5542,5568,5594,5620,5646,5672,5698,5724,5750,5776,5802,5828,5854,5880,5906,5932,5958,5984,6010,6036,6062,6088,6114,6140,6166,6192,6218,6244,6270,6296,6322,6348,6374,6400,6426,6452,6478,6504,6530,6556,6582,6608,6634,6660,6686,6712,6738,6764,6790,6816,6842,6868,6894,6920,6946,6972,6998,7024,7050,7076,7102,7128,7154,7180,7206,7232,7258,7284,7310,7336,7362,7388,7414,7440,7466,7492,7518,7544,7570,7596,7622,7648,7674,7700,7726,7752]
  
  // [4,30,56,82,108,134,160,186,212,238,264,290,316,342,368,394,420,446,472,498,524,550,576,602,628,654,680,706,732,758,784,810,836,862,888,914,940,966,992,1018,1044,1070,1096,1122,1148,1174,1200,1226,1252,1278,1304,1330,1356,1382,1408,1434,1460,1486,1512,1538,1564,1590,1616,1642,1668,1694,1720,1746,1772,1798,1824,1850,1876,1902,1928,1954,1980,2006,2032,2058,2084,2110,2136,2162,2188,2214,2240,2266,2292,2318,2344,2370,2396,2422,2448,2474,2500,2526,2552,2578,2604,2630,2656,2682,2708,2734,2760,2786,2812,2838,2864,2890,2916,2942,2968,2994,3020,3046,3072,3098,3124,3150,3176,3202,3228,3254,3280,3306,3332,3358,3384,3410,3436,3462,3488,3514,3540,3566,3592,3618,3644,3670,3696,3722,3748,3774,3800,3826,3852,3878,3904,3930,3956,3982,4008,4034,4060,4086,4112,4138,4164,4190,4216,4242,4268,4294,4320,4346,4372,4398,4424,4450,4476,4502,4528,4554,4580,4606,4632,4658,4684,4710,4736,4762,4788,4814,4840,4866,4892,4918,4944,4970,4996,5022,5048,5074,5100,5126,5152,5178,5204,5230,5256,5282,5308,5334,5360,5386,5412,5438,5464,5490,5516,5542,5568,5594,5620,5646,5672,5698,5724,5750,5776,5802,5828,5854,5880,5906,5932,5958,5984,6010,6036,6062,6088,6114,6140,6166,6192,6218,6244,6270,6296,6322,6348,6374,6400,6426,6452,6478,6504,6530,6556,6582,6608,6634,6660,6686,6712,6738,6764,6790,6816,6842,6868,6894,6920,6946,6972,6998,7024,7050,7076,7102,7128,7154,7180,7206,7232,7258,7284,7310,7336,7362,7388,7414,7440,7466,7492,7518,7544,7570,7596,7622,7648,7674,7700,7726,7752,7778]
  
  
  
  // console.log(findAnagrams("abab", "ab"))
  
  // var findAnagrams = function(s, p) {
  //   let output = []
  //   let pSorted = p.split('').sort().join('')
  //   let sArray = s.split('')
  //   for(let i = 0; i <= sArray.length - pSorted.length; i++){
  //     let j = i + p.length - 1
  //     let newWord = sArray.slice(i,j+1).sort().join('')
  //     console.log(i,j)
  //     if(newWord === pSorted){
  //       output.push(i)
  //     }
  //   }
  //   return output
  // };
  
  
  // console.log(findAnagrams("cbaebabacd", "abc"))
  
  
  
  
  
  
  
  // var findAnagrams = function(s, p) {
  //   let output = []
  //   let pSorted = p.split('').sort().join('')
  //   let sArray = s.split('')
  //   for(let i = 0; i <= sArray.length - pSorted.length; i++){
  //     let j = i + p.length - 1
  //     let newWord = sArray.slice(i,j+1).sort().join('')
  //     console.log(i,j)
  //     if(newWord === pSorted){
  //       output.push(i)
  //     }
  //   }
  //   return output
  // };


//   matrix size squared x k number of words