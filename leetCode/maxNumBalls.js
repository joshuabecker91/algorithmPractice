

var countBalls = function(lowLimit, highLimit) {
    let h = {}
    for(let i = lowLimit; i <= highLimit; i++){
        let ball = i.toString().split('')
        let sum = 0
        for(let j = 0; j < ball.length; j++){
            sum += parseInt(ball[j])
        }
        if(h[sum]){
            h[sum] += 1
        }else{
            h[sum] = 1
        }
    }
    let maxBall = -Infinity
    for(let key in h){
        maxBall = Math.max(maxBall, h[key])
    }
    // console.log(maxBall)
    return maxBall
}

countBalls(8,16)


// Not as efficient but works for 100% test cases
// var countBalls = function(lowLimit, highLimit) {
//     let hashmap = {}
//     for(let i = lowLimit; i <= highLimit; i++){
//         let x = +String(i).split('').reduce((a,b) => Number(a) + Number(b))
//         if(hashmap[x]){
//             hashmap[x]++
//         }
//         else {
//             hashmap[x] = 1
//         }
//     }
//     let max = -Infinity;
//     for(let key in hashmap){
//         if(hashmap[key] > max){
//             max = hashmap[key]
//         }
//     }
//     return max
// };




// WORKS GREAT BUT NOT AS EFFICIENT AS PARSE INT ABOVE
// var countBalls = function(lowLimit, highLimit) {
//     let balls = []
//     let hashmap = {}
//     for(let i = lowLimit; i <= highLimit; i++){
//         let ball = i.toString().split('')
//         let sum = ball.map(str => {
//             return Number(str);
//         });
//         let x = sum.reduce((a,b) => a+b)
//         balls.push(x)
//         if(hashmap[x]){
//             hashmap[x]++
//         }
//         else {
//             hashmap[x] = 1
//         }
//     }
//     let max = -Infinity;
//     for(let key in hashmap){
//         if(hashmap[key] > max){
//             max = hashmap[key]
//         }
//     }
//     return max
// };

// // countBalls(1,10)
// countBalls(8,16)




// CORRECT with 100% test cases
// var countBalls = function(lowLimit, highLimit) {
//     let n = highLimit - lowLimit + 1
//     let balls = []
//     let hashmap = {}
//     for(let i = lowLimit; i <= highLimit; i++){
//         let ball = i.toString().split('')
//         // console.log(ball)
//         let sum = ball.map(str => {
//             return Number(str);
//         });
//         // console.log(sum)
//         let x = sum.reduce((a,b) => a+b)
//         // console.log(x)

//         balls.push(x)

//         // console.log(newBallArray)

//         if(hashmap[x]){
//             hashmap[x]++
//         }
//         else {
//             hashmap[x] = 1
//         }

//     }
//     // console.log(balls)
//     // console.log(hashmap)
//     let max = -Infinity;
//     for(let key in hashmap){
//         if(hashmap[key] > max){
//             max = hashmap[key]
//         }
//     }
//     // console.log(max)
//     return max
// };

// // countBalls(1,10)
// countBalls(8,16)