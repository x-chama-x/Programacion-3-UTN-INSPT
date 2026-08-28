/*
# 2. Funciones de primera clase
1. Escribir una función formatDuration (durationSec) que devuelva la duración 
en formato "m:ss" (por ejemplo, 225 segundos → "3:45", con los segundos siempre en dos dígitos).

*/

const formatDuration = (durationSec) => {
  const minutes = Math.floor(durationSec / 60);
  const seconds = durationSec % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;  

  // el return devuelve un string con el formato "m:ss", 
  // donde los segundos siempre tienen dos dígitos, 
  // usando padStart para agregar un cero a la izquierda si es necesario.
}

// ejemplo de uso
//console.log(formatDuration(225)); // "3:45"
//console.log(formatDuration(60));  // "1:00"
//console.log(formatDuration(5));   // "0:05"


/*

2. Guardar formatDuration dentro de un objeto formatters junto con 
otra función formatPlays (plays) que devuelva 
"Sin reproducciones" si plays === 0,o el número con separador de miles 
en caso contrario (por ejemplo, "1.800.000", usar toLocaleString('es-AR')).
*/

const formatters = {
  formatDuration: formatDuration,
  formatPlays: (plays) => {
    if (plays === 0) {
      return "Sin reproducciones";
    } else {
      return plays.toLocaleString('es-AR'); 
      // devuelve el número con separador de miles según 
      // la configuración regional de Argentina
    }
  }
};

// ejemplo de uso
//console.log(formatters.formatPlays(0));          // "Sin reproducciones"
//console.log(formatters.formatPlays(1800000));    // "1.800.000"
//console.log(formatters.formatPlays(123456789));  // "123.456.789"


/*



3. Escribir una función describe (song, formatters) 
que reciba una canción y el objeto formatters, y devuelva 
un string combinando title, artist, 
el resultado de formatters.formatDuration y el de formatters.formatPlays.

*/

const describe = (song, formatters) => {
  const { title, artist, durationSec, plays } = song;
  const durationFormatted = formatters.formatDuration(durationSec);
  const playsFormatted = formatters.formatPlays(plays);
  return `${title} - ${artist} (${durationFormatted}) - ${playsFormatted}`;
}



/*
4. Llamarla para cada canción de la playlist del ejercicio 1.
*/
const { songs } = require("./playlist.js");

songs.forEach(song => {
  console.log(describe(song, formatters));
});




