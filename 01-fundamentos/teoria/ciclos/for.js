const heroes = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Flash",
    "Aquaman",
    "Green Lantern",
    "Cyborg",
    "Shazam"
];

console.warn("For tradicional");

// esta es la sintaxis basica de un ciclo for
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i])
}
// aqui "i" es un numero que va de 0 hasta heroes.length - 1, y con ese numero
// vas tu mismo a buscar el elemento en el arreglo (heroes[i]). es el que da
// mas control: puedes recorrer al reves, saltar de 2 en 2, parar a la mitad, etc.


console.warn("For in");

for (let i in heroes) {
    console.log(heroes[i]);
}
// aqui "i" NO es el valor, es el INDICE, pero como texto (string), no como numero.
// o sea que en cada vuelta i vale "0", "1", "2"... (con comillas, aunque en la
// consola no se note la diferencia visualmente). por eso hay que hacer heroes[i]
// para sacar el valor real, igual que en el for tradicional


console.warn("For of");

for (let i of heroes) {  // en for of no se acostumbra a poner i, masbien se pone algo como let heroe of heroes y luego console.log(heroe)
    console.log(i);
}
// aqui "i" ya es directamente el VALOR, no el indice. por eso no hace falta
// hacer heroes[i], i ya es "Superman", "Batman", etc en cada vuelta



console.warn("Cual usar en cada caso");

// for tradicional: cuando necesitas el indice para algo mas que solo
// recorrer (ej. comparar heroes[i] con heroes[i+1], saltar posiciones,
// ir de atras para adelante), o cuando necesitas control total del contador

for (let i = heroes.length - 1; i >= 0; i--) {
    console.log("al reves:", heroes[i]);
}

// for of: cuando solo te importa el VALOR de cada elemento, no la posicion.
// es el mas limpio para arreglos, strings, y en general cualquier cosa "iterable"
for (let heroe of heroes) {
    console.log("solo el nombre:", heroe);
}

// for in: en la practica casi no se usa con arreglos (para eso ya esta el for of
// y el for tradicional). for in esta pensado mas para recorrer las LLAVES de un
// objeto, ahi si tiene sentido porque un objeto no tiene indices numericos

const heroe = { nombre: "Clark Kent", alias: "Superman", planeta: "Krypton" };

for (let llave in heroe) {
    console.log(llave, "->", heroe[llave]);
}
// aqui si tiene sentido, porque no hay otra forma tan directa de sacar
// las llaves de un objeto con for of (for of no funciona directo sobre objetos
// normales, solo sobre cosas iterables como arreglos, strings, maps, sets)



console.warn("Bucles anidados");

// un bucle dentro de otro bucle. el de adentro corre COMPLETO por cada
// vuelta del de afuera. util para tablas, matrices, comparar todos contra todos, etc

const equipos = ["Liga de la Justicia", "Titanes"];
const miembrosPorEquipo = {
    "Liga de la Justicia": ["Superman", "Batman", "Wonder Woman"],
    "Titanes": ["Cyborg", "Flash"]
};

for (let equipo of equipos) {
    console.log("Equipo:", equipo);

    for (let miembro of miembrosPorEquipo[equipo]) {
        console.log("  -", miembro); // el de adentro corre entero antes de que el de afuera avance
    }
}

// otro clasico de anidados: tabla de multiplicar, para ver bien el orden de ejecucion
for (let fila = 1; fila <= 3; fila++) {
    let linea = "";
    for (let columna = 1; columna <= 3; columna++) {
        linea += (fila * columna) + " ";
    }
    console.log(linea);
}
// por cada vuelta de "fila" (1, 2, 3), el for de "columna" corre completo
// (1, 2, 3) antes de que fila avance a la siguiente. por eso salen 3 lineas,
// cada una con 3 numeros