

function solution(votes, k) {
    let count = 0;
    let max = Math.max(...votes);
    let maxCount = 0;

    for(let i = 0; i < votes.length; i++){
        if((votes[i] + k) > max){
            count++
        }
        if(votes[i] === max){
            maxCount++
        }
        // console.log(votes[i], max, (votes[i] + k))
    }

    if(count === 0 && maxCount < 2){
        count++
    }

    // console.log(count)
    return count
}

solution([2,3,5,2], 3)