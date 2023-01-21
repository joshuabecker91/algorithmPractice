

var reverseStr = function(s, k) {
    // let i = 0
    let output = ""
    let count = 0
    let boolean = true
    for(let i = 0; i < s.length; i++){
        if(boolean == true){
            let x = i + k
            while(x >= 0){
                output+=s[x]
                x--
            }
            boolean = false
            i+=k
        } else {
            output+=s[i]
            count++
            if(count >= k){
                count = 0
                boolean = true
            }
        }
    }
    console.log(output)
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