/* 2. Tipar funciones
Escribir formatPrice(amount: number, currency?: string): string que devuelva
"$amount currency" , usando 'ARS' como valor por defecto.*/

const formatPrice = (amount: number, currency: string = 'ARS'): string => {
    return `$${amount} ${currency}`;
};

/* 2. Escribir sumAll(...numbers: number[]): number que sume una cantidad variable de
argumentos.*/

const sumAll = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

/* 3. Escribir logWarning(message: string, code?: number): void que solo imprima por
consola (sin return ).*/

const logWarning = (message: string, code?: number): void => {
    if (code) {
        console.warn(`Warning ${code}: ${message}`);
    } else {
        console.warn(`Warning: ${message}`);
    }
};

// pruebo la funcion logWarning("Este es un mensaje de advertencia", 404);

logWarning("Este es un mensaje de advertencia", 404);


/* en este ejercicio se tocan estos conceptos: 

- tipos en parámetros
- retorno de funciones
- parámetros opcionales
- valores por defecto
- void

esto ayuda a que el código sea más legible y fácil de mantener, 
ya que se puede ver claramente qué tipo de datos 
se espera en cada función y qué tipo de datos se devuelve. 
Además, los parámetros opcionales y los valores por defecto 
permiten una mayor flexibilidad en la llamada a las funciones.

https://www.typescriptlang.org/play/ --> pagina oficial de TypeScript 
para probar el código en línea.


*/ 

