

var isPalindrome = function(s) {
    let x = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()
    let j = x.length-1
    let i = 0
    while (i <= j){
        if(x[i] != x[j]){
            return false
        }
        i++
        j--
    }
    return true
};

isPalindrome("A man, a plan, a canal: Panama")

// var isPalindrome = function(s) {
//     // let array = []
//     // console.log(s)
//     // let x = s.join("")
//     // let x = s.replaceAll(" ", "").replaceAll(",", "").replaceAll(":", "").toLowerCase()
//     let x = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()
//     // console.log(x)
//     // console.log(x.length)
//     let j = x.length-1
//     let i = 0
//     while (i <= j){
//         // console.log(x[i], x[j])
//         if(x[i] != x[j]){
//             // console.log(false)
//             return false
//         }
//         i++
//         j--
//     }
//     // console.log("true")
//     return true
// };

// isPalindrome("A man, a plan, a canal: Panama")