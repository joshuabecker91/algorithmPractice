// working solution

function pageCount(n, p) {
    // Write your code here
    let numOfPages = n;
    let pageNumber = p;
    let beginning = pageNumber;
    let end = numOfPages - pageNumber;

    if(pageNumber == 1){
        return 0
    }
    if( numOfPages%2 != 0 && numOfPages == pageNumber + 1){
        return 0;
    }
    if(end == 1 && pageNumber%2 != 0){
        return 1
    }
    if(pageNumber % 2 != 0){
        beginning = (beginning - 1)/2;
    }else{
        beginning = beginning / 2;
    }
    if(end%2 != 0){
        end =(end -1) / 2;
    }else{
        end = end/2
    }
    if(beginning < end){
        return beginning
    }else{
        return end
    }
}

// int n: the number of pages in the book
// int p: the page number to turn to

function pageCount(n, p) {
    let numOfPages = n;
    let pageNumber = p;

    let pageTurns = 0;
    let endPageTurns = 0;
    let pageCount = 1;

    for(let i = 0; i < numOfPages; i+=2){
        if(i == pageNumber){
            console.log("Right", i)
            pageTurns = i
            break
        } 
        else if (i == pageNumber - 1) {
            console.log("Left", i-1)
            pageTurns = i
            break
        }
        else{
            console.log("Not Yet", i)
            pageTurns += 1;
            pageCount += 2;
        }
    }

    endPageTurns = (((numOfPages-pageNumber) / 2))
    // % 2 
    // modulus and account for last page starting odd or even???
    
    if(pageTurns < endPageTurns){
        return pageTurns
    } else {
        return endPageTurns
    }
}

pageCount(6, 2)


// int: the minimum number of pages to turn
// lowest difference - from the front | and from the back


// pageTurns = (numOfPages/2) - pageNumber/2
// console.log(pageTurns)
// endPageTurns = (numbOfPages/2)

// for(let pageNum = 1; pageNum <= pageNumber; pageNum+=2){
//     // console.log(i)
//     // console.log(pageTurns)
//     if(pageNum == pageNumber){
//         return 0
//     }
//     if(pageNum == numOfPages){
//         return 0
//     }
//     if(pageNum == pageNumber){
//         console.log("right")
//     }
//     if(pageNum == pageNumber - 1){
//         console.log("left")
//     }
//     pageTurns += 1;
// }
// // count % 2
// console.log("page turns from beginning " + pageTurns)
// endPageTurns = (numOfPages/2) - pageTurns;
// console.log("page turns from end " + endPageTurns)
// if (pageTurns < endPageTurns) {
//     console.log("this is the answer!", pageTurns)
//     return pageTurns
// } else {
//     console.log("this is the answer!", endPageTurns)
//     return endPageTurns
// }