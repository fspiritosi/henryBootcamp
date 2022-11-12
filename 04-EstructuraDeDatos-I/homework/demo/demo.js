function factorial(n) {
    if(n === 0 || n === 1 ) return 1; //caso base o punto de reemplazo
    else if(n < 0) return "No existe factoriales para numeros negativos"

    return n * factorial(n-1);
}

console.log(factorial(3))