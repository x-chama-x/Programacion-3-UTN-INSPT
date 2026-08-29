/* 4. Inmutabilidad

1. Escribir una función addPlays(songs, songTitle, amount) que debería sumarle amount
al plays de la canción que tenga title === songTitle , sin mutar ni el array ni los
objetos originales. 


2. Implementarla combinando map con spread de objetos (no usar push , ni asignar
directamente sobre un elemento del array).*/


const { songs } = require("./playlist.js"); // importar el array de canciones desde playlist.js

const addPlays = (songs, songTitle, amount) => {
  return songs.map(song => {
    if (song.title === songTitle) {
      return { ...song, plays: song.plays + amount }; // crear un nuevo objeto con el plays actualizado
    }
    return song; // devolver la canción original si no coincide el título
  });
}

/* 3. Escribir un test manual: guardar la playlist original en una variable aparte antes de llamar a
addPlays , y después comparar (con console.log o assert ) que el original no cambió. */

const assert = require("assert");

// Guardar la playlist original en una variable aparte
const originalPlaylist = [...songs.map(song => ({ ...song }))]; // Clonar el array y los objetos

// Llamar a la función addPlays
const updatedPlaylist = addPlays(songs, "Eco", 500);

// Comparar que el original no cambió
console.log("Original playlist:", originalPlaylist);
console.log("Updated playlist:", updatedPlaylist);

// Usar assert para verificar que el original no cambió
assert.deepStrictEqual(songs, originalPlaylist, "La playlist original fue modificada");

// Verificar que la canción actualizada tiene el valor esperado
const updatedSong = updatedPlaylist.find(song => song.title === "Eco");
assert.strictEqual(updatedSong.plays, 150500, "El valor de 'plays' no se actualizó correctamente");

console.log("Test completado exitosamente.");