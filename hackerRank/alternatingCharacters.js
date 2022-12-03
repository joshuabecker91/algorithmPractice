

// You are given a string containing characters  and only. 
// Your task is to change it into a string such that there are no matching adjacent characters. 
// To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.


function alternatingCharacters(s) {
    let output = "";
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if((s[i] != s[i+1])){
            output += (s[i])
        }
        else if(s[i] == s[i+1]){
            count += 1;
        }
    }
    console.log(count)
    return count
}

alternatingCharacters("AAAA");
alternatingCharacters("BBBBB");
alternatingCharacters("AAABBB");
