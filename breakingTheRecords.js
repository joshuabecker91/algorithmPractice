
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record for most points and least points in a game. 
// Points scored in the first game establish her record for the season, and she begins counting from there.

// Find the number of times Maria breaks her records for most and least points scored during the season.

// The second line contains  space-separated integers describing the respective values of

// scores = [ 10 5 20 20 4 5 2 25 1 ] 


function breakingRecords(scores) {
    let recordWin = 0;
    let recordLose = 0;
    let max = scores[0];
    let min = scores[0];
    for(let i = 0; i < scores.length; i++){
        if(scores[i] > max){
            max = scores[i]
            recordWin += 1;
        }
        if(scores[i] < min){
            min = scores[i]
            recordLose += 1;
        }
    }
    console.log(recordWin, recordLose);
    return [recordWin, recordLose];
}


// breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42,])