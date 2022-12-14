

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






// function subset(arra, arra_size) {
//     var result_set = [],
//         result;


//     for (var x = 0; x < Math.pow(2, arra.length); x++) {
//         result = [];
//         i = arra.length - 1;
//         do {
//             if ((x & (1 << i)) !== 0) {
//                 result.push(arra[i]);
//             }
//         } while (i--);

//         if (result.length >= arra_size) {
//             result_set.push(result);
//         }
//     }

//     return result_set;
// }

// console.log(subset([1, 2, 3], 2));