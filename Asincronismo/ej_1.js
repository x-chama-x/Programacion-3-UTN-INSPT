/* 1. Bloquear el hilo (para entenderlo, no para repetirlo)

1. Escribir la función blockFor(ms) del apunte (un while que ocupa la CPU durante ms
milisegundos). */

const blockFor = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Bloqueando el hilo
  }
}


/* 2. Ejecutar console.log('Antes') , blockFor(3000) , console.log('Después') en la
consola del navegador. */ 

console.log('Antes');
blockFor(3000);
console.log('Después');


/* 3. Mientras corre blockFor , intentar interactuar con la página (scroll, click en algo). Anotar
qué se observa. */

// se observa que la página no responde a ninguna 
// interacción mientras se ejecuta blockFor, ya que el hilo principal está bloqueado.

/* 4. Explicar en un comentario, con tus palabras, por qué pasa eso — conectándolo con que JS
tiene un solo hilo. */

// Esto ocurre porque JavaScript se ejecuta en un solo hilo, lo que significa que solo puede
// ejecutar una tarea a la vez. Cuando se llama a blockFor, el hilo principal queda ocupado.