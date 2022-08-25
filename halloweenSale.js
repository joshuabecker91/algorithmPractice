// Specifically, the first game will cost  dollars, and every subsequent game will cost  dollars less than the previous one. 

// This continues until the cost becomes less than or equal to m dollars, after which every game will cost  dollars. How many games can you buy during the Halloween Sale?

// let = p;
// let = d;
// let = m;
// let = s;

// howManyGames has the following parameters:

// int p: the price of the first game
// int d: the discount from the previous game price
// int m: the minimum cost of a game
// int s: the starting budget


function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let price = p;
    let discount = d;
    let minimum = m;
    let budget = s;
    let totalMovies = 0;
    let moviesPurchased = [];

    while(budget >= minimum && budget >= price){
        totalMovies = totalMovies + 1;
        budget = budget - price;
        moviesPurchased.push(price);
        if(price - discount > minimum){
            price = price - discount;
        }
        else if(price - discount <= minimum){
            price = minimum;
        }
    }
    console.log(moviesPurchased);
    console.log(totalMovies);
    return totalMovies;
}

howManyGames(100, 1, 1, 99);