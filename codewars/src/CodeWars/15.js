//Given an integral number, determine if it's a square number:



const isSquare = (n) =>{
    if(n === 0){
        return true
    } else {
        return n > 0 && Math.sqrt(n) % 1 === 0;
    }
}




