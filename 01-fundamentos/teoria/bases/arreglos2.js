// ==========================================
// METODOS DE ARREGLOS
// ==========================================

// cuando escribes el nombre de un arreglo seguido de un punto ( . ) en VSCode,
// te aparece un menu con varias opciones, cada una con un icono distinto:
//
// - icono morado (cubito): es un METODO, o sea una funcion que ya viene 
//   incluida en el arreglo (map, pop, push, forEach, etc). como es una funcion,
//   siempre se invoca con parentesis () al final, si o si
//
// - icono azul (caja abierta): es una PROPIEDAD, un valor que ya trae el 
//   arreglo por defecto, no una accion. se accede directo, SIN parentesis
//   (el unico ejemplo que usamos aca es length)


let juegos = ["zelda", "mario", "GTA V", "pes 2006"];


// ==========================================
// length -> cuantos elementos tiene el arreglo
// ==========================================

console.log("largo:", juegos.length);
// length es una PROPIEDAD (icono azul), por eso no lleva parentesis
// simplemente cuenta cuantas posiciones ocupadas tiene el arreglo
// en este caso da 4, porque hay 4 juegos


/* let primero = juegos[0];
console.log(primero); */
// esta es la forma mas basica de acceder a un elemento, con el indice fijo


// ==========================================
// obtener el ultimo elemento sin saber cuantos hay
// ==========================================

let ultimo = juegos[juegos.length - 1];
console.log(ultimo); // "pes 2006"
// aca el truco es que no siempre voy a saber cuantos elementos tiene el 
// arreglo (puede cambiar), entonces en vez de escribir juegos[3] a mano, 
// calculo la posicion: juegos.length me da 4, le resto 1 y me da 3, 
// que es justo el indice del ultimo elemento
// por que -1? porque los indices empiezan en 0, entonces el ultimo indice 
// siempre es "el total de elementos menos uno"


// posicion cero
let primero = juegos[2 - 2];
console.log(primero); // "zelda"
// esto hace exactamente lo mismo que juegos[0], solo que en vez de escribir 
// el 0 directo, hago una operacion matematica que da 0 (2-2=0)
// es un ejemplo un poco forzado, pero sirve para entender que dentro de los 
// corchetes [] puedo poner cualquier expresion que al final resuelva en un numero


console.log({ primero, ultimo });
// esto es "object shorthand" (propiedad abreviada de ES6)
// en vez de escribir { primero: primero, ultimo: ultimo }, JS me deja poner
// solo { primero, ultimo } y el asume que la key se llama igual que la variable
// es muy util para debuggear, porque en la consola me sale el NOMBRE de la 
// variable junto con su valor, en vez de solo el valor pelado


// ==========================================
// forEach -> recorrer el arreglo elemento por elemento
// ==========================================

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});
// forEach es un METODO (icono morado), recibe una funcion (callback) que se 
// ejecuta una vez POR CADA elemento del arreglo, de forma automatica
// esa funcion callback puede recibir hasta 3 parametros, en este orden fijo:
//   1. elemento -> el valor actual (ej: "zelda", "mario"...)
//   2. indice   -> la posicion actual (0, 1, 2, 3...)
//   3. arr      -> el arreglo completo, por si lo necesito dentro del loop
// no estoy obligado a usar los 3, pero si los quiero usar, van SIEMPRE en ese orden


// ==========================================
// push -> agregar un elemento AL FINAL
// ==========================================

let nuevaLongitud = juegos.push("F-Zero");
console.log(nuevaLongitud, juegos);
// push agrega un elemento nuevo al final del arreglo, y modifica el arreglo 
// ORIGINAL directamente (no crea uno nuevo)
// lo curioso es que push NO retorna el arreglo, retorna el nuevo LARGO del 
// arreglo (un numero), por eso nuevaLongitud da 5 (el numero), y no el arreglo
// si quiero ver el arreglo completo, tengo que loguear "juegos" aparte


// ==========================================
// unshift -> agregar un elemento AL PRINCIPIO
// ==========================================

nuevaLongitud = juegos.unshift("PUBG");
console.log(nuevaLongitud, juegos);
// unshift es como push, pero en vez de agregar al final, agrega al INICIO
// tambien modifica el arreglo original y tambien retorna el nuevo largo, 
// no el arreglo, mismo comportamiento que push pero por el otro extremo


// ==========================================
// pop -> quitar el ULTIMO elemento
// ==========================================

let juegosBorrados = juegos.pop();
console.log(juegosBorrados, juegos);
// pop hace lo contrario de push: quita el ultimo elemento del arreglo
// y ojo, aca si cambia el comportamiento: pop retorna el ELEMENTO que borro 
// (no el largo, no el arreglo), por eso juegosBorrados me muestra justo 
// el juego que se elimino
// el arreglo original queda modificado, un elemento mas corto


// ==========================================
// splice -> cortar/quitar elementos desde una posicion especifica
// ==========================================

let pos = 1;
console.log({ juegos });
let juegoBorrado = juegos.splice(pos, 2);
console.log({ juegoBorrado, juegos });
// splice(posicionInicial, cantidadAEliminar) es el metodo mas versatil para 
// modificar arreglos, aca le digo: "desde la posicion 1, borrame 2 elementos"
// splice SI modifica el arreglo original (a diferencia de otros metodos que 
// solo leen), y retorna un ARREGLO NUEVO con los elementos que elimino
// splice tambien sirve para INSERTAR elementos si le agrego un tercer 
// argumento, ej: juegos.splice(1, 0, "nuevoJuego") inserta sin borrar nada 
// (0 elementos a eliminar), eso lo vemos mas adelante seguramente


// ==========================================
// indexOf -> buscar la posicion de un elemento
// ==========================================

// let metroidIndex = metroid.index0f("metroid");
// console.log(metroidIndex);

// esta linea tenia 2 errores:
// 1. "metroid" no existe como variable, el arreglo se llama "juegos"
// 2. el metodo se escribe "indexOf" (con O mayuscula), no "index0f" (con CERO)
//    facil confundirse porque en varias fuentes la O y el 0 se ven parecidos

let metroidIndex = juegos.indexOf("metroid");
console.log(metroidIndex);
// indexOf busca un valor dentro del arreglo y retorna la POSICION donde lo 
// encontro por primera vez
// si el valor SI existe en el arreglo, retorna el indice (0, 1, 2...)
// si el valor NO existe, retorna -1 (nunca undefined ni null, siempre -1)
// en este caso "metroid" no esta en el arreglo "juegos", entonces da -1