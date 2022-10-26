

// var lengthOfLongestSubstring = function(s) {
//     let hashmap = {}
//     let count = 0;
//     let loopCount = 0;
//     // let x = 0
//     for(let i = 0; i < s.length; i++){
//         if(hashmap[s[i]]){
//             console.log("already exits")
//             if(i != s.length){
//                 loopCount = 0;
//             }
//             console.log(count, loopCount);
//             hashmap = {}
//             i--
//             // x ++;
//             // i = x;
//         }
//         else {
//             hashmap[s[i]] = 1;
//             loopCount ++;
//             console.log(loopCount)
//         }
//         if(loopCount > count){
//             count = loopCount;
//         }
//         console.log(hashmap);
//     }
//     console.log(count);
//     return count;
// };

// lengthOfLongestSubstring("abcabcbb")
// lengthOfLongestSubstring("pwwkew")
// lengthOfLongestSubstring("c")
// lengthOfLongestSubstring("dvdf")

// lengthOfLongestSubstring("aab")






var lengthOfLongestSubstring = function(s) {
    let hashmap = {}
    let count = 0;
    let loopCount = 0;
    // let x = 0
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            console.log("oneLoop")
            if(hashmap[s[j]]){
                console.log("already exits")
                if(i != s.length && j != s.length){
                    loopCount = 0;
                }
                console.log(count, loopCount);
                hashmap = {}
                j--
                // x ++;
                // i = x;
            }
            else {
                hashmap[s[j]] = 1;
                loopCount ++;
                console.log(loopCount)
            }
            if(loopCount > count){
                count = loopCount;
            }
            console.log(hashmap);
        }
    }
    console.log(count);
    return count;
};

// lengthOfLongestSubstring("aab")
lengthOfLongestSubstring("asjrgapa")