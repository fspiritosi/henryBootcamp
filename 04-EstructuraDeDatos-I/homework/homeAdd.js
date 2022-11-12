function factorial(n){
    let factor = 1;
    if(n < 0) return "No existe el factorial de un numero negativo"
    else if(n === 0) return 1
    else{
       
        for(let i = n; i >= 1 ; i--){
            factor = factor * i
        }
    }
    return factor
}

