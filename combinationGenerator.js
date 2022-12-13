

// Recursive solution for generating all possible combinations 
function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    console.log(fn("", str, []))
    return fn("", str, []);
}

combinations("abcd")

// ["abcd", "abc", "abd", "ab", "acd", "ac", "ad", "a", "bcd", "bc", "bd", "b", "cd", "c", "d"]