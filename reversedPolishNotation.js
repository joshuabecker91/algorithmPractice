


function rpn(inputs){
    let array = []

    for(let i = 0; i < inputs.length; i++){
        if(Number.isInteger(inputs[i])){
            array.push(inputs[i]);
        }
        else{
            if(inputs[i] == "+"){
                array.push( array[0] + inputs[i-1]);
                console.log(array)
            }
            else(inputs[i] == "-")
        }
    }
}

// .pop()
// .push()

// rpn(  [ 4 , 2 , '+' , 3 ,'*']  )

rpn(  [ 3 , 4 , 'x' , 5 , 7, '*', '+']  )

// rpn(  [ 4 , 2 ,'+' , 3 ,'*']  )