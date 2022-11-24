'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let arr = [1];
  let factor = 2;

  while (num !== 1) {
    if(num % factor === 0){
      arr.push(factor);
      num = num / factor;

    }else{
      factor++
    }
  }
  
  return arr

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let flag = true;

  while(flag){
    flag = false;

    for(var i = 0; i < array.length -1; i++){
      if(array[i] > array[i+1]){
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        flag = true
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  /*Logica del Insertion Sort
  
  Compara el primer elemento con el segundo ---> si esta ordenado no hace nada, si no, los cambia.
  Segundo, compara el segundo con el tercero, si el tercero es mas chico, lo cambia con el segundo, y vuelve a comparar el primero con el segundo


  */

  for (let i = 1; i < array.length; i++) {
    let j = i-1;
    var aux = array[i];
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--; 
    }
    array[j+1] = aux
  }
  return array

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i = 0; i < array.length - 1; i++){
    let min = i;
    for(var j = i; j < array.length; j++){
      if(array[j] < array[min]){
        min = j;
      }
    }
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
