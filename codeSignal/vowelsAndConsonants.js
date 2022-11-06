




// count the Math.abs() ABSOLUTE difference between the number of vowels 
// and the number of consonants in each word
// return the array of words in the ascending order of these absolute differences
// .sort((a,b)=> a-b)
// If the absolute difference is the same, sort the words in alphabetic order.
function solution(text) {
    let textArray = text.split(' ')
    console.log(textArray)
    let absoluteDifference = []
    let vowels = ['a','e','i','o','u']
    let hashmap = {}
    for(let i = 0; i < textArray.length; i++){
        let word = textArray[i]
        let vowelCount = 0;
        let consonantCount = 0;
        for(let j = 0; j < textArray[i].length; j++){
            console.log(word[j])
            if(vowels.includes(word[j])){
                vowelCount++
            } else {
                consonantCount++
            }
        }
        let difference = Math.abs(consonantCount-vowelCount)
        hashmap[word] = difference
        // absoluteDifference.push(difference)
        absoluteDifference.push([difference, word])
    }
    console.log(hashmap)
    // console.log(absoluteDifference, word)
    // console.log(absoluteDifference.sort((a,b)=> a[0]-b[0]))
    let sortedByDiff = absoluteDifference.sort((a,b)=> a[0]-b[0])
    console.log(sortedByDiff)
    // let sortedAlphabetically = sortedByDiff.sort((a,b)=> a[1]-b[1])
    let sortedAlphabetically = sortedByDiff.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
            return 0;
        });
    console.log(sortedAlphabetically)
    let outcome = []
    for(let i = 0; i < sortedByDiff.length; i++){
        outcome.push(sortedByDiff[i][1])
    }
    console.log(outcome)
    return outcome
    // && a[1]-b[1]
    // return absoluteDifference.sort((a,b)=> a[0]-b[0] && a[1]-b[1])
    // let words2 = textArray.sort()
    
    // console.log(words2)
    // return words2
    

    
    // console.log(textArray.sort((a,b)=> a-b))
    
    // absoluteDifference.sort((function(index){
    //     return function(a,b){
    //         return(a[index] === b[index] ? 0 : )
    //     }
    // }))
    // console.log(textArray.sort((a,b)=> a-b))
}



