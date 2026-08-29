/* 3. Puras vs. impuras

1. Escribir una función impura applyViralBoost(songs, multiplier) que recorra el array
con un for y multiplique directamente el plays de cada canción (mutando la playlist
original). */

const { songs } = require("./playlist.js"); // importar el array de canciones desde playlist.js

const applyViralBoost = (songs, multiplier) => {
    for (let i = 0; i < songs.length; i++) {
        songs[i].plays *= multiplier; // multiplicar directamente el plays de cada canción
    }
}


/*2. Probarla sobre la playlist del ejercicio 1 y confirmar que, después de llamarla, el array original
quedó modificado. */

console.log("Prueba de funcion impura applyViralBoost:");
console.log("Original antes del boost:", songs[0].plays); // Imprime: 15000
applyViralBoost(songs, 2); // Aplicar el boost con un multiplicador de 2
console.log("Después del boost:", songs[0].plays); // Imprime: 300000, confirmando que el array original fue modificado

    // se concluye que la función applyViralBoost es impura porque 
    // modifica directamente el array original de canciones, 
    //en lugar de devolver un nuevo array con los cambios.


/*3. Reescribirla como una función pura withViralBoost(songs, multiplier) que devuelva
un array nuevo, sin modificar el original (usar map y spread de objetos). */

const withViralBoost = (songs, multiplier) => {
    return songs.map(song => {
        return { ...song, plays: song.plays * multiplier }; // crear un nuevo objeto con el plays multiplicado
    });

    // se usa el metodo map para recorrer el array de canciones 
    //y crear un nuevo array con los objetos modificados,
}

/*4. Confirmar que, después de llamar a la versión pura, songs sigue intacto.*/

console.log("Prueba de funcion pura withViralBoost:");
console.log("Original antes del boost:", songs[0].plays); // Imprime: 300000
const boostedSongs = withViralBoost(songs, 2); // Aplicar el boost con un multiplicador de 2
console.log("Después del boost (nuevo array):", boostedSongs[0].plays); // Imprime: 600000, confirmando que se creó un nuevo array
console.log("Original después del boost:", songs[0].plays); // Imprime: 300000, confirmando que el array original sigue intacto