// valor vs referencia

// los primitivos se copian por valor: cada variable tiene su propia copia independiente
let a = 10;
let b = a;

a = 30; // esto no afecta a b, porque b ya tiene su propia copia

console.log({ a, b }); // a: 30, b: 10


// los objetos se copian por referencia: dos variables pueden apuntar al mismo objeto en memoria
/*
let juan = { nombre: "juan" };
let ana = juan;
ana.nombre = "ana";

// sin el ana.nombre saldria juan=juan y ana=juan, pero con el ana.nombre nos da juan=ana y ana=ana, ese es el problemita
// porque ana no es una copia de juan, es el MISMO objeto con otro nombre de variable

console.log({ juan, ana });

// recordar que todos los primitivos se pasan por valor y todos los objetos se pasan por referencia
*/


// el mismo problema pasa con funciones
const cambiarNombre = (persona) => {
    persona.nombre = "tony";
    return persona;
}

let peter = { nombre: "peter" }
let tony = cambiarNombre(peter);

console.log({ peter, tony }) // el mismo problema de antes, peter tambien quedo modificado


// como resolvemos el problema anterior?

// una forma es acostumbrarnos a que cuando queramos crear una copia real de un objeto,
// lo metamos dentro de otro objeto con llaves
/*
let juan = { nombre: "juan" };
let ana = { juan };  // ana es un objeto que tiene ADENTRO otro objeto llamado juan
ana.nombre = "ana";

console.log({ juan, ana });
*/

// esto queda un poco raro, entonces existe un operador especial para esparcir todas las
// propiedades y valores de un objeto: el operador spread, que son tres puntos (...)

let juan = { nombre: "juan" };
let ana = { ...juan }; // ahora ana es una copia real, juan se mantiene intacto
ana.nombre = "ana";

console.log({ juan, ana }); // juan: juan, ana: ana


// explicacion un poco mas extensa del spread
/*
// el operador spread (...) no siempre hace lo mismo, depende de donde lo pongas

// cuando lo usas AFUERA de una funcion (en un objeto, un array, o llamando una funcion)
// lo que hace es "abrir" eso que tiene adentro y sacar todo suelto

let juan = { nombre: "juan" };
let ana = { ...juan };
// esto es basicamente lo mismo que escribir ana = { nombre: "juan" } a mano
// el ... agarra las propiedades de juan y las tira sueltas dentro de las llaves de ana
// por eso ana ya no esta conectado con juan, quedan totalmente separados

// funciona igual con arrays
let numeros = [1, 2, 3];
let copia = [...numeros]; // un array nuevo, aunque tenga los mismos valores

// tambien se puede usar cuando LLAMAS una funcion, para mandar un array como argumentos sueltos
function sumar(a, b, c) { return a + b + c; }
let valores = [1, 2, 3];
sumar(...valores); // es lo mismo que sumar(1, 2, 3)


// ahora, cuando el ... aparece DENTRO de los parametros de una funcion (cuando la defines)
// ahi hace justo lo contrario: en vez de esparcir, agarra todo y lo mete en un array

function ejemplo(...args) {
  console.log(args); // args va a ser un array con todo lo que le mandes
}
ejemplo(1, 2, 3); // args queda como [1, 2, 3]

// y se puede mezclar con parametros normales
function saludar(primero, ...resto) {
  console.log(primero, resto);
}
saludar("juan", "ana", "pedro");
// primero = "juan"
// resto = ["ana", "pedro"], todo lo que sobro se agrupa ahi

// en resumen: afuera de una funcion el ... desempaca, adentro de los parametros el ... empaca
// mismo simbolo, pero hace lo opuesto segun donde este
*/


// Arreglos: rompiendo la referencia con spread vs slice

const frutas = ['Manzana', 'Pera', 'Piña'];

// dos formas de crear una copia real del arreglo (rompiendo la relacion de referencia):

console.time('spread');
const otrasFrutas2 = [...frutas]; // spread: agarra cada elemento del arreglo y lo tira suelto dentro de [ ]
console.timeEnd('spread');

console.time('slice');
const otrasFrutas = frutas.slice(); // slice() sin argumentos tambien regresa un arreglo nuevo, copia completa
console.timeEnd('slice');

// las dos hacen lo mismo a nivel de resultado: un arreglo nuevo e independiente.
// la prueba: si modifico otrasFrutas, frutas no se entera

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

// frutas se queda con sus 3 elementos originales, otrasFrutas queda con 4.
// si hubieramos hecho otrasFrutas = frutas (sin spread ni slice), el push tambien
// hubiera afectado a frutas, porque seria el mismo arreglo en memoria.


// slice() vs spread (...) — diferencia real

// funcionalmente para copiar un arreglo completo, dan el mismo resultado.
// la diferencia esta en otras cosas:

// 1. slice() SOLO sirve para arrays (y strings). spread sirve para arrays, objetos,
//    y tambien para mandar argumentos sueltos a una funcion.

// 2. slice() puede recibir un rango: frutas.slice(1, 2) devuelve solo una parte del
//    arreglo. spread siempre copia TODO, no se le puede pedir un pedazo.

// 3. rendimiento: medi ambos con console.time/console.timeEnd y los resultados
//    variaron entre corridas:
//
//    corrida 1 -> slice: 0.00415ms   spread: 0.00098ms
//    corrida 2 -> spread: 0.00293ms  slice: 0.00269ms
//
//    para arreglos chiquitos como este, la diferencia es minima y hasta cambia
//    de orden entre una corrida y otra (ruido de medicion, nada concluyente).
//    con arreglos grandes si se nota mas diferencia, pero para el uso normal
//    del dia a dia no es algo que deba decidir cual usar.
//
// en la practica: si necesito copiar TODO el arreglo, uso spread (mas corto y
// se lee mejor). si necesito copiar solo una parte, uso slice(inicio, fin).