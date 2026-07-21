// console.log() es una función que imprime valores en la consola.
// Se usa para ver qué está pasando en el código (debug) mientras programas.
// No devuelve nada útil (retorna undefined), solo muestra info en pantalla.

// console.log("Hello, World!");   


// formas de determinar o crear variables
let a = 10;
var b = 10;
const c = 10; // const no puede cambiar su valor, es una constante
// tambien se pueden organizar las variables en una sola línea, separadas por comas
let d = 20, e = 30, f = 40; // aunque esto no es recomendable, es mejor declarar cada variable en una línea separada para mayor claridad

let x = a + b + c; // x = 10 + 10 + 10 = 30
console.log(x);

// c = 20; // Esto generará un error porque c es una constante
// a = 20; // Esto es válido porque a es una variable declarada con let
// b = 30; // Esto es válido porque b es una variable declarada con var
// diferencias entre var, let y const:
// var: tiene un alcance de función, puede ser redeclarada y reasignada.
// let: tiene un alcance de bloque, puede ser reasignada pero no redeclarada en el mismo bloque.
// const: tiene un alcance de bloque, no puede ser reasignada ni redeclarada.




