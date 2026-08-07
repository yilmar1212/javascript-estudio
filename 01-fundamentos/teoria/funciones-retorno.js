// hay que tener en cuenta que lo que muestra console.log no es lo mismo que lo que retorna la función,
// y que si no hay return, retorna undefined

function saludar(nombre) {
    console.log("hola " + nombre);
    return 1; // si hay return, retorna el valor que le digamos
}

console.log(saludar("yilmar")); // imprime el mensaje de consola y luego el valor de retorno (1)

// la diferencia entre llamar la funcion normal y hacer console.log de la funcion es que
// con console.log(saludar("yilmar")) se ve el mensaje de adentro Y el valor que retorna,
// mientras que si solo la llamo (saludar("yilmar");) solo se ve el mensaje de adentro


// si la funcion no tiene return, por defecto da undefined, siempre
function saludarSinReturn(nombre) {
    console.log("hola " + nombre);
    // no hay return aca
}

let x = saludarSinReturn("yilmar");
console.log(x); // undefined, porque la funcion nunca le dijo a x que valor tomar


// de donde sale el undefined que me confundio al principio:

// caso 1: llamar la funcion sin mandarle el parametro que pide
function ejemplo1(nombre) {
    console.log("hola " + nombre);
}
ejemplo1(); // nombre queda undefined porque no le mande nada
// "hola " + undefined = "hola undefined"

// caso 2: guardar en una variable una funcion que no tiene return
function ejemplo2(nombre) {
    console.log("hola " + nombre);
}
let y = ejemplo2("yilmar"); // aqui si le pase el nombre, por eso imprime bien
console.log(y); // pero y es undefined porque la funcion nunca uso return


// cuando usar cada uno
// console.log: cuando solo quiero ver algo una vez, no lo voy a reutilizar
// return: cuando ese resultado lo necesito despues, para guardarlo,
// meterlo en un if, mandarselo a otra funcion, etc

function esPar(numero) {
    return numero % 2 === 0;
}

let numero1 = 4;

if (esPar(numero1)) { // aqui si necesito el return, para que funcione el if
    console.log("es par");
} else {
    console.log("es impar");
}


// mini ejercicio para saber si entendi:
// crear una funcion esMayorDeEdad que reciba edad, si es mayor o igual a 18
// imprime "eres mayor de edad" y retorna true, si no imprime "eres menor de edad" y retorna false

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        console.log("eres mayor de edad");
        return true;
    } else {
        console.log("eres menor de edad");
        return false;
    }
}

let resultado1 = esMayorDeEdad(15);
console.log(resultado1); // false

let resultado2 = esMayorDeEdad(19);
console.log(resultado2); // true


// otros ejemplos con return

function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}

console.log(nombreCompleto("yilmar", "riascos"));

function aleatorio() {
    return Math.random();
}

console.log(aleatorio());

// lo mismo de arriba pero como arrow function
const getAleatorio2 = () => Math.random();