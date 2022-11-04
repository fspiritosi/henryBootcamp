// ### Repeatify

// Crear un método `repeatify` que este disponible para _todos_ los objetos 
//`Strings`. Esta función debe aceptar un `entero` que indica cuantas veces 
//el string tiene que repetirse. La función retorna el string repetido el 
//número de veces que indicamos. Controlar que el número no sea menor que cero, 
//y si es cero que devuelva `''` (String vacío).

// ```javascript
// console.log('hola'.repeatify(3));   //holaholahola


//solucion de un compañero

String.prototype.repeatify = function(x){
    let string = '';
    
    if(x === 0){
        return string;
    }

    for(let i = 0; i < x; i++){
        string += this.valueOf();
    }

    return string;
}


