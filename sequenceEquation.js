
// p = [5,2,1,3,4]
// p  [  p[4] ]

// let x = [1,2,3,4,5]
// x = 1 is in the 3rd position of p array      == 3, go find 3 in p array and tell us position
// now find the index/position of that value    4th position
// then y is equal to the value of that index position    p [ p[4] ]


function permutationEquation(p) {
    // let x = [1,2,3,4,5] //for each value
    let j = []
    let y = []
    for(let x = 1; x < 6; x++){
        for(let i = 0; i < p.length; i++){
            if(p[i] == x){
                console.log("first test", "value is ", p[i], " index is ", i)
                j.push(i+1)
            }
        }
    }
    // now we have identified index positions for where p[i] == x
    // above here is correct 
    console.log(j)

    for(let x = 1; x < 6; x++){
        for(let i = 0; i < j.length; i++){
            if(p[i] == j[(x-1)]){
                console.log("second test", "value is ", p[i], " index is ", i, j[x], x)
                y.push((p[i]))
            }
        }
    }

    // y.sort((a,b) => a-b)
    // console.log(y)
    console.log(y)
    return y
}

permutationEquation([5,2,1,3,4]);

// permutationEquation([4,3,5,1,2]);

// let temp = p[i]
// console.log(temp)
// for(let j = 0; j <p.length; j++){
//     if(x[i] == j[i]){
//         temp = p[ j[i] ]
//     }
// y.push(p[i])
// console.log(y)