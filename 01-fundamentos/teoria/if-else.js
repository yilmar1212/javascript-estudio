// condicionales

let a = 10;

if (a > 10) { // aqui se pone la condicion, y la condicion se debe cumplir si o si, se puede poner: <, >, ==, ===, >=, <= etc.
    console.log("A es mayor a 10 ") // aqui claramente es que si a es mayor que 10 mostrara el mensaje, si no no.
} else { // aqui ira que pasa si no se cumple la condicion anterior
    console.log("A no es mayor que 10")
}


console.log("fin del programa")


const hoy = new Date();
let dia = hoy.getDay(); // funciona asi: (0: domingo, 1: lunes, 2: martes...)

console.log(hoy)
console.log(dia)


if (dia === 0) {
    console.log("Domingo")
} else {
    console.log("no es Domingo");
}


// con solo if/else uno se queda corto cuando hay mas de dos caminos posibles,
// ahi es donde entra el else if, se pueden encadenar los que uno necesite

if (dia === 0) {
    console.log("Domingo, descanso total")
} else if (dia === 6) {
    console.log("Sabado, medio descanso")
} else if (dia === 1) {
    console.log("Lunes, arranca la semana con todo")
} else {
    console.log("dia normal entre semana")
}
// se evaluan en orden de arriba hacia abajo, apenas una condicion da true
// se ejecuta ese bloque y ya no revisa las demas, ni siquiera el else


// tambien se pueden anidar ifs, un if dentro de otro if
// util cuando la segunda condicion solo tiene sentido revisarla si la primera ya se cumplio

let edad = 20;
let tieneCedula = true;

if (edad >= 18) {
    console.log("es mayor de edad")

    if (tieneCedula) {
        console.log("puede votar")
    } else {
        console.log("es mayor pero no tiene cedula todavia")
    }

} else {
    console.log("es menor de edad, ni se revisa lo de la cedula")
}
// aqui si edad no es >= 18 nunca entra a preguntar por la cedula, por eso se anida


/* datos a tener en cuenta

// ==========================================
// 1. OPERADOR '==' (IGUALDAD DÉBIL)
// ==========================================
// Compara solo el valor. Si los tipos son diferentes, 
// JavaScript los convierte automáticamente (coerción de tipos).

console.log(5 == "5");     // true  -> El texto "5" se convierte a número antes de comparar.
console.log(1 == true);    // true  -> El booleano true se convierte al número 1.
console.log(0 == false);   // true  -> El booleano false se convierte al número 0.
console.log(null == undefined); // true -> Por regla de diseño del lenguaje, se consideran iguales aquí.


// ==========================================
// 2. OPERADOR '===' (IGUALDAD ESTRICTA)
// ==========================================
// Compara el valor Y el tipo de dato. 
// No convierte nada. Si los tipos son distintos, da 'false'.

console.log(5 === "5");    // false -> Tienen el mismo valor, pero uno es Number y el otro es String.
console.log(1 === true);   // false -> Uno es Number y el otro es Boolean.
console.log(0 === false);  // false -> Uno es Number y el otro es Boolean.
console.log(null === undefined); // false -> Son tipos de datos totalmente diferentes.


// ==========================================
// 3. ¿QUÉ PASA CON OBJETOS Y ARRAYS?
// ==========================================
// En estructuras complejas, ambos operadores funcionan igual: 
// No comparan el contenido, comparan la referencia en memoria (dónde están guardados).

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = array1; // Copia la misma referencia de memoria

console.log(array1 == array2);  // false -> Aunque tienen lo mismo, viven en carpetas de memoria distintas.
console.log(array1 === array2); // false -> Misma razón, son objetos diferentes en memoria.
console.log(array1 === array3); // true  -> Es exactamente el mismo objeto en memoria.

*/