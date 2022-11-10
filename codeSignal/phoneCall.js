

// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.

// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

// Example

// For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be
// solution(min1, min2_10, min11, s) = 14.

function solution(min1, min2_10, min11, s) {
    let cost = 0;
    let minutes = 0;
    let balance = s;
    for(let i = 1; i <= s; i++){
        // console.log(i, cost, s)
        if(cost >= s){
            break
        }
        else if(i == 1 && balance >= min1){
            cost += min1;
            minutes += 1;
            balance -= min1;
            console.log(i, minutes, cost, s, balance, "first")
        }
        else if(i > 1 && i <= 10 && balance >= min2_10){
            cost += min2_10;
            minutes += 1;
            balance -= min2_10;
            console.log(i, minutes, cost, s, balance, "second")
        }
        else if(i > 10 && balance >= min11) {
            cost += min11;
            minutes += 1;
            balance -= min11;
            console.log(i, minutes, cost, s, balance, "third")
        }
    }
    console.log(minutes);
    return minutes;
}

// solution(3, 1, 2, 20);
// solution(2, 2, 1, 2);

solution(10, 1, 2, 22);




// can also do it this way - while the balance is less than cost for that itteration. while loop.

// function phoneCall(min1, min2_10, min11, s) {
//     let totalCents = s;
//     let callInMin = 0;
//     totalCents -= min1;
//     callInMin++

//     while (totalCents >0){
//         callInMin ++
//         totalCents -= min2_10
//         console.log('e',callInMin)
//         if (callInMin == 10){
//             break
//         }
//     }
//     //8min left
//     let leftoverMin = Math.floor(totalCents/min11)
//     callInMin += leftoverMin
//     return callInMin
// }




function solution(min1, min2_10, min11, s) {
    let result = 0;
    let i = 0;

    while (result <= s) {
        i++;
        if (i == 1) result += min1;
        if (i >= 2 && i <= 10) result += min2_10;
        if (i > 10) result += min11;
    }

    return --i;
}