/* ============================================================
   app.js — Fundamentos de JavaScript: variables y console.log
   ============================================================ */

/* ------------------------------------------------------------
   1. console.log() — ¿qué hace?
   ------------------------------------------------------------
   - Es una función que imprime valores en la consola.
   - Se usa para depurar (debug) y ver qué está pasando en el código.
   - No devuelve nada útil: si intentas guardar su resultado en una
     variable, obtienes `undefined`, porque no tiene un `return`.
*/
console.log('Ejemplo: console.log funcionando');


/* ------------------------------------------------------------
   2. Declaración de variables
   ------------------------------------------------------------
   Se recomienda declarar cada variable en su propia línea
   para mayor claridad (aunque JS permite hacerlo en una sola
   línea separando por comas).
*/
let a = 10;
var b = 10;
const c = 10;   // const no puede reasignarse ni redeclararse

let d = 20;
let e = 30;
let f = 40;


/* ------------------------------------------------------------
   3. Diferencias entre var, let y const
   ------------------------------------------------------------
   - var:   alcance de función. Puede redeclararse y reasignarse.
   - let:   alcance de bloque. Puede reasignarse, NO redeclararse
            en el mismo bloque.
   - const: alcance de bloque. NO puede reasignarse ni redeclararse.

   Ejemplos de reasignación (comentados para evitar errores):
   c = 20; // Error: no se puede reasignar una const
   a = 20; // Válido: let permite reasignar
   b = 30; // Válido: var permite reasignar
*/


/* ------------------------------------------------------------
   4. console.log con etiquetas
   ------------------------------------------------------------
   console.log('a =', a);

   - 'a =' es un string literal, solo una etiqueta.
   - a es una variable ya declarada; JS imprime su valor actual.
   - La coma permite pasar varios argumentos a console.log,
     y los imprime todos en la misma línea separados por un espacio.

   ¿Para qué usar la etiqueta en vez de solo console.log(a)?
   Si tienes varios console.log seguidos, sin etiqueta solo verías
   los valores sueltos (10, 10, 10) sin saber cuál es cuál.
   Con etiqueta queda claro: a = 10 / b = 10 / c = 10
*/
console.log('a =', a);
console.log('b =', b);
console.log('c =', c);


/* ------------------------------------------------------------
   5. console.log con objetos ({})
   ------------------------------------------------------------
   console.log({ a });

   Al envolver la variable en llaves {}, se crea un objeto literal
   con una propiedad llamada "a" cuyo valor es el contenido de la
   variable a. Esto es útil para ver el nombre de la variable junto
   con su valor en la consola.
*/
console.log({ a });


/* ------------------------------------------------------------
   6. Operaciones con variables
   ------------------------------------------------------------ */
const suma = a + b + c; // 10 + 10 + 10 = 30
console.log('suma =', suma);


/* ------------------------------------------------------------
   7. Otros métodos de console
   ------------------------------------------------------------
   Cada uno muestra un mensaje en la consola, pero con distintos
   niveles de importancia o gravedad.
*/
console.log('Este es un mensaje de registro');
console.warn('Este es un mensaje de advertencia');
console.error('Este es un mensaje de error');
console.info('Este es un mensaje de información');


/* ------------------------------------------------------------
   8. console.table()
   ------------------------------------------------------------
   Muestra datos en forma de tabla en la consola. Es útil para
   visualizar arrays u objetos de manera más clara y organizada.
*/
console.table([
  { a: 1, b: 2 },
  { a: 3, b: 4 },
]);

// También funciona con un array simple de valores:
console.table([a, b, c, d]);


/* ------------------------------------------------------------
   9. Nota general
   ------------------------------------------------------------
   JavaScript es un lenguaje interpretado: el código se ejecuta
   línea por línea y no necesita compilarse antes de ejecutarse.
   Esto da flexibilidad y rapidez, pero exige más cuidado con la
   sintaxis y la lógica.
*/