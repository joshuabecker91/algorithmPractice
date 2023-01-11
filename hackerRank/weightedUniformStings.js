


function weightedUniformStrings(s, queries) {
    let str = 'abcdefghijklmnopqrstuvwxyz'
    let h = {}
    let weights = []
    for(let i = 0; i < s.length; i++){
        let x = s[i]
        let letterWeight = str.indexOf(x) + 1
        if(h[x]){
            h[x]+=letterWeight
            weights.push(h[x])
        } else {
            h[x] = letterWeight
            weights.push(h[x])
        }
    }
    console.log(weights)
    let ans = []
    for(let i = 0; i < queries.length; i++){
        if(weights.includes(queries[i])){
            ans.push("Yes")
        } else {
            ans.push("No")
        }
    }
    console.log(ans)
    return ans
}

// weightedUniformStrings('abbcccdddd', [1,7,5,4,15])
weightedUniformStrings('abccddde', [1,3,12,5,9,10])





// function weightedUniformStrings(s, queries) {
//     let str = 'abcdefghijklmnopqrstuvwxyz'
//     let h = {}
//     for(let i = 0; i < s.length; i++){
//         let x = s[i]
//         let letterWeight = str.indexOf(x) + 1
//         if(h[x]){
//             h[x]+=letterWeight
//         } else {
//             h[x] = letterWeight
//         }
//     }
//     console.log(h)
//     // let weights = Object.values(h)
//     let weights = []
//     for(let key in h){
//         let temp = h[key]
//         while(h[key] > 0){
//             weights.push(h[key])
//             h[key] -= str.indexOf(key) + 1
//         }
//     }
//     console.log(weights)
//     let ans = []
//     for(let i = 0; i < queries.length; i++){
//         if(weights.includes(queries[i])){
//             ans.push("Yes")
//         } else {
//             ans.push("No")
//         }
//     }
//     console.log(ans)
//     return ans
// }




// function weightedUniformStrings(s, queries) {

//     let alphabet = "abcdefghijklmnopqrstuvwxyz";

//     let allGroupsArr = s.match(/([a-z])\1*/g);
//     // console.log(allGroupsArr);

//     let allWeightsArr = [];

//     allGroupsArr.forEach(el => {
//         let weight = alphabet.indexOf(el[0]) + 1;
//         for (var i = 0; i < el.length; i++) {
//             allWeightsArr.push(weight * (i + 1))
//         }
//     });

//     // map throught the queries and see if they exist in allWeightsArr return YES if found or NO if not found
//     let final = queries.map(el => {
//         return allWeightsArr.indexOf(el) > -1 ? 'Yes' : 'No'
//     });

//     // console.log("final: ", final);
//     return final;

//     // ! end of the function
// }