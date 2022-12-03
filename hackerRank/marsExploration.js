
// Letters in some of the SOS messages are altered by cosmic radiation during transmission.
// determine how many letters of the SOS message have been changed by radiation
// let s = 'SESTOT'


function marsExploration(s) {
    let differenceCount = 0;
    let input = 'SOS'
    let recievedSignal = s;
    let loopCount = recievedSignal.length / 3
    let expectedSignal = input.repeat(loopCount)
    // console.log(expectedSignal)
    
    for(let i = 0; i < recievedSignal.length; i++){
        if(expectedSignal[i] != recievedSignal[i]){
            differenceCount += 1;
        }
    }
    console.log(differenceCount)
    return differenceCount
}

marsExploration('SOSSPSSQSSOR')

// Example:
// Expected signal: SOSSOSSOSSOS
// Recieved signal: SOSSPSSQSSOR