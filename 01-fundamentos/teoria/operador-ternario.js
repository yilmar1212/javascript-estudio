/* 
los dias de semana abrimos a las 11
pero los fines de semana abrimos a las 9
*/

// entra a un sitio web para ver si esta abierto hoy...
const dia = 6; // 0: domingo, 1: lunes....
const horaActual = 12;

let horaApertura;
let mensaje; // esta abierto, esta cerrado, hoy abrimos a las XX


if (dia === 0 || dia === 6) {
    console.log("fin de semana");
    horaApertura = 9;
} else {
    console.log("dia de semana");
    horaApertura = 11;
}

if (horaActual >= horaApertura) {
    mensaje = "esta abierto";
} else {
    mensaje = `esta cerrado, hoy abrimos a las: ${horaApertura}`; // de ahora en adelante siempre es mejor asi, que concatenar strings y numeros con el +, para evitarnos errores raros
}

console.log({ horaApertura, mensaje });


// una forma de hacer todo lo anterior un poco mas corto


// if (dia === 0 || dia === 6) {
/* 
if ( [0,6].includes( dia ) ) {  // metodo que tienen los arreglos para indicar o para preguntar si algo existe dentro de ese arreglo 
    console.log("fin de semana");
    horaApertura = 9;
}else{
    console.log("dia de semana");
    horaApertura = 11;
}

*/


// el operador ternario es basicamente un if/else pero resumido en una sola linea
// se usa cuando el if y el else lo unico que hacen es asignarle un valor a una variable
// (como estaba pasando arriba con horaApertura, no tenia ningun console.log adentro,
// solo asignaba 9 o 11, para esos casos el ternario le queda como anillo al dedo)

// la estructura es: condicion ? valorSiEsTrue : valorSiEsFalse

horaApertura = ([0, 6].includes(dia)) ? 9 : 11
// se lee asi: "si dia esta dentro de [0,6], entonces 9, si no, 11"
// el ? separa la condicion del resultado, y el : separa el true del false
// es literalmente lo mismo que el if/else de arriba, nada mas que en una linea

// ojo, esto NO es exclusivo del ternario, pero aprovechando el ejemplo:
// [0,6].includes(dia) es un metodo que tienen los arreglos para preguntar
// si un valor especifico existe adentro de ese arreglo, devuelve true o false,
// por eso se puede usar directo como la condicion del ternario

if (horaActual >= horaApertura) {
    mensaje = "esta abierto";
} else {
    mensaje = `esta cerrado, hoy abrimos a las: ${horaApertura}`; // de ahora en adelante siempre es mejor asi, que concatenar strings y numeros con el +, para evitarnos errores raros
}

console.log({ horaApertura, mensaje });


// mas ejemplos rapidos del ternario, para agarrarle la mano

let edad = 20;
let resultado = (edad >= 18) ? "mayor de edad" : "menor de edad";
console.log(resultado);

// tambien se puede meter directo dentro de un template string, sin variable intermedia
let stock = 0;
console.log(`el producto esta ${stock > 0 ? "disponible" : "agotado"}`);

// se pueden anidar, pero ojo con esto, si se pasa de dos niveles ya se vuelve
// dificil de leer, ahi mejor toca usar if/else normal o un switch
let nota = 7;
let calificacion = (nota >= 9) ? "excelente" : (nota >= 6) ? "aprobado" : "reprobado";
console.log(calificacion);