

function countTeams(skills, minPlayers, minLevel, maxLevel) {
    // finding all eligible players and sorting
    let fitSkillRange = []
    for(let i = 0; i < skills.length; i++){
        let player = skills[i]
        if(player >= minLevel && player <= maxLevel){
            fitSkillRange.push(player)
        }
    }
    fitSkillRange.sort((a,b)=> a-b)
    console.log(fitSkillRange)
// --------------------------------------------------------------------------------------



let stringArray = Array.from(fitSkillRange, String).join('')
console.log(stringArray)
// // Recursive solution for finding all possible combinations
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

// working on incorporating recursive combination method 
let teams = (fn("", stringArray, []))
// for loop if team . length > min push to array / or reduce 
console.log(teams)




    // let stringArray = Array.from(fitSkillRange, String).join('')
    // console.log(stringArray)
    // // // Recursive solution for finding all possible combinations
    // var fn = function(active, rest, a) {
    //     if (!active && !rest)
    //         return;
    //     if (!rest) {
    //         a.push(active);
    //     } else {
    //         fn(active + rest[0], rest.slice(1), a);
    //         fn(active, rest.slice(1), a);
    //     }
    //     return a;
    // }

    // // working on incorporating recursive combination method 
    // let teams = (fn("", stringArray, []))
    // // for loop if team . length > min push to array / or reduce 
    // console.log(teams)





    // --------------------------------------------------------------------------------------
    let eligibleTeams = []
    for(let i = 0; i < teams.length; i++){
        console.log(teams[i])
        if(teams[i].length >= minPlayers){
            eligibleTeams.push(teams[i])
        }
    }
    console.log(eligibleTeams)
    console.log(eligibleTeams.length)
    return eligibleTeams.length 
}

// countTeams([4,8,5,6],1,5,7) // 3 correct
// countTeams([4,8,5,6],2,5,7) // 1

countTeams([12,4,6,13,5,10],3,4,10) // 5
// skill levels = [12,4,6,13,5,10]
// minimum team number of players = 3
// minSkill = 4 inclusive
// maxSkill = 10 inclusive

// 4 5 6
// 4 5 6 10


// [12,4,6,13,5,10]
// [4,5,5,6,6,7,8,8,8,9,10,11,25]
// 4 8 25

    // thoughts
    // find every possibility
    // hashmap store in 
    // every possible combination
    // then go through length that fit criteria and return 



// function solve(x) {
//     if (x.length == 0) return console.log(0);
//     let arrays = [];
//     x.forEach(x => {
//         let min = { length: 99999999999999, f: true };
//         for (let i = arrays.length - 1; i >= 0; i--) {
//             let y = arrays[i];
//             if (x - y.last_value == 1) { // eligble group with min length
//                 if (min.length > y.length) min = y;
//             } else if (x - y.last_value > 2) break;
//         }
//         if (min.f) { /// if no group found. first case, diff is more than 1
//             min = {length:0};
//             arrays.push(min);
//         }
//         min.last_value = x; // only length and lastvalue matters
//         min.length++;
//     });
//     console.log(Math.min.apply(null, arrays.map(x=>x.length)));

// }






    
    // let combinations = [];
    // // need to use recursion to compile a list of all possible combinations with n up to 20 
    // var set = [],
    //     listSize = fitSkillRange.length,
    //     combinationsCount = (1 << listSize),
    //     combination;

    // for (var i = 1; i < combinationsCount ; i++ ){
    //     var combination = [];
    //     for (var j=0; j < listSize; j++){
    //         if ((i & (1 << j))){
    //             combination.push(list[j]);
    //         }
    //     }
    //     set.push(combination);
    // }

    // return set



        // // let teams = []
    // for(let i = 0; i < fitSkillRange.length; i++){
    //     for(let j = i; j < fitSkillRange.length; j++){
    //         let newArray = fitSkillRange.slice(i,j+1)
    //         console.log(newArray)
    //         if(newArray.length >= minPlayers){
    //             teams.push(newArray)
    //         }
    //     }
    // }
    // console.log(teams)
    // return teams.length