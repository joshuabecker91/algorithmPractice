

var findContentChildren = function(g, s) {
    let children = g.sort((a,b) => a-b) // console.log("children", children)
    let cookies = s.sort((a,b) => a-b) // console.log("cookies", cookies)
    
    let happyChilden = []
    let i = 0;
    let j = 0;
    let numOfCookies = cookies.length
    while(i <= numOfCookies){
        // console.log("before", "cookies", cookies, "happyChilden", happyChilden, "children", children)
        if(cookies[i] >= children[j]){
            happyChilden.push(cookies.shift())
            j++
        }else{
            // console.log("not satisfied")
            i++
        }
        // console.log("after", "cookies", cookies, "happyChilden", happyChilden, "children", children)
    }
    console.log(happyChilden.length)
    return happyChilden.length
};

// findContentChildren([1,2,3], [1,1])
findContentChildren([10,9,8,7], [5,6,7,8])



// var findContentChildren = function(g, s) {
    // sort children ascending
    // sort cookies ascending

    //new array for satisfied


    // loop

        // if
        // child is satisied and eats the cookie

        // else
        // itterate to next cookie 

    // return array length 

// };