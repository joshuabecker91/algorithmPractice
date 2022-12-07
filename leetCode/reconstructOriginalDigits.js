

var originalDigits = function(s) {
    let hashmap = {}
    let string = s.split('')
    for(let i = 0; i < string.length; i++){
        let x = string[i]
        if(hashmap[x]){
            hashmap[x]++
        } else {
            hashmap[x] = 1
        }
    }
    // console.log(hashmap)

    let numberWords = ["zero","one","two","three","four","five","six","seven","eight","nine"]

    let objectWords = []

    for(let i = 0; i < numberWords.length; i++){
        let word = numberWords[i]
        // console.log(word)
        let wordMap = {}
        for(let j = 0; j < word.length; j++){
            let x = word[j]
            if(wordMap[x]){
                wordMap[x]++
            } else {
                wordMap[x] = 1
            }
        }
        // console.log(wordMap)
        objectWords.push(wordMap)
    }
    // console.log("this is objectWords", objectWords)

    let output = []


    //loop through and find out how many of each word you can construct
    for(let i = 0; i < objectWords.length; i++){
        let w = objectWords[i]
        let z = numberWords[i]
        // console.log("the word is", w)
        let addWord = true
        for(let key in w){
            // console.log(key, hashmap[key], key ,w[key])
            if(hashmap[key] == undefined || hashmap[key] < w[key]){
                addWord = false
            }
        }
        // console.log(addWord)
        if(addWord == true){
            for(let key in w){
                hashmap[key] -= w[key]
                // console.log(key, hashmap[key], key ,w[key])
            }
            // console.log(z)
            output.push(numberWords.indexOf(z)) //z, w
            i--
        }
        // console.log(output)
    }
    console.log(hashmap)
    console.log(output.join(''))
    return output.join('')
};

originalDigits("owoztneoer")
originalDigits("fviefuro")
originalDigits("zerozero")
originalDigits("zeroonetwothreefourfivesixseveneightnine")