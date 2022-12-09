

var replaceWords = function(dictionary, sentence) {
    dictionary = dictionary.sort((a,b) => a.length - b.length)
    // console.log(dictionary)
    let sentenceArray = sentence.split(' ')
    // console.log(sentenceArray)
    for(let i = 0; i < sentenceArray.length; i++){
        for(let j = 0; j < dictionary.length; j++){
            // console.log(dictionary[j].length)
            let sentenceArrayWord = sentenceArray[i].slice(0, dictionary[j].length)
            // console.log(sentenceArrayWord)
            // if(sentenceArray[i].includes(dictionary[j])){
            if(sentenceArrayWord == dictionary[j]){
                // console.log("true", sentenceArray[i], dictionary[j])
                sentenceArray[i] = dictionary[j]
            }
        }
    }
    // console.log(sentenceArray.join(' '))
    return sentenceArray.join(' ')
};

replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery")





// var replaceWords = function(dictionary, sentence) {
//     dictionary.sort((a,b) => a.length - b.length);
//     let sentenceArr = sentence.split(" ");
//     for (let i=0; i<dictionary.length; i++) {
//         for (let j=0; j<sentenceArr.length; j++) {
//             if (dictionary[i].length < sentenceArr[i].length) {
//                 let length = dictionary[i].length;
//                 let check = sentenceArr[j].slice(0, length);
//                 console.log("DICT WORD:", dictionary[i], "LENGTH:", length, "CHECK:", check);

//                 if (dictionary[i] === check) {
//                     sentence = sentence.replace(sentenceArr[j], dictionary[i]);
//                     break;
//                 }
//             }
//         }
//         console.log("I:", i)
//     }
//     console.log("SENTENCE:", sentence);
//     return sentence;
// }