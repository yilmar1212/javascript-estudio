// con let se puede cambiar el valor de la variable, mas no re declararla

// Ejercicio 1
let frutas = ["Manzana", "Pera", "Uva", "Mango"];
console.log(frutas);

// Ejercicio 2
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

// Ejercicio 3
let juegazos = ["tlou", "gow", "GTA V", "fortnite", "pubg"];
console.log(juegazos[2]); // el tercer juego (indice 2, porque empieza en 0)

// Ejercicio 4
let colores = ["Rojo", "Azul", "Verde", "Negro", "Blanco"];
console.log(colores[0]); // primer color
console.log(colores[colores.length - 1]); // ultimo color, sin escribir el indice a mano
console.log(colores.length); // cuantos colores hay

// Ejercicio 5
let animales = ["perro", "gato", "leon", "tigre", "aguila", "delfin"];
console.log(animales[1]); // el segundo
console.log(animales[3]); // el cuarto
console.log(animales[animales.length - 1]); // el ultimo

// Ejercicio 6
let peliculas = ["leon el profesional", "django unchained", "proyecto fin del mundo"];
peliculas.push("otra ronda"); // se agrega al final
peliculas.unshift("ong bak"); // se agrega al inicio
console.log(peliculas);

// Ejercicio 7
peliculas.pop(); // se borra el ultimo (el que acabo de agregar con push)
peliculas.shift(); // se borra el primero (el que acabo de agregar con unshift)
console.log(peliculas);
// osea que despues de este ejercicio, el arreglo queda otra vez con las 3 
// peliculas originales, porque agregue 2 y borre esos mismos 2

// Ejercicio 8
let paises = ["Colombia", "Argentina", "Chile", "Mexico", "Peru"];

let indexColombia = paises.indexOf("Colombia");
console.log(indexColombia); // 0, porque Colombia esta en la primera posicion

let indexBrasil = paises.indexOf("Brasil");
console.log(indexBrasil); // -1, porque Brasil no esta en el arreglo
// indexOf SIEMPRE devuelve -1 cuando no encuentra el valor, nunca undefined ni null

// Ejercicio 9
let nombres = ["Ana", "Juan", "Pedro", "Carlos", "Maria"];

// Pedro esta en la posicion 2 y Carlos en la posicion 3, son 2 elementos seguidos,
// entonces le digo a splice: desde la posicion 2, borrame 2
let nombresEliminados = nombres.splice(2, 2);

console.log(nombresEliminados); // ["Pedro", "Carlos"] -> lo que se elimino
console.log(nombres); // ["Ana", "Juan", "Maria"] -> como quedo el arreglo

// Ejercicio 10
let comidas = ["bandeja paisa", "sancocho", "arepa", "empanada", "lechona"];

comidas.forEach((comida) => {
    console.log(comida);
});

// Reto
// arreglo con tematica libre, en este caso peleadores de UFC
let peleadoresUFC = ["jon jones", "islam makhachev", "alex pereira", "ilia topuria"];

peleadoresUFC.push("khamzat chimaev"); // agregar uno al final
peleadoresUFC.unshift("khabib nurmagomedov"); // agregar uno al inicio
peleadoresUFC.pop(); // eliminar el ultimo

let indexAlexPereira = peleadoresUFC.indexOf("alex pereira"); // buscar con indexOf
console.log(indexAlexPereira);

console.log(peleadoresUFC[peleadoresUFC.length - 1]); // ultimo elemento usando length

peleadoresUFC.forEach((peleador) => { // recorrer todo con forEach
    console.log(peleador);
});