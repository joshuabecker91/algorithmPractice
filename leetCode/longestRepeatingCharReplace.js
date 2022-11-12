


const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};

    while (right < s.length) {
        const char = s[right];
        visited[char] = visited[char] ? visited[char] + 1 : 1;

        if (visited[char] > maxCharCount) maxCharCount = visited[char];

        if (right - left + 1 - maxCharCount > k) {
            visited[s[left]]--;
            left++;
        }

        right++;
    }

    return right - left;
};


// characterReplacement("ABAB", 2)
characterReplacement("AABABBA",1)








// var characterReplacement = function(s, k) {
//     let max = 0;
//     if(s.split('').every(char => char === s[0]) == true){
//         return s.length
//     }
//     // k == 0 need to account for
//     for(let i = 0; i < s.length; i++){
//         let count = 0;
//         for(let j = i+1; j < s.length; j++){
//             if(s[i] != s[j]){
//                 count++
//             }
//             if(count >= k){
//                 let length = (j-(i-1))
//                 console.log("this is the length", length)
//                 // console.log(s.slice(i-1,s.length))
//                 let remainder = s.slice(i-1,s.length)
//                 console.log(remainder)
//                 let y = 0
//                 while(remainder[y] == s[i]){
//                     y++
//                 }
//                 console.log(length, y, "max", max)
//                 // console.log("s[i]", s[i])
//                 // console.log(remainder.indexOf(s[i]))
//                 if(length > max){
//                     max = length + y
//                 }
//                 break
//             }
//             // console.log(i,j,count)
//             // if(count == 0){
//             //     let z = (j-(i-1))
//             //     if(z > max){
//             //         max = z
//             //     }
//             // }
//         }
//     }
//     console.log("the max is", max)
//     return max
// };

// // characterReplacement("ABAB", 2)
// characterReplacement("AABABBA",1)