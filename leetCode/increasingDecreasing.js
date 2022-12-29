

var sortString = function (s) {
    let temp = new Array(26).fill(0);
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        temp[s.charCodeAt(i) - 97] += 1;
    }

    let flag = true;
    while (ans.length < s.length) {
        for (let i = 0; i < temp.length; i++) {
            var pos = i;
            if (!flag) {
                pos = 25 - i;
            }
            if (temp[pos] !== 0) {
                ans.push(String.fromCharCode(pos + 97));
                temp[pos] -= 1;
            }
            console.log(ans)
        }

        flag = !flag;
    }
    ans = ans.join('');
    console.log(ans)
    return ans;
};

sortString("aaaabbbbcccc")




// var sortString = function(s) {
//     let output = ""
//     let tempString = s[0]
//     let tempChar = ""
//     let i = 0
//     while(output.length < s.length){
//         console.log("s[i]", s[i], "tempChar", tempChar, tempString, output)
//         if(s[i] != tempChar && s.charCodeAt(i) < tempChar.charCodeAt()){
//             tempChar = tempString[i]
//             output += s[i]
//         } else {
//             tempString += s[i]
//         }
//         if(i >= s.length){
//             i = 0
//             tempString = ""
//         }
//         if(output.length >= s.length){
//             break
//         }
//         i++
//     }
//     console.log(output)

// };




// newArray = s
// 
// let temp = undefined
// while(newArray.length > 0){
//     if(newArray[i] != temp){
//         temp = newArray[i]
//         slice 
//     } else {

//     }
//     newArray[0]

//     i++
// }
