

function solution(legs) {
    let result = [];
    let peopleLegs = 2;

    if (legs % 4 === 0) {
        result.push(0);
    }

    while (peopleLegs <= legs) {
        let catLegs = legs - peopleLegs;
        if (catLegs % 4 === 0) {
            result.push(peopleLegs / 2);
        }
        peopleLegs += 2;
    }

    return result;
}

solution(6)


// function solution(legs) {
//     let result = []
//     let remainingLegs = legs
//     let people = 0;
//     if(legs < 2){
//         result.push(0)
//         return result
//     } else{
//         while(remainingLegs >= 2){
//             if((remainingLegs - 2) )
//             people++
//             result.push(people)
//             remainingLegs-=2
//         }
//     }
//     console.log(result)
// }

