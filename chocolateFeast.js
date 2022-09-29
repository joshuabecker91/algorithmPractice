
// promotion
// saving wrappers 
// wrappers = exchange for more chocolate

// int n: Bobby's initial amount of money
// int c: the cost of a chocolate bar
// int m: the number of wrappers he can turn in for a free bar

function chocolateFeast(n, c, m) {
    let purchased = 0;
    let wrappers = 0;
    let balance = n;

    let cost = c;
    let wrapperCost = m;

    while(balance >= cost){

        let bought = Math.floor(balance / cost)
        let traded = Math.floor(wrappers / wrapperCost);

        purchased += bought; 
        purchased += traded;

        balance = balance % cost;
        wrappers = wrappers % wrapperCost;
        // wrappers = wrapper - traded
        // wrappers = wrappers + (Math.floor(wrappers / wrapperCost))

    }
    console.log(purchased);
    return purchased
}

chocolateFeast(10,2,5);
chocolateFeast(12,4,4);
chocolateFeast(6,2,2);




// function chocolateFeast(n, c, m) {
//     // Write your code here
//     let balance = n;
//     let wrappers = 0;
//     let purchased = 0;
//     while(balance >= c){
//         purchased = purchased + Math.floor(balance/c);
//         let bought = Math.floor(balance/c);
//         balance = balance % c;
//         wrappers = wrappers + bought;
//         balance = balance + (Math.floor(wrappers/m) * c);
//         wrappers = wrappers%m;
//     }
//     console.log(balance)
//     console.log(purchased)
//     return purchased;
// }


let count = 0;
    //subtract c from n
    let bars = Math.floor(n/c)//has 5 bars
    let totalBars = bars;
    //find out how many he can return
    let remainder = bars%m//has 1 he cant return
    let returned = bars-remainder//has 4 can be returned
    count += bars
    while (bars > 0){
        bars = returned/m  //amount of new bars to buy,2
        totalBars = bars+remainder
        remainder=totalBars%m //has x amount he cant return, 1
        returned=totalBars-remainder
        count += bars
    }
    return count

