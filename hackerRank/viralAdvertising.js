
// A single integer n the day number to return results


function viralAdvertising(n) {
    let shares = 5;
    let likes = 2;
    for(let i = 1; i < n; i++){
        shares = Math.floor(shares/2)*3;
        likes = likes + Math.floor(shares/2);
        console.log(shares, likes)
    }
    console.log(likes)
    return likes;
}

viralAdvertising(3)
