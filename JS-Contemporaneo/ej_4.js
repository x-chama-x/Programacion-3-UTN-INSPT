/* 4. Parámetros por defecto, rest y spread

1. Escribir una función formatPrice(amount, currency = 'ARS') que devuelva el string
"$amount currency" (por ejemplo, formatPrice(1500) → "$1500 ARS" ).  */

const formatPrice = (amount, currency = 'ARS') => `$${amount} ${currency}`;

// ejemplo de uso

console.log(formatPrice(1500)); // "$1500 ARS"

/* 2. Escribir una función sumAll(...numbers) que sume una cantidad variable de argumentos
usando reduce */

const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, n);

// ejemplo de uso

console.log(sumAll(1, 2, 3, 4)); // 10

/* 3. Declarar un array prices = [100, 250, 80] y llamar a sumAll pasándole el array con
spread, sin escribir los números a mano. */

const prices = [100, 250, 80];

// ejemplo de uso
console.log(sumAll(...prices)); // 430