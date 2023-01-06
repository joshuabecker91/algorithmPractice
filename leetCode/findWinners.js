


var findWinners = function (matches) {
    let h = {}

    for (let i = 0; i < matches.length; i++) {
        const [winner, loser] = matches[i]
        if (h[winner] === undefined) {
            h[winner] = 0
        }
        if (h[loser] !== undefined) {
            h[loser] = h[loser] + 1
        } else {
            h[loser] = 1
        }
    }

    let results = [[], []]
    const players = Object.keys(h).sort((a, b) => a - b)
    for (let x = 0; x < players.length; x++) {
        if (h[players[x]] === 0) {
            results[0].push(players[x])
        } else if (h[players[x]] === 1) {
            results[1].push(players[x])
        }
    }
    return results

};




// CORRECT but times out.
// var findWinners = function(matches) {
//     let lH = {}
//     let players = []
//     for(let i = 0; i < matches.length; i++){
//         let winner = matches[i][0]
//         let loser = matches[i][1]
//         players.push(winner)
//         players.push(loser)
//         if(lH[loser]){
//             lH[loser]++
//         } else {
//             lH[loser] = 1
//         }
//     }
//     players = [...new Set(players)]
//     playersSorted = players.sort((a,b) => a-b)
//     let lHArray = Object.keys(lH)
//     let output = [[],[]]
//     for(let i = 0; i < playersSorted.length; i++){
//         let x = playersSorted[i]
//         if(!lHArray.includes(String(x))){
//             output[0].push(x)
//         }
//     }
//     for(let key in lH){
//         if(lH[key] == 1){
//             output[1].push(Number(key))
//         }
//     }
//     return output 
// };




// var findWinners = function(matches) {
//     let wH = {}
//     let lH = {}
//     let players = []
//     for(let i = 0; i < matches.length; i++){
//         let winner = matches[i][0]
//         let loser = matches[i][1]
//         players.push(winner)
//         players.push(loser)
//         if(wH[winner]){
//             wH[winner]++
//         } else {
//             wH[winner] = 1
//         }
//         if(lH[loser]){
//             lH[loser]++
//         } else {
//             lH[loser] = 1
//         }
//     }
//     console.log(wH)
//     console.log(lH)
//     players = [...new Set(players)]
//     playersSorted = players.sort((a,b) => a-b)
//     let lHArray = Object.keys(lH)
//     console.log("LHArray", lHArray)
//     let output = [[],[]]
//     for(let i = 0; i < playersSorted.length; i++){
//         let x = playersSorted[i]
//         if(!lHArray.includes(String(x))){
//             output[0].push(x)
//         }
//     }
//     for(let key in lH){
//         if(lH[key] == 1){
//             output[1].push(Number(key))
//         }
//     }
//     console.log(output)
//     return output 
// };

findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])