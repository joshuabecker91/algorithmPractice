
// In tennis, the winner of a set is based on how many games each player wins. 
// The first player to win 6 games is declared the winner unless their opponent
// had already won 5 games, in which case the set continues until one of the 
// players has won 7 games.

// Given two integers score1 and score2, your task is to determine if it is 
// possible for a tennis set to be finished with a final score of score1 : score2.

function solution(score1, score2) {
    if(score1 > 7 || score2 > 7){
        console.log("false", "bigger than 7")
        return false
    }
    else {
        if(score1 == 7 && Math.abs(score2 - score1) == 1){
            console.log("game over", score1, score2);
            return true
        }
        if(score1 == 7 && Math.abs(score2 - score1) > 2){
            console.log("false");
            return false
        }
        if(score1 > 5 && Math.abs(score2 - score1) > 1){
            console.log("game over", score1, score2);
            return true
        }
        if(score2 == 7 && Math.abs(score2 - score1) == 1){
            console.log("game over", score1, score2);
            return true
        }
        if(score2 == 7 && Math.abs(score2 - score1) > 2){
            console.log("false");
            return false
        }
        if(score2 > 5 && Math.abs(score2 - score1) > 1){
            console.log("game over", score1, score2);
            return true
        }
        else {
            console.log("false")
            return false
        }
    }
}

// solution(3,6);
// solution(8,5);
// solution(6,5);
// solution(7,5);
// solution(7,6);
solution(7,2);

