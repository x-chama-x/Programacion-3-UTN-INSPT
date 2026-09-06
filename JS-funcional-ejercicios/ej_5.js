/* 5. map

1. A partir de la playlist, generar un array titles con únicamente los títulos de las canciones.
*/

const { songs } = require('./playlist'); // importar el array de canciones desde playlist.js

const titles = songs.map(song => song.title); // generar un array con los títulos de las canciones usando map

//console.log(titles); // imprimir el array de títulos



// el metodo map sirve para crear un nuevo arreglo a partir del arreglo original


/*
2. Generar un array durationsFormatted con la duración de cada canción formateada
como "m:ss" (usando formatDuration del ejercicio 2).
*/

const { formatDuration } = require('./ej_2'); // importar la función formatDuration desde ej_2.js

const durationsFormatted = songs.map(song => formatDuration(song.durationSec)); // generar un array con las duraciones formateadas usando map y formatDuration

// console.log(durationsFormatted); // imprimir el array de duraciones formateadas

/*
3. Generar un array de strings usando la función describe del ejercicio 2 combinada con
map (en vez de un bucle manual).
*/

const { describe, formatters } = require('./ej_2'); // importar la función describe desde ej_2.js

const descriptions = songs.map(song => describe(song, formatters)); // generar un array de descripciones usando map y describe

console.log(descriptions); // imprimir el array de descripciones


