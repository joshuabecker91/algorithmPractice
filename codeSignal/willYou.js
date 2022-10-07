

function solution(young, beautiful, loved) {
    if(!loved && !young && !beautiful){
        console.log("does not contradict")
        return false
    }

    else if(young && beautiful && !loved){
        console.log("contradicts")
        return true
    }

    else if(loved && (!young || !beautiful)){
        console.log("contradicts")
        return true
    }

    else {
        console.log("it must be true")
        return false
    }

}

// solution(true,true,true);
solution(true,false,true);
// solution(false,false,false);