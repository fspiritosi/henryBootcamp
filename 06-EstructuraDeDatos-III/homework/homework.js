"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function(){
  //arbol es una hoja
  if(this.left === null && this.right === null){
    return 1;
  }

  //tiene un solo hijo a izq
  if(this.left !== null && this.right === null){
    return 1 + this.left.size();
  }

  //tiene un solo hijo a der
  if(this.left === null && this.right !== null){
    return 1 + this.right.size();
  }

  //tiene ambos hijos
  if(this.left !== null && this.right !== null){
    return 1 + this.left.size() + this.right.size();
  }
};

BinarySearchTree.prototype.insert = function(valor){
  //si es mayor --> der
  if(valor >= this.value){
    if(this.right !== null){
      this.right.insert(valor);
    } else {
      this.right = new BinarySearchTree(valor);
    }
  }
  //si es menor --> izq
  if(valor < this.value){
    if(this.left !== null){
      this.left.insert(valor);
    } else {
      this.left = new BinarySearchTree(valor);
    }
  }
};

BinarySearchTree.prototype.contains = function(valor){
  //si es el root
  if(valor === this.value) return true;

  //si es mayor que el nodo
  if(valor > this.value){
    if(this.right === null){
      return false;
    } else {
      return this.right.contains(valor);
    }
  }
  //si es menor que el nodo
  else {
    if(this.left === null){
      return false;
    } else {
      return this.left.contains(valor);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  //inorder
  if(order === 'in-order' || !order){   //izq - padre - der
    if(this.left !== null){
      this.left.depthFirstForEach(cb, order);
    }
    cb(this.value);
    if(this.right !== null){
      this.right.depthFirstForEach(cb, order);
    }
  } else if(order === "pre-order"){   //padre - izq - der
    cb(this.value);
    if(this.left !== null){
      this.left.depthFirstForEach(cb, order);
    }
    if(this.right !== null){
      this.right.depthFirstForEach(cb ,order);
    }
  } else { // izq - der - padre
    if(this.left !== null){
      this.left.depthFirstForEach(cb, order);
    }
    if(this.right !== null){
      this.right.depthFirstForEach(cb ,order);
    }
    cb(this.value);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array){
  if(!array){
    var array = [];
  }
  cb(this.value);

  if(this.left !== null){
    array.push(this.left);
  }

  if(this.right !== null){
    array.push(this.right);
  }

  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array);
  }

}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
