

// Find max price combination within budget




function getMoneySpent(keyboards, drives, b) {

    // let totals = [];
    // let total = 0;
    let budget = b;
    let maximum = 0;

    for( let i = 0; i<keyboards.length; i++){
        for( let y = 0; y < drives.length; y++){
            let total = keyboards[i] + drives[y];
            if(total <= b && total > maximum) {
                maximum = total;
            }
        }
    }
    if(maximum == 0){
        return -1
    } else {
        return maximum;
    }
}


// console.log(maximum)
// return maximum;
            //     // totals.push(total);
            //     if (total > maximum){
            //         maximum = total;
            //     }
            //     if(maximum == 0){
            //         console.log(-1)
            //         return -1;
            //     } 
            // }


console.log(getMoneySpent([3,1], [5,2,8], 10));

// int: the maximum that can be spent,
//  or  if it is not possible to buy both items
// -1

// 3 1

// 5 2 8