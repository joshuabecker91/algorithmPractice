
// Given a string array chars and an integer k, return an array of the k most frequent elements in descending order of frequency. If there is no difference in frequency, we should default to the order in which the elements originally appeared.

// eg: ['a', 'b', 'a', 'b', 'b', 'c'], k = 2 => ['b', 'a'].
// ['a', 'b', 'a', 'b', 'b', 'c'], k = 1 => ['b']
// ['a', 'b', 'a', 'b', 'b', 'c'], k = 3 => ['b', 'a', 'c']


function frequentChars(array, k){
    let h = {}
    for(let i = 0; i < array.length; i++){
        let x = array[i]
        if(h[x]){
            h[x][0]++
        } else {
            h[x]=[1,i]
        }
    }
    // console.log(h)

    let arr = Object.entries(h)
    // console.log(arr)
    arr.sort((a, b) => {
        // sort by frequency if not equal
        if (a[1][0] !== b[1][0]) {
            return b[1][0] - a[1][0];
        } else {
            // sort by index if frequencies are equal
            return a[1][1] - b[1][1];
        }
    })
    console.log(arr)
    return arr 
}

// frequentChars(['a', 'b', 'a', 'b', 'b', 'c'], 2)
frequentChars(['c', 'b', 'a', 'b', 'a', 'b', 'b', 'c'], 2)

// [[a, 2, 0], [b, 3, 1], [c, 1, 5]]
