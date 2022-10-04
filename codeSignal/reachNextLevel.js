


// Given values experience, threshold and reward, 
// check if you reach the next level after killing the monster.



function solution(experience, threshold, reward) {
    let outcome = false;
    if(experience + reward >= threshold){
        outcome = true;
    }
    else{
        outcome = false;
    }
    console.log(outcome)
    return outcome;
}


// solution(10,15,5);
solution(10,15,4);
