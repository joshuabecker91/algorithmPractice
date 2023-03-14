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


