/* 1. Let vs var
Escribir un for clásico con var i que guarde 3 funciones en un array, 
cada una de las cuales debería devolver el valor de i en 
el momento en que se creó la función.

*/

const functions = [];

for (var i = 0; i < 3; i++) {
  functions.push(function() {
    console.log(i);
  });
}

// Invocamos las funciones almacenadas en el array
functions[0](); // con var, esto devolverá 3, ya que i es 3 después del bucle
functions[1](); // con var esto devolverá 3, ya que i es 3 después del bucle
functions[2](); // con var esto devolverá 3, ya que i es 3 después del bucle

/* esto sucede porque var tiene un alcance de función, 
por lo que todas las funciones almacenadas en el array 
comparten la misma variable i, que al final del bucle es 3. */

/* 2 . Ahora hagamos lo mismo pero usando let en lugar de var */

const functionsLet = [];

for (let j = 0; j < 3; j++) {
  functionsLet.push(function() {
    console.log(j);
  });
}

// Invocamos las funciones almacenadas en el array
functionsLet[0](); // con let, esto devolverá 0
functionsLet[1](); // con let, esto devolverá 1
functionsLet[2](); // con let, esto devolverá 2

/* Esto sucede porque let tiene un alcance de bloque, 
por lo que cada iteración del bucle crea una nueva 
variable j que es independiente de las demás. */


