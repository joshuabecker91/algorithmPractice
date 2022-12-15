

var numSpecialEquivGroups = function(words) {

    let array = []

    for(let i = 0; i < words.length; i++){
        let hEven = {}
        let hOdd = {}
        for(let j = 0; j < words[j].length; j++){
            console.log(words[i][j])
            if(j % 2 == 0){
                let x = words[i][j]
                if(hEven[x]){
                    hEven[x]++
                } else {
                    hEven[x] = 1
                }
            }
            else {
                let y = words[i][j]
                if(hOdd[y]){
                    hOdd[y]++
                } else {
                    hOdd[y] = 1
                }
            }
        }
        console.log(hEven, hOdd, words[i])
        array.push([hEven, hOdd, words[i]])
    }
    console.log("this is the array", array)

    let h = {}

    for(let i = 0; i < array.length; i++){
        let evenChars = array[i][0]
        let oddChars = array[i][1]
        // console.log(Object.keys(allChars))
        // console.log(Object.values(allChars))
        // evenChars = [Object.keys(evenChars), Object.values(evenChars)]
        // oddChars = [Object.keys(oddChars), Object.values(oddChars)]
        // key = [evenChars, evenCharsCount, oddChars, oddCharCount]

        // let allChars = [evenChars, oddChars]

        let originalString = array[i][2]
        // console.log(allChars)
        // console.log(evenChars, oddChars, originalString)
        // if(Object.values(h) == allChars){
        //     console.log("yes")
        // }

        let jsonAllCharsEven = Object.keys(evenChars).sort().reduce(
            (obj, key) => {
                obj[key] = evenChars[key];
                return obj;
            },
            {}
        );

        let jsonAllCharsOdd = Object.keys(oddChars).sort().reduce(
            (obj, key) => {
                obj[key] = oddChars[key];
                return obj;
            },
            {}
        );

        let allChars = [jsonAllCharsEven, jsonAllCharsOdd]

        let jsonAllChars = JSON.stringify(allChars);
        // console.log(jsonAllCharsSorted)

        if(h[jsonAllChars]){
            h[jsonAllChars].push(originalString)
        } else {
            h[jsonAllChars] = [originalString]
        }
    }
    console.log(h)

    // if contains same letters push to solution possible longest array 

    let maxArray = []

    for(let key in h){
        if(h[key].length > maxArray.length){
            maxArray = h[key]
        }
    }
    console.log(maxArray)
    console.log(maxArray.length)
    return maxArray.length
};

numSpecialEquivGroups(["abcd","cdab","cbad","xyzz","zzxy","zzyx"])





// var numSpecialEquivGroups = function(A) {
//     const groups = new Set();
//     console.log(groups)
    
//     for (const word of A) {
//         const counts = new Array(52).fill(0);
        
//         for (let i = 0; i < word.length; i++) {
//             const index = word.charCodeAt(i) - 97;
            
//             if (i % 2 === 0) counts[index]++;
//             else counts[index + 26]++;
//         }        
        
//         const key = counts.join("#");
//         groups.add(key);
//     }
    
//     return groups.size;
// };


// numSpecialEquivGroups(["abcd","cdab","cbad","xyzz","zzxy","zzyx"])
