

var findRestaurant = function(list1, list2) {
    let output = []
    let min = Infinity;
    for(let i = 0; i < list1.length; i++){
        if(list2.includes(list1[i])){
            // console.log("Yes", list1[i])
            let x = list1.indexOf(list1[i])
            let y = list2.indexOf(list1[i])
            let b = x + y
            if(b == min){
                output.push(list1[i])
                min = b
            } 
            else if(b < min){
                output = []
                output.push(list1[i])
                min = b
            }
            // console.log(output, min)
        }
    }
    // console.log(output)
    return output
};

findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])




// var findRestaurant = function(list1, list2) {
//     let hashmap = {}
//     // let word = ""
//     let min = Infinity;
//     for(let i = 0; i < list1.length; i++){
//         if(list2.includes(list1[i])){
//             console.log("Yes", list1[i])
//             let x = list1.indexOf(list1[i])
//             let y = list2.indexOf(list1[i])
//             let b = x + y
//             if(!hashmap[ list1[i] ]){
//                 hashmap[ list1[i] ] = b
//             }
//             console.log(hashmap)
//             if(b < min){
//                 // word = list1[i]
//                 min = b
//             }
//             console.log(min)
//         }
//     }
//     let output = []
//     for(let key in hashmap){
//         if(hashmap[key] == min){
//             output.push(key)
//         }
//     }
//     console.log(output)
//     return output
//     // if(min == Infinity){
//     //     min = 0;
//     // }
// };