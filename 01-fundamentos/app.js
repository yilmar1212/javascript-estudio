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


// javascript es un lenguaje interpretado, lo que significa que el código se ejecuta línea por línea, 
// y no necesita ser compilado antes de ejecutarse. Esto permite una mayor flexibilidad y rapidez en el desarrollo, 
// pero también puede llevar a errores si no se tiene cuidado con la sintaxis y la lógica del código.

// app.js — ejemplos básicos y notas sobre variables y console.log

// Uso de console.log para depuración
console.log('Ejemplo: console.log funcionando');

// Declaración de variables (una por línea para mayor claridad)
let a = 10;
var b = 10;
const c = 10; // const no puede reasignarse

console.log('a =', a);
console.log('b =', b);
console.log('c =', c); // Muestra los valores de las variables en la consola
// console.log('a =', a);
//
// 1. console.log(...) -> función que imprime en la consola
//
// 2. Recibe dos argumentos separados por coma:
//    - 'a =' -> string literal (texto fijo), solo es una etiqueta
//    - a     -> variable ya declarada; JS imprime su valor actual
//
// 3. La coma permite pasar varios argumentos a console.log,
//    y los imprime todos en la misma línea separados por un espacio
//
// Ejemplo:
// let a = 5;
// console.log('a =', a); // imprime: a = 5
//
// ¿Para qué usar la etiqueta 'a =' en vez de solo console.log(a)?
// Si tienes varios console.log seguidos, sin etiqueta solo verías
// los valores sueltos (5, 10, 3) sin saber cuál es cuál.
// Con etiqueta queda claro: a = 5 / b = 10 / c = 3
// Es una técnica muy común para depurar (debug) el código.


// si abres {} asi: (console.log({a})) va a imprimir un objeto con la propiedad a y su valor, 
// en vez de solo el valor de a. Esto es útil para ver el nombre de la variable junto con su valor en la consola.
// las llaves significan que se está creando un objeto literal, y dentro de ese objeto
//  se está definiendo una propiedad llamada a cuyo valor es el contenido de la variable a.


let d = 20;
let e = 30;
let f = 40;

// Operación ejemplo
const suma = a + b + c; // 10 + 10 + 10 = 30
console.log('suma =', suma);

// Ejemplos de reasignación (comentados para evitar errores)
// c = 20; // Error: no se puede reasignar una const
// a = 20; // Válido: let permite reasignar
// b = 30; // Válido: var permite reasignar y redeclarar

// Resumen rápido:
// - var: alcance de función, puede redeclararse y reasignarse.
// - let: alcance de bloque, puede reasignarse pero no redeclararse en el mismo bloque.
// - const: alcance de bloque, no puede reasignarse ni redeclararse.

// Nota: JavaScript es un lenguaje interpretado; el código se ejecuta línea por línea.


console.log('Este es un mensaje de registro');
console.warn('Este es un mensaje de advertencia');
console.error('Este es un mensaje de error');
console.info('Este es un mensaje de información');

// lo que hacen cada una de estas funciones es mostrar un mensaje en la consola, 
// pero con diferentes niveles de importancia o gravedad.



// console.table() es una función que muestra datos en forma de tabla en la consola.
// Es útil para visualizar arrays o objetos de manera más clara y organizada.
// ejemplo:
console.table([{a:1, b:2}, {a:3, b:4}]); // muestra una tabla con dos filas y dos columnas
//o mas simplemente:
console.table([a, b, c, d]);
