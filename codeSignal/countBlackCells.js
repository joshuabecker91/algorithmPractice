

// [a,b,c,d]
// [e,f,g,h]
// [i,j,k,l]
// height / width 
// 3 / 4

function solution(n, m) {
    let rows = n;
    let columns = m;
    let a = (rows / columns);
    let distanceFromTop = 0;
    let blackCells = 0;

    for (let i = 1; i < columns; i++) {
        distanceFromTop += a;
        console.log(distanceFromTop)
        console.log(Math.ceil(distanceFromTop), Math.floor(distanceFromTop));
        if (i <= Math.ceil(distanceFromTop) && i >= Math.floor(distanceFromTop)) {
            console.log("between")
            blackCells++;
        }
    }
    console.log(blackCells);
    return blackCells;
}

solution(3, 4);


// function solution(n, m) {

//     y = x => x * n / m

//     r=0
//     for(i=0; i<m; i++) {
//        r += Math.floor(y(i+1)+1) - Math.ceil(y(i)-1) 
//     }

//     return r -2
// }




// function solution(n, m) {
//     var gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
//     return n + m + gcd(n, m) - 2;
// }



// function solution(n, m) {
//     if (n === m && m > 1) {
//         return (m - 1) * 3 + 1;
//     } else if (n === m && m === 1) {
//         return 1;
//     }

//     let sum = 0;
//     for (let i = 1; i <= m; i++) {
//         //console.log("L")
//         let x1 = i - 1;
//         let x2 = i;
//         if (x2 === m) {
//             sum += Math.floor(n / m * x2) - Math.floor(n / m * x1) === 0 ? 1 : Math.floor(n / m * x2) - Math.floor(n / m * x1);
//         } else {
//             if (n / m * x2 === Math.floor(n / m * x2)) {
//                 sum += Math.floor(n / m * x2) - Math.floor(n / m * x1) + 2;
//             } else {
//                 sum += Math.floor(n / m * x2) - Math.floor(n / m * x1) + 1;
//             }
//         }
//     }

//     return sum;
// }





// function solution(n, m) {
//     let rows = n;
//     let columns = m;

//     let slope = rows / columns
    
//     // One black square each column
//     let result = columns

//     // One black square each row (except for the last)
//     result += rows - 1
    
//     for (let i = 1; i < columns; i++) {
        
//         // Diagonal prefectly pass through a point
//         // so one more black square!
//         if ((slope * i) % 1 === 0) {
            
//             result++
//         }
//     }

//     return result
// }
