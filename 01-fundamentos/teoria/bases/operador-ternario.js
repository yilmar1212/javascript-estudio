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
let notaFinal = 7;
let calificacion = (notaFinal >= 9) ? "excelente" : (notaFinal >= 6) ? "aprobado" : "reprobado";
console.log(calificacion);







// otros usos del operador ternario

const elMayor = (a, b) => (a > b) ? a : b; // una funcion de flecha se puede simplificar asi, sin llaves ni return

const tieneMembresia = (miembro) => (miembro) ? "2 dolares" : ("10 dolares");
// si no hay una condicion se puede dejar sin parentesis, por ejemplo un boleano, pero en este caso dejemoslo

console.log(elMayor(20, 15))
console.log(tieneMembresia(false))


// el ternario tambien sirve para meter un valor condicional adentro de un arreglo,
// como un elemento mas de la lista

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki', // aqui el arreglo no guarda "amigo ? ... : ..." como texto,
                               // guarda el RESULTADO de evaluar esa condicion, en este caso 'Loki'

    // se puede meter hasta una funcion que se ejecuta al instante (arrow function
    // envuelta en parentesis, seguida de sus propios parentesis para llamarla ya mismo)
    // (() => 'Nick Fury')()
    elMayor(10, 15) // o simplemente llamar una funcion normal que ya tenias, tambien
                      // guarda el resultado que retorne, en este caso 15
];

console.log(amigosArr);
// ['Peter', 'Tony', 'Dr. Strange', 'Loki', 15]


// ternario encadenado, para simular varios "escalones" de condiciones sin escribir
// un monton de else if. se lee de arriba hacia abajo, apenas una condicion da true
// ese es el valor que se queda, e ignora las de abajo

const nota = 65; // A+ A B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log({ nota, grado });
// con nota = 65, ninguna condicion de arriba se cumple, entonces cae hasta el
// ultimo ':' y se queda con 'F'

// esto es equivalente a escribir:
// if (nota >= 95) grado = 'A+';
// else if (nota >= 90) grado = 'A';
// else if (nota >= 85) grado = 'B+';
// ...y asi sucesivamente
// pero ojo, esto solo se ve bien organizado si se alinean los ':' como aqui,
// si se escribe todo pegado en una sola linea se vuelve ilegible rapido

