// ============================================================
// Objetos en JavaScript — propiedades, notación de punto/corchetes
// y acceso dinámico
// ============================================================


/* ------------------------------------------------------------
   Primitivos vs. Objetos — la diferencia real
   ------------------------------------------------------------
   Un PRIMITIVO es un valor simple, individual, SIN pares
   clave-valor. En JS hay 7: string, number, boolean, undefined,
   null, symbol y bigint.

     let nombre = "Tony"; // string -> no tiene propiedades
     let edad = 40;         // number -> no tiene propiedades

   Un OBJETO sí es una colección de pares clave: valor. Eso es
   lo que se construye con { } más abajo.

   Cómo distinguirlos en código: usando typeof
     typeof "Tony"        -> "string"  (primitivo)
     typeof 40             -> "number"  (primitivo)
     typeof personaje     -> "object"  (objeto)

   Diferencia técnica clave: los primitivos se copian POR VALOR
   (cada variable tiene su propia copia), los objetos se copian
   POR REFERENCIA (dos variables pueden apuntar al mismo objeto
   en memoria).
*/


/* ------------------------------------------------------------
   Objeto literal { }
   ------------------------------------------------------------
   Las llaves { } crean un objeto. Cada línea adentro es un
   par CLAVE: VALOR, separado por comas. La clave (ej: nombre)
   funciona como una etiqueta para acceder al valor después.

   Un valor puede ser CUALQUIER cosa: string, número, booleano,
   otro objeto (coords, direccion), o un array (trajes).
   Esta es la misma estructura que vas a ver en un JSON de una API.
*/
let personaje = {
    nombre: "tony stark",   // "nombre" es la llave (key), "tony stark" es el valor
    codeName: "iron man",
    vivo: false,
    edad: 40,
    coords: {                // objeto anidado dentro del objeto
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ["MARK I", "MARK V", "HulkBuster"], // array dentro del objeto
    direccion: {
        zip: "10880, 90265",
        ubicacion: "malibu, california"
    },
    "ultima-pelicula": "infinity war"
    // ^ esta clave va entre comillas porque tiene un guion (-);
    // sin comillas sería un error de sintaxis
};

console.log(personaje);
// Imprime el objeto completo, expandible en la consola


/* ------------------------------------------------------------
   Notación de punto vs. notación de corchetes
   ------------------------------------------------------------
   Ambas acceden al mismo valor, pero:
   - Punto (.nombre): más corta y legible, pero solo funciona si
     la clave es un identificador válido (sin espacios, sin
     guiones, no puede empezar con número).
   - Corchetes (["nombre"]): funciona SIEMPRE, y además acepta
     una variable en vez de un string fijo (ver más abajo).
*/
console.log("nombre", personaje.nombre);     // notación de punto
console.log("nombre", personaje["nombre"]);  // notación de corchetes -> mismo resultado
console.log("edad", personaje.edad);


/* ------------------------------------------------------------
   Acceso a objetos anidados
   ------------------------------------------------------------
   Para llegar a un valor dentro de un objeto anidado, se
   encadenan los puntos: personaje.coords.lat entra primero al
   objeto "coords", y de ahí saca la propiedad "lat".
*/
console.log("coords", personaje.coords.lat);
console.log("coords:", personaje.coords.lng);


/* ------------------------------------------------------------
   Arrays dentro de un objeto: .length y el índice del último
   ------------------------------------------------------------
   - .length dice cuántos elementos tiene el array.
   - Los arrays se indexan desde 0, así que el último elemento
     está en la posición length - 1, no en length.
   - personaje.trajes[personaje.trajes.length - 1] es un patrón
     muy común para "dame el último elemento sin importar cuántos
     haya": si mañana agregas un cuarto traje, este código sigue
     funcionando sin tocarlo, a diferencia de escribir [2] a mano.
*/
console.log("numero de trajes:", personaje.trajes.length);

console.log("ultimo traje:", personaje.trajes[2]);
console.log("ultimo traje:", personaje.trajes[personaje.trajes.length - 1]);
// se acostumbra más esta segunda forma cuando buscamos el último de un arreglo


/* ------------------------------------------------------------
   Por qué "ultima-pelicula" necesita corchetes
   ------------------------------------------------------------
   Si escribieras personaje.ultima-pelicula, JS lo interpretaría
   como "personaje.ultima MENOS pelicula" (el guion se lee como
   el operador de resta) -> sería un error.

   Por eso, cuando una clave tiene guiones, espacios, o empieza
   con número, HAY QUE usar corchetes con el nombre entre comillas.
*/
console.log("ultima-pelicula", personaje["ultima-pelicula"]);


/* ------------------------------------------------------------
   Acceso dinámico: personaje[variable]
   ------------------------------------------------------------
   Esta es la parte más útil de todo el ejercicio.

   Con personaje.x, JS buscaría literalmente una propiedad
   llamada "x" (que no existe en este objeto).

   Con personaje[x], JS primero evalúa el VALOR de la variable x
   (que es el string "vivo"), y LUEGO busca esa clave dentro del
   objeto. Es como decir: "dame la propiedad cuyo nombre está
   guardado en esta variable".

   ¿Para qué sirve? Cuando no sabes de antemano qué propiedad vas
   a necesitar -por ejemplo, si el usuario elige un campo desde
   un formulario ("nombre", "edad", "vivo") y necesitas mostrar
   ese dato de forma dinámica, sin escribir un caso para cada uno.
*/
const x = "vivo";
console.log("vivo", personaje[x]);


/* ============================================================
   Resumen para memorizar
   ============================================================
   | Situación                                          | Usa                    |
   |-----------------------------------------------------|------------------------|
   | Nombre de propiedad simple y fijo                    | objeto.propiedad       |
   | Nombre con guiones/espacios/número al inicio         | objeto["nombre-raro"]  |
   | No sabes el nombre hasta que el programa corre       | objeto[variable]       |
   | Último elemento de un array sin saber cuántos tiene  | array[array.length-1]  |
*/