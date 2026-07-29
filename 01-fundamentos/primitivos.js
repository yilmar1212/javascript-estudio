let nombre = "jon jones";
console.log(nombre);

/* si se trata de hacerlo de nuevo con let nos da error, ya que ya fue declarado 
(o inicializado) y lo estas tratando de reinicializar, y eso con let no se puede */
nombre = "daniel cormier";
console.log(nombre);

/* var carro = "tesla";
console.log(carro);
// con var si se puede
var carro = "twingo";
console.log(carro) */

// para saber que tipo de dato es una variable
console.log(typeof nombre);

// los datos pueden mutar (cambiar), ya que javascript es un lenguaje debilmente tipado, 
// lo cual significa que una misma variable puede cambiar de tipo de dato sin problema
nombre = 123;
console.log(typeof nombre); // ya no es string, ahora es number

// camel case


let esMarvel = false;
console.log(typeof esMarvel); // boolean, true o false, asi de simple


let edad = 33;
console.log(typeof edad); // number

edad = 33.001;
console.log(typeof edad);
// aunque le meta decimales sigue siendo number, JS no diferencia entre 
// int y float como otros lenguajes, todo es "number"


let superPoder;
console.log(typeof superPoder); // ??? -> undefined
// la declare pero nunca le puse valor, entonces JS le pone undefined por defecto
// esto pasa solo, yo no lo escribi


let soyNull = null;
console.log(typeof soyNull); // ??? -> object
// aca esta el bug mas viejo (y famoso) de JS: null deberia dar "null" pero da "object"
// es un error historico del lenguaje que nunca arreglaron por no romper miles de paginas
// osea: null SI es un primitivo, pero typeof miente en este caso puntual


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1); // symbol
// aunque le pase el mismo texto 'a' a los dos, typeof me confirma que es su propio tipo

console.log(symbol1 === symbol2); // false
// aca es donde se entiende el punto de symbol: aunque escriba Symbol('a') dos veces,
// cada uno es unico e irrepetible, nunca van a ser iguales entre si
// por eso sirven para crear identificadores que nunca se van a chocar con otros