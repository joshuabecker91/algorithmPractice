

// // function solution(string1, string2) {

//     //     indexOf(i)
//     for(let i = 0; i < string1.length; i++){
//         if(string1[i] == string1[i]){
//             continue
//         } 
//         else if(string1[i] = string2[i])

//         string1[i] = string2[i] //if either is true 
//     }



function solution(string1, string2) {
    // let array = "abcdefghijklmnopqrstuvwxyz"
    let hashmapA = {}
    let hashmapB = {}

    for (let i = 0; i < string1.length; i++) {

        let letterA = string1[i]
        if (hashmapA[letterA]) {
            hashmapA[letterA]++
        }
        else {
            hashmapA[letterA] = 1
        }

        let letterB = string2[i]
        if (hashmapB[letterB]) {
            hashmapB[letterB]++
        }
        else {
            hashmapB[letterB] = 1
        }
    }

    console.log(hashmapA)
    console.log(hashmapB)

    for (let key in hashmapA) {
        if (hashmapA[key] != hashmapB[key]) {
            console.log("false")
            return false
        }
        // else {
        //     let x = array.indexOf(hashmapB[key])
        //     array[x+1] || array[x-1]
        // }
    }
    console.log("true")
    return true
}

// solution("aacb", "aabc")


solution("aaxxaaz", "aazzaay")





// function solution(string1, string2) {
//     if (string1.length !== string2.length) return false;
//     let hashmap = {};

//     for (let i = 0; i < string1.length; i++) {
//         let char1 = string1[i]
//         let char2 = string2[i]

//         if (!(hashmap[char1])) {
//             let outputs = new Set(Object.values(hashmap));
//             if (outputs.has(char2)){
//                 return false;
//             }
//             hashmap[char1] = char2;

//         } else if (hashmap[char1] !== char2) {
//             return false;
//         }
//     }

//     return true;
// }




// function solution(string1, string2) {
//     let hash = {};
//     let used = {};

//     for (let i = 0; i < string1.length; i++) {
//         let current = string1[i];
//         if (!hash[current]) {
//             if (used[  string2[i]  ]) {
//                 return false;
//             }
//             hash[current] = string2[i];
//             used[string2[i]] = true;
//         } else {
//             if (string2[i] != hash[current]) return false;
//         }
//     }

//     return true;
// }



// function solution(string1, string2) {
//     var storage = {};
//     var second = {};

//     for (var i = 0; i < string1.length; i++) {
//         if (!storage[string1[i]]) {
//             storage[string1[i]] = string2[i]
//         } else {
//             if (storage[string1[i]] !== string2[i]) {
//                 return false;
//             }
//         }
//     }

//     for (var i = 0; i < string1.length; i++) {
//         if (!second[string2[i]]) {
//             second[string2[i]] = string1[i]
//         } else {
//             if (second[string2[i]] !== string1[i]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
