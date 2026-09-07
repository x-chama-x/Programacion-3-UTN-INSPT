/* 3. Orden de ejecución: sync vs. setTimeout
1. Escribir tres console.log — uno antes, uno dentro de un setTimeout(fn, 0) , y uno
después — como en el ejemplo del apunte. */

/*console.log('Antes');
const timeoutId = setTimeout(() => {
  console.log('Dentro del setTimeout');
}, 0);

console.log('Después');

// 2. Antes de ejecutar, predecir el orden de salida en un comentario.

// Se espera que el orden de salida sea:
// Antes
// Después
// Dentro del setTimeout */

/* 4. Repetir el ejercicio, pero esta vez con dos setTimeout distintos: uno con 1000 ms y otro
con 500 ms, escritos en ese orden en el código. ¿En qué orden se ejecutan? */

//console.log('Antes');

setTimeout(() => {
  console.log('Dentro del setTimeout de 1000 ms');
}, 1000);

setTimeout(() => {
  console.log('Dentro del setTimeout de 500 ms');
}, 500);

// se ejecutará primero el setTimeout de 500 ms y luego el de 1000 ms, 
//ya que el tiempo de espera es menor para el primero.