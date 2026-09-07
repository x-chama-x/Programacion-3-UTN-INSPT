/* 4. Trazando el event loop, paso a paso
1. Escribir el ejemplo del apunte con cinco líneas: console.log('A') , setTimeout(() =>
console.log('B'), 0) , console.log('C') , setTimeout(() => console.log('D'),
0) , console.log('E') . */

/*console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
setTimeout(() => console.log('D'), 0);
console.log('E'); */

/* 2. Antes de ejecutar, escribir en comentarios los siete pasos del razonamiento (qué se apila,
qué se delega, qué queda encolado y cuándo) — no solo el resultado final. */ 


// Paso 1: 'A' se apila en la pila de llamadas (call stack) 
//y se ejecuta inmediatamente. Se imprime 'A'.

// Paso 2: La función setTimeout se apila en la pila de llamadas. 
// Se delega el callback (() => console.log('B')) 
// al entorno de Web APIs con un temporizador de 0 ms. 
// setTimeout se elimina de la pila de llamadas.

// Paso 3: 'C' se apila en la pila de llamadas y se ejecuta inmediatamente. Se imprime 'C'.

// Paso 4: La función setTimeout se apila en la pila de llamadas. 
// Se delega el callback (() => console.log('D')) al entorno de Web APIs con un temporizador de 0 ms. 
// setTimeout se elimina de la pila de llamadas.

// Paso 5: 'E' se apila en la pila de llamadas y se ejecuta inmediatamente. Se imprime 'E'.


// Paso 6: El event loop verifica la pila de llamadas (call stack) y la encuentra vacía. 
// Los callbacks encolados en la cola de tareas (task queue) se mueven a la pila de llamadas uno por uno.
// Primero se ejecuta (() => console.log('B')), que imprime 'B'.

// Paso 7: El event loop mueve el siguiente callback (() => console.log('D')) a la pila de llamadas. 
// Se ejecuta y se imprime 'D'.

/* 3. Ejecutar y confirmar el orden real de salida. */

// pasa tal cual lo explicado.

/* 4. Modificar el ejemplo agregando un tercer setTimeout(() => console.log('F'), 0)
entre 'C' y 'D' . Volver a predecir el orden completo antes de ejecutar. */


console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
setTimeout(() => console.log('F'), 0);
setTimeout(() => console.log('D'), 0);
console.log('E');


// pasa como el ejemplo anterior, pero ahora se imprime 'F' antes de 'D' ya que se encoló primero.