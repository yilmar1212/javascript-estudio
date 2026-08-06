// ==========================================
// FUNCIONES EN JAVASCRIPT
// centralizar la lógica de un procedimiento que vamos a usar muchas veces,
// y lo único que se hace después es llamarla
// ==========================================

/*
OBJETOS Y MÉTODOS (nota aparte):
Un objeto es una estructura que agrupa datos y funciones relacionadas bajo un mismo nombre.
Se define con llaves {} y adentro tiene propiedades (datos) y métodos (funciones).

const persona = {
    nombre: "Yilmar",       // propiedad
    saludar: function() {   // método, es la función que vive dentro del objeto
        console.log("hola");
    }
};
*/


// ------------------------------------------
// 1. Declaración de función (function declaration)
// ------------------------------------------
function saludar() {
    console.log("hola mundo y posible empresa que me va a contratar :b");
}
saludar(); // aquí la llamamos


// ------------------------------------------
// 2. Expresión de función anónima (function expression)
// se guarda dentro de una variable, no tiene nombre propio
// ------------------------------------------
const saludar2 = function () {
    console.log("hola mundo y posible empresa que me va a contratar :b");
}
saludar2(); // ejecuta la función, imprime el mensaje

console.log(saludar2());
// ejecuta saludar2 (imprime el mensaje) y luego intenta imprimir lo que retorna,
// pero como no hay return, sale undefined
// console.log muestra, return entrega — sin return, undefined


// ------------------------------------------
// 3. Parámetros y argumentos
// ------------------------------------------
function saludar3(nombre) { // "nombre" es el parámetro (la variable que recibe el dato)
    console.log("hola " + nombre); // usamos el parámetro dentro de la función
}
saludar3("yilmar"); // "yilmar" es el argumento (el valor real que le pasamos)

// si saludar3() no tuviera nada, diría: hola undefined
// porque no le mandamos ningún argumento y el parámetro queda sin valor


// ------------------------------------------
// 4. El objeto "arguments"
// ------------------------------------------
function saludar4(nombre2) {
    console.log(arguments); // objeto implícito con TODOS los argumentos recibidos
    console.log("hola " + nombre2); // solo usa el primero, el que coincide con el parámetro
}
saludar4("yilmar", 40, true, "colombia");
// las funciones tradicionales (function) tienen un objeto implícito llamado arguments,
// de esa manera se pueden traer todos los argumentos que se le pasaron,
// aunque no tengan parámetro declarado
// ojo: arguments no es un array real, y las arrow functions no lo tienen


// ------------------------------------------
// 5. Arrow functions (funciones de flecha)
// ------------------------------------------
const saludarFlecha = () => {
    console.log("hola flecha");
}
saludarFlecha();

// cuando la arrow function recibe un solo parámetro, se puede omitir el paréntesis,
// pero es buena práctica dejarlo igual
const saludarFlecha2 = nombre => {
    console.log("hola " + nombre);
}
saludarFlecha2("melissa");

// si el cuerpo de la función es una sola línea con un valor a devolver,
// se puede quitar las llaves y el return, esto se llama "retorno implícito"
const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // imprime 5, sin necesidad de escribir return

// diferencias clave entre arrow function y function tradicional:
// - arrow no tiene su propio "arguments"
// - arrow no tiene su propio "this" (toma el del contexto donde fue creada)
// - arrow es más corta de escribir, ideal para funciones simples/rápidas