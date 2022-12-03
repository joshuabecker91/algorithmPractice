// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// let bill = [2,4,6]
// let anna = bill[2] //($6)
// calcBill = (2+4)/2 = 3
// if include bill[2]    (2+4+6)/2 = 6

function bonAppetit(bill, k, b) {
    
    let billTotal = 0;
    let heCharged = b;
    
    for(let i = 0; i < bill.length; i++){
        billTotal = billTotal + bill[i]
    }
    
    billTotal = (billTotal - bill[k]) / 2
    let difference = 0;
    difference = heCharged - billTotal
    if(difference == 0){
        console.log("Bon Appetit")
        return "Bon Appetit"
    } else {
        console.log(difference)
        return difference;
    }

}

// Math.abs(

console.log(bonAppetit([3,10,2,9], 1, 7))


// console.log("test")

// 1. Sum up array / 2     Brian Charged 
// 2. Sum up array - item anna did not eat / 2     compare with this value

// Input
// The first line contains two space-separated integers  and , the number of items ordered and the -based index of the item that Anna did not eat.
// The second line contains  space-separated integers  where .
// The third line contains an integer, , the amount of money that Brian charged Anna for her share of the bill.

// print the int amount of money Brian owes Anna 
