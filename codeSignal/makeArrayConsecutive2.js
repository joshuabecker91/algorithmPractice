


function solution(statues) {
    statues.sort((a,b) => a - b)
    console.log(statues)
    let count = 0;
    let newArray = []
    let min = statues[0]
    let max = statues[statues.length-1]
    for(let i = min; i < max; i++){
        console.log(i)
        if(statues.includes(i)){
            console.log("exists");
        }
        else if(i>0){
            console.log("needs", i);
            newArray.push(i);
            count++
        }

        // if(i == statues[i]){
        //     console.log("exists")
        // }
    }
    console.log(newArray);
    console.log(count);
    return newArray.length
    // return count;
}

solution([6, 2, 3, 8])

