


function hackerrankInString(s) {
    let count = 0; //matching letters (contains same letters/exists)
    let hackerrank = 'hackerrank'
    for (let i = 0; i < hackerrank.length; i++) {
        for (let x = i; x < s.length; x++) {
            if (s[x] == hackerrank[i]) {
                count += 1;
                console.log(count, s[x], hackerrank[i], s.length, hackerrank.length)
                break
            }
        }
    }
    if (count == hackerrank.length) {
        console.log("YES")
        return "YES"
    }
    else {
        console.log("NO")
        return "NO"
    }
}

hackerrankInString('hereiamstackerrank');

// hackerrankInString('hackerrank');
// hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt');

// hackerrankInString('hhhhaaaaackkkkerrrrrrrrank');

// hackerrankInString('knarrekcah');
// hackerrankInString('hackeronek');
// hackerrankInString('abcdefghijklmnopqrstuvwxyz');
// hackerrankInString('rhackerank');
// hackerrankInString('ahankercka');
// hackerrankInString('hacakaeararanaka');
// hackerrankInString('crackerhackerknar');
// hackerrankInString('hhhackkerbanker');




// function hackerrankInString(s) {
// function main(s) {
//     var q = parseInt(readLine());
//     for (var a0 = 0; a0 < q; a0++) {
//         var s = readLine();
//         console.log(s.match(/H.*A.*C.*K.*E.*R.*R.*A.*N.*K/i) ? 'YES' : 'NO');
//     }
// }


// main('hackerrank');




    // let hackerrank = "hackerrank".split("");

    // for (let i = 0; i < s.length; i++){
    //     if (s[i] === hackerrank[0]){
    //         hackerrank.shift();
    //     }
    //     if (hackerrank.length === 0){
    //         console.log("YES");
    //         break;
    //     }
        
    //     if (i === s.length - 1){
    //         console.log("NO");
    //         break;
    //     }
    // }







// let newStr = ''
// let i = 0;
// while (i < str.length) {
//     switch (str[i]) {
//         case 'h':
//             if (newStr.length == 0) {
//                 newStr += str[i]
//             }
//             break
//         case 'a':
//             if (newStr.length == 1 || newStr.length == 9) {
//                 newStr += str[i]
//             }
//             break
//         case 'e':
//             if (newStr.length == 4) {
//                 newStr += str[i]
//             }
//             break
//         case 'r':
//             if (newStr.length == 5 || newStr.length == 6) {
//                 newStr += str[i]
//             }
//             break
//         case 'n':
//             if (newStr.length == 8) {
//                 newStr += str[i]
//             }
//             break
//     }
//     i++
// }
// if (newStr == 'hackerrank') {
//     return 'YES'
// } else {
//     return 'NO'
// }







// if(s.includes('hackerrank')){
//     console.log("yes")
// }
// else {
//     console.log("no")
// }





// for(let i = 0; i < s.length; i++){
//     s.splice(2, 0, "Lemon", "Kiwi");
//     if( s[i], ..., s[i + s.length]  == 'hackerrank'){
//         console.log("yes")
//     }
//     else {
//         console.log("no")
//     }
// }
