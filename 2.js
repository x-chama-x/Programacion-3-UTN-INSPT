/*
# 2. Funciones de primera clase
1. Escribir una función formatDuration (durationSec) que devuelva la duración 
en formato "m:ss" (por ejemplo, 225 segundos → "3:45", con los segundos siempre en dos dígitos).
2. Guardar formatDuration dentro de un objeto formatters junto con 
otra función formatPlays (plays) que devuelva 
"Sin reproducciones" si plays === 0,o el número con separador de miles 
en caso contrario (por ejemplo, "1.800.000", usar toLocaleString('es-AR')).
3. Escribir una función describe (song, formatters) 
que reciba una canción y el objeto formatters, y devuelva un string combinando title, 
0000000artist, el resultado de formatters.formatDuration y el de formatters.formatPlays.
4. Llamarla para cada canción de la playlist del ejercicio 1.
*/