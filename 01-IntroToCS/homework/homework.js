'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //recive un string y tiene que devolver un Num

  //Recorrer el string y obtener el valor en cada posicion
  //Guardar la posicion del valor
  //pasar el valor de la posicion a Number
  //multiplicar el valor en Numero x 2 elevado a la posicion
  //Sumar todos los resultados
  //devolver el valor obtenido de la suma

  let decimal = 0

  for(let i = 0; i < num.length; i++){
    decimal = decimal + (num[i] * Math.pow(2, num.length-1 - i )) //Aca va el Math.pow()
  }

  return decimal

}

function DecimalABinario(num) {
  // tu codigo aca
  //recive un Num y debe retornar un String

  if(num <= 0) return 0;

  let binary = [];

  while(num >=1){
    binary.unshift(num % 2);
    num = Math.floor(num / 2)
  }

  return binary.join(""); 

}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

