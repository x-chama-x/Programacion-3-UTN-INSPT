/*
# 1. La playlist
1. Crear un archivo playlist.js.
2. Declarar un array songs con al menos cinco canciones, 
cada una con title, artist, genre, durationSec (duración en segundos) y plays (reproducciones). 
Que al menos una tenga plays: 0.
3. Sin usar ningún método de array todavía, escribir un for 
clásico que imprima el title de cada canción esto sirve como punto de comparación para lo que sigue.
*/


/*

Formato de un array en JavaScript:

  - declaración: se usa la palabra reservada const

  - elementos: pueden ser de cualquier tipo, incluyendo objetos y otros arrays

  - Cada objeto dentro del array tiene propiedades que se definen con pares clave-valor.

*/

const songs = [
    {
      title: "Eco",
      artist: "Jorge Drexler",
      genre: "Pop",
      durationSec: 205,
      plays: 150000
    },
    {
      title: "De Música Ligera",
      artist: "Soda Stereo",
      genre: "Rock",
      durationSec: 212,
      plays: 3400000
    },
    {
      title: "Nueva canción nueva",
      artist: "Artista Emergente",
      genre: "Indie",
      durationSec: 180,
      plays: 0 // Al menos una canción debe tener 0 reproducciones
    },
    {
      title: "Ji Ji Ji",
      artist: "Patricio Rey y sus Redonditos de Ricota",
      genre: "Rock",
      durationSec: 330,
      plays: 2500000
    },
    {
      title: "Crimen",
      artist: "Gustavo Cerati",
      genre: "Rock",
      durationSec: 288,
      plays: 1800000
    }
  ];

    /*
      for (let i = 0; i < songs.length; i++) 
      {
        console.log(songs[i].title); // Imprime el título de cada canción en la consola
      }
    
      */ // comento el bucle para que al ejecutar el archivo no se imprima nada, 
        //ya que la consigna es solo declarar el array y exportarlo.



  // exportar el array songs para que pueda ser usado en otros archivos
  module.exports = { songs };