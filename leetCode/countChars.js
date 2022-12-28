

var countCharacters = function(words, chars) {
    let h = {}
    let count = 0
    for(let i = 0; i < chars.length; i++){
        let x = chars[i]
        if(h[x]){
            h[x]++
        } else {
            h[x] = 1
        }
    }

    for(let i = 0; i < words.length; i++){
        let h2 = {}
        for(let j = 0; j < words[i].length; j++){
            let y = words[i][j]
            if(h2[y]){
                h2[y]++
            } else {
                h2[y] = 1
            }
        }
        let addToCount = true
        for(let key in h2){
            if(h[key] >= h2[key]){
                continue
            } else {
                addToCount = false
            }
        }
        if(addToCount == true){
            count += words[i].length
        }
    }
    return count 
};

countCharacters(["cat","bt","hat","tree"], "atach")




// var countCharacters = function(words, chars) {
//     let h = {}
//     let count = 0
//     for(let i = 0; i < chars.length; i++){
//         let x = chars[i]
//         if(h[x]){
//             h[x]++
//         } else {
//             h[x] = 1
//         }
//     }
//     console.log(h)

//     for(let i = 0; i < words.length; i++){
//         let h2 = {}
//         for(let j = 0; j < words[i].length; j++){
//             let y = words[i][j]
//             if(h2[y]){
//                 h2[y]++
//             } else {
//                 h2[y] = 1
//             }
//         }
//         console.log(h2)
//         let addToCount = true
//         for(let key in h2){
//             if(h[key] >= h2[key]){
//                 continue
//             } else {
//                 addToCount = false
//             }
//         }
//         if(addToCount == true){
//             count += words[i].length
//         }
//     }
//     console.log(count)
//     return count 
// };




// var countCharacters = function(words, chars) {
//     let h = {}
//     for(let i = 0; i< chars.length; i++){
//         if(!h[chars[i]]){
//             h[chars[i]] = 1
//         }else{
//             h[chars[i]] += 1
//         }
//     }
//     let count = 0
//     for(let i = 0; i< words.length; i++){
//         let newH = {...h}
//         let isTrue = true
//         for(let j = 0; j< words[i].length; j++){
//             if(newH[words[i][j]] > 0){
//                 newH[words[i][j]] -= 1
//             }else{
//                 isTrue = false
//             }
//         }
//         if(isTrue == true){
//             count += words[i].length
//         }
//     }
//     return count
// };