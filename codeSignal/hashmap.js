

let charMap = {};

for (let i=0; i< s.length; i++) {
    if (!!charMap[s[i]]) {
        charMap[s[i]] ++;
    } else {
        charMap[s[i]] = 1;
    }
}
console.log("CHARMAP:", charMap);