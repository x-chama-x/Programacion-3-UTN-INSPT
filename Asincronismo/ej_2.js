/* 2. Call stack, a mano
1. Escribir tres funciones multiply(a, b) , square(n) (que use multiply ) y
printSquare(n) (que use square ), como en el apunte. */ 

const multiply = (a, b) => a * b;

const square = (n) => multiply(n, n);

const printSquare = (n) => {
  const squared = square(n);
  console.log(`El cuadrado de ${n} es ${squared}`);
}

// 2. Llamar a printSquare(5) y confirmar el resultado.

printSquare(5); // El cuadrado de 5 es 25

// Orden exacto en el que se apilan y desapilan las funciones:
// 1. Se apila printSquare(5)
// 2. Se apila square(5)
// 3. Se apila multiply(5, 5)
// 4. Se desapila multiply(5, 5)
// 5. Se desapila square(5)
// 6. Se desapila printSquare(5)

