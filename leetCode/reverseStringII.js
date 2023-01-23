


var reverseStr = function(s, k) {
    let output = ""
    let count = 0
    let reversing = true
    for(let i = 0; i < s.length; i++){
        if(reversing == true){
            reversing = false
            let j = i + (k-1)
            while(j >= i){
                if(j < s.length){
                    output+=s[j]
                }
                j--
            }
            i+=k-1
        } else {
            output+=s[i]
            count++
            if(count >= k){
                reversing = true
                count = 0
            }
        }
    }
    return output
}

reverseStr("abcdefg", 2)


    // }
    //     let left = s.slice(0,i)
    //     let temp = s.slice(i,i+k)
    //     let reversed = temp.split('').reverse().join('')
    //     let right = s.slice((i+reversed.length),s.length)
    //     s = left.concat(reversed).concat(right)
    //     i+=(k*2)
    // }
    // return s



// var reverseStr = function(s, k) {
//     let i = 0
//     while(i <= s.length){
//         let left = s.slice(0,i)
//         let temp = s.slice(i,i+k)
//         let reversed = temp.split('').reverse().join('')
//         let right = s.slice((i+reversed.length),s.length)
//         s = left.concat(reversed).concat(right)
//         i+=(k*2)
//     }
//     return s
// };


// var reverseStr = function(s, k) {
//     // let x = k*2
//     let i = 0
//     while(i <= s.length){
//         // let temp = a[i]
//         console.log(i)
//         let temp = s.slice(i,i+k)
//         console.log(temp)
//         let reversed = temp.split('').reverse().join('')
//         console.log(reversed)
//         let left = s.slice(0,i)
//         let right = s.slice((i+reversed.length),s.length)
//         s = left.concat(reversed).concat(right)
//         i+=(k*2)
//     }
//     console.log(s)
//     return s
// };

// reverseStr("abcdefg", 2)