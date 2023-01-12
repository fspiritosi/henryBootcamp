'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /*
  1- Elegir un elemento de la lista de elementos a ordenar, este será el pívote
  2- Mover los demas elementos de la lista a cada lado del pivote de manera que a un lado queden los menores y al otro los mayores.
     Los elmentos iguales al pivote pueden ser colocados tanto a derecha como a izq. dependiendo de la implementación deseada. 
     En este momento, el pivote ocupa exactamente el lugar que le corresponderá en la lista ordenada.
  3- La lista queda separada en dos sub lista, una formada por los elem. a la izq y otra por los de la der.
  4- Repetir este proceso de forma recursiva para cada sublista mientras estas contengan mas de un elemento. Una vez terminado el proceso
     todos los elementos estan ordendos.
  */
  //Punto de Corte o Caso Base
  if(array.length <=1 ){
    return array
  }

  let pivot = array[Math.floor(Math.random() * array.length)];

  let left = [];
  let rigth = [];
  let equal = [];

  for(var i = 0; i < array.length; i++){
    if(array[i] < pivot){
      left.push(array[i])
    }else if(array[i] > pivot){
      rigth.push(array[i])
    }else{
      equal.push(array[i])
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(rigth));


}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /*
  1 - Divide el conjunto en dos grupos iguales.
  2 - Ordena recursivamente los dos grupos
  3 - Junta (o mergea) los grupos ordenados.
  */
  //caso base
  if(array.length === 1) return array

  let division = split(array);
  let left = division[0];
  let rigth = division[1];
  
  return paste(mergeSort(left), mergeSort(rigth));
  
}

//funcion para dividir el arreglo

function split(array){
  let middle = Math.floor(array.length/2)
  let left = array.slice(0, middle);
  let rigth = array.slice(middle); //no hace falta pasar el segundo valor si el corte es hasta el final 
  return [left, rigth]
};

//funcion para unir adecuadamente

function paste(left, rigth){
  let array = [];
  let leftIndex = 0;
  let rigthIndex = 0;

  while (leftIndex < left.length && rigthIndex < rigth.length) {
    if(left[leftIndex] < rigth[rigthIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }else{
      array.push(rigth[rigthIndex]);
      rigthIndex++;
    }
  }
  return array.concat(left.slice(leftIndex))

}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
