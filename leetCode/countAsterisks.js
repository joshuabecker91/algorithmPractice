

// CORRECT works 100% test cases beats 85% on time and 44% space
var countAsterisks = function(s) {
    let counting = false
    let totalStars = 0;
    let starsInsidePairs = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "*"){
            totalStars++
            if(counting == true){
                starsInsidePairs++
            }
        }
        if(s[i] == "|"){
            if(counting == true){
                counting = false 
            } else {
                counting = true
            }
        }
    }
    // console.log(totalStars, starsInsidePairs)
    // console.log(totalStars - starsInsidePairs)
    return totalStars - starsInsidePairs
};

countAsterisks("l|*e*et|c**o|*de|")


// let split = s.split("|")
// console.log(split)


// Refactored - Clean
var countAsterisks = function(s) {
    let counting = false
    let totalStars = 0;
    let starsInsidePairs = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "*"){
            totalStars++
            if(counting == true) starsInsidePairs++
        }
        if(s[i] == "|"){
            counting == true ? counting = false : counting = true
        }
    }
    return totalStars - starsInsidePairs
};