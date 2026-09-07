/* Templates Literals
1. Declarar variables title , author y year con los datos de un libro cualquiera. */

const title = "Cien Años de Soledad";
const author = "Gabriel García Márquez";
const year = 1967;

/* 2. Construir un string citation con template literals que arme una cita en el formato
"Título (Autor, Año)" .*/

const citation = `${title} (${author}, ${year})`;

/* 3. Construir un string multilínea summary (usando backticks, sin \n ) con al menos 3 líneas
describiendo el mismo libro. */


const summary = `Este libro es una obra maestra de la literatura moderna.
Cuenta la historia de un joven que lucha por encontrar su lugar en el mundo.
Con personajes profundos y una narrativa cautivadora, es una lectura imprescindible.`;

console.log(summary);