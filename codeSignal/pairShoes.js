

function solution(shoes) {
    let hL = {}
    let hR = {}
    for(let i = 0; i < shoes.length; i++){
        let size = shoes[i][1]
        if(shoes[i][0] == "0"){
            if(hL[size]){
                hL[size]++
            } else {
                hL[size] = 1
            }
        }
        if(shoes[i][0] == "1"){
            if(hR[size]){
                hR[size]++
            } else {
                hR[size] = 1
            }
        }
    }
    console.log(hL)
    console.log(hR)

    for(let key in hL){
        console.log(hL[key], hR[key])
        if(hL[key] != hR[key]){
            console.log(false)
            return false
        }
    }
    for(let key in hR){
        console.log(hL[key], hR[key])
        if(hL[key] != hR[key]){
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true 
}

// solution([[0, 21], [1, 23], [1, 21], [0, 23]])
solution([[0, 21], [1, 23], [1, 21], [1, 23]])





// if(Object.entries(hL) != Object.entries(hR)){
//     console.log(false)
//     return false
// }
// console.log(true)
// return true 