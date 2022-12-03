



function oddNumbers(l, r) {
    let count = 0;
    let solution = []
    for(let i = l; i <= r; i++){
        if(i <= 1){
            console.log("none")
            
        }
        else if(i % 2 != 0){
            count++
            solution.push(i)
        }
    }
    console.log(solution)
    console.log(count)
    return solution
}

oddNumbers(2,5)
