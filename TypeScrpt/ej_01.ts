/* Tipos básicos
1. Declarar title: string , year: number y isAvailable: boolean con valores de un
libro cualquiera. */ 

const title: string = "El Principito";
const year: number = 1943;
const isAvailable: boolean = true;


/* 2. Declarar pages: number[] con al menos 3 números. */
const pages: number[] = [96, 120, 150];

/* 3. Declarar coordinates: [number, number] como una tupla, y confirmar que asignarle un
tercer valor da error de compilación. */

const coordinates: [number, number] = [40.7128, -74.0060];
// coordinates.push(100); // Esto dará error de compilación porque 
// la tupla solo acepta dos valores.


// está mal planteado el ejercicio 
