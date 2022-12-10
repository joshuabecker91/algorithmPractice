

// CORRECT 100% Test cases
var dailyTemperatures = function (temperatures) {
    let ans = []
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < temperatures[i + 1]) {
            ans.push(1)
        } else {
            let count = 0
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    count = j - i
                    break
                }
            }
            ans.push(count)
        }
    }
    console.log(ans)
    return ans
};



// // CORRECT Works for 47/48
// var dailyTemperatures = function(temperatures) {
//     let output = []
//     for(let i = 0; i < temperatures.length; i++){
//         let count = 1
//         let j = i+1
//         if(temperatures[j] == undefined){
//             output.push(0)
//             console.log(output)
//             return output
//         }

//         while(temperatures[i] >= temperatures[j] && j <= temperatures.length-1){
//             count++
//             j++
//         }
//         // console.log("j", j, count)
//         if(j > temperatures.length-1){
//             output.push(0)
//         } else {
//             output.push(count)
//         }
//         // console.log(temperatures[i], temperatures[j], output)
//     }
// };

dailyTemperatures([89,62,70,58,47,47,46,76,100,70])
// dailyTemperatures([73,74,75,71,69,72,76,73])
// dailyTemperatures([30,40,50,60])
// dailyTemperatures([30,30,30,30])



