
// solutionNumber
// candlesNumber

function solution(candlesNumber, makeNew) {
    let burnt = 0;
    let leftovers = 0;

    // let x = (candlesNumber / makeNew);
    while(candlesNumber > 0){
        burnt += candlesNumber;
        // console.log(burnt);
        leftovers += candlesNumber;
        // console.log(leftovers);
        candlesNumber = 0;
        candlesNumber += Math.floor(leftovers / makeNew);
        leftovers = leftovers % makeNew;
        console.log("burnt", burnt,"leftover", leftovers,"candleNumber", candlesNumber,"makeNew", makeNew)
    }
    console.log(burnt);
    return burnt;
}

solution(5, 2);