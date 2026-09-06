/* 6. filter

1. Obtener un array played con las canciones que tienen plays > 0 .

*/

const { songs } = require("./playlist.js");

const played = songs.filter(song => song.plays > 0);

console.log(played);

