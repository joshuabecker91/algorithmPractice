

function solution(n) {
    let x = String(n).split('').reverse()
    console.log(x)
    for(let i = 0; i < x.length-1; i++){
        console.log(x[i])
        if(x[i] != 0){
            if(x[i] < 5){
                x[i] = 0;
                console.log(x)
                // return x
            }
            else{
                x[i] = 0;
                x[i+1] = (Number(x[i+1]) + 1);
                // console.log(x[i-1])
                console.log(x)
                // return x
            }
        }
    }
    x.reverse()
    console.log(x.join(''))
    return Number(x.join(''))
}

// solution(14)
// solution(15)
// solution(1234)
solution(1445)





// x = Math.round(x,1000)
// x.reverse()
// x.reverse()
// x.push(0);
// x.reverse()