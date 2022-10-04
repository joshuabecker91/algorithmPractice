
// What is the total maximum value of the items you can take with you, 
// - you can't come back for the items later?

// value1
// weight1

// value2
// weight2


function solution(value1, weight1, value2, weight2, maxW) {
    let treasure = 0;
    if(weight1 > maxW && weight2 > maxW){
        treasure = 0;
        return treasure;
    }
    if(weight1 + weight2 <= maxW){ // if you can carry both
        treasure = value1 + value2;
        return treasure;
    }
    // ---------------------------------both items too heavy - decide which
    if(weight1 <= maxW && weight2 <= maxW){
        if(value1 >= value2){
            treasure = value1;
            return treasure;
        }
        if(value1 <= value2){
            treasure = value2;
            return treasure;
        }
    }
    if(weight1 <= maxW && weight2 > maxW){
        treasure = value1;
        return treasure;
    }
    else{
        treasure = value2;
        return treasure;
    }
    // console.log(treasure);
    // return treasure;
}

solution(10,2,11,3,1);
// solution(15,2,20,3,2);
// solution(10,5,6,4,8);



    // if(weight1 <= maxW && value1 >= value2){
    //     treasure = value1;
    // }
    // if(weight2 <= maxW && value1 <= value2){
    //     treasure = value2;
    // }
    // else{
    //     treasure = 0;
    // }



// else if(weight1 >= weight2 && weight1 <= maxW){ // carry the first one
//     treasure = value1;
// }
// else if(weight1 <= weight2 && weight2 <= maxW){ // carry the second one
//     treasure = value2;
// }
// else{
//     treasure = 0;
// }

// (weight2 <= maxW){