// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
    // Write your code here.

    const sum = array.reduce((a,e) => {
        if (Array.isArray(e)) return a + productSum(e, depth+1)
        return a + e;      
    }, 0);

    return sum * depth;
}

// Do not edit the line below.
exports.productSum = productSum;

    
  //     console.log(array.flat(3));
  //     let sumi = 0;
  //     let sumj = 0;
  //     let sumx = 0;
  //     let result = 0;

  //     array.flat(3)
  //     for(let i=0; i<array.length; i++){ // looking inside each array[i]
  //         if(typeof(arr[i]) == "number"){
  //             sumi += i
  //         }
  //         else(arr[i].flat()    ){

  //             if(){

  //             sumj += j
  //             }
  //             else(){

  //             sumx
  //             }
  //         }

  //     }

  //     totali = sumi * 1
  //     totalj = sumj * 2
  //     totalx = sumx * 3
    
  //     result = totali + totalj + totalx
  //     return result;
  // }

          //   array[i]

          // for(let j=0; j<array.length; j++){ // looking inside each array[[j]]
          //     sumj += array[j]
          //     function sumx() 
          //         for(let x=0; x<array.length; x++){ // looking inside each array[[[x]]]
          //         sumx += array[x]
          //     } 
          // }
    
          // // if(i=int)
          // typeof i 
    
      // for(let i=0; i<array.length; i++){ // looking inside each array[i]
      //     sumi += array[i]
      //     for(let j=0; j<array.length; j++){ // looking inside each array[[j]]
      //         sumj += array[j]
      //         for(let x=0; x<array.length; x++){ // looking inside each array[[[x]]]
      //             sumx += array[x]
      //         } 
      //     }
      // }

                  // console.log(totalx);

      // let temp = arr[i]

      // array[ 2 ] [ 0 ]

      // array = [5, 2, [7,-1], 3, [6, [-13, 8] ,4]]
      // array = [5, 2, 12, 3, -10]
      // 12
      // Three levels deep = sum * 3
      // Two levels deep = sum * 2
      // One level deep = sum * 1

      // if(){
        
      // }
      // else if(){
        
      // }
      // else{
        
      // }
