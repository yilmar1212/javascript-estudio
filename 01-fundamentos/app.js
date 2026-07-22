/* ============================================================
   app.js — Sección 2: Introducción a JavaScript y la consola
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
   9. Depuración y breakpoints
   ------------------------------------------------------------
   - Un breakpoint es un "punto de quiebre": pausa la ejecución
     del código justo en esa línea.
   - Se pone desde las DevTools del navegador (pestaña "Sources"
     en Chrome), haciendo click en el número de línea.
   - Con el código pausado puedes:
       > ver el valor actual de cada variable
       > avanzar línea por línea (step over / step into / step out)
       > revisar la pila de llamadas (call stack)
   - También se puede forzar la pausa desde el código con la
     palabra reservada `debugger;` (funciona igual que un breakpoint
     puesto manualmente).
   - Ventaja sobre console.log: puedes ver TODO el estado del
     programa en ese instante, no solo lo que decidiste imprimir.
*/
function sumar(x, y) {
    debugger; // al ejecutar esto en el navegador, se pausa aquí
    const resultado = x + y;
    return resultado;
}

console.log(sumar(2, 3));


/* ------------------------------------------------------------
   10. Orden y lugar de las importaciones
   ------------------------------------------------------------
   - Los <script> en el HTML se ejecutan en el ORDEN en que
     aparecen, de arriba hacia abajo.
   - Si un script depende de otro (usa una función o variable
     definida en otro archivo), el que la define debe ir ANTES.
   - Lo normal es poner los <script> justo antes de cerrar
     </body>, para que el HTML cargue primero y la página no se
     vea en blanco mientras se descarga el JS.
   - Alternativa moderna: atributo `defer` en el <script> dentro
     del <head>. Descarga en paralelo, pero ejecuta solo cuando el
     HTML ya terminó de cargar, y respeta el orden entre varios
     scripts con defer.

   Ejemplo de HTML:

   <head>
       <script src="assets/js/utilidades.js" defer></script>
       <script src="assets/js/app.js" defer></script>
   </head>

   Si "app.js" usa una función definida en "utilidades.js",
   "utilidades.js" debe ir primero en el orden de los <script>.
*/


/* ------------------------------------------------------------
   11. Principal problema con la inicialización de variables con var
   ------------------------------------------------------------
   - `var` tiene "hoisting": la declaración se sube al inicio del
     scope, pero SIN su valor. Por eso se puede "usar" antes de
     declararla sin error, solo da undefined.
*/
console.log(miVar); // undefined (no error)
var miVar = 5;

/*
   - `let` y `const` sí existen desde el inicio del bloque, pero
     quedan en la "temporal dead zone": usarlas antes de declararlas
     lanza un ReferenceError. Esto ayuda a detectar errores antes.

     console.log(miLet); // ReferenceError
     let miLet = 5;

   - Otro problema: `var` no respeta el alcance de bloque ({}),
     solo el de función. Ejemplo clásico con un for:
*/
for (var i = 0; i < 3; i++) {}
console.log('i fuera del for:', i); // 3 -> "i" se "escapó" del for

for (let j = 0; j < 3; j++) {}
// console.log('j fuera del for:', j); // ReferenceError -> "j" no existe aquí

/*
   - Por estas razones, hoy en día se recomienda usar siempre
     `let` y `const`, y evitar `var`.
*/


/* ------------------------------------------------------------
   12. Prompt, confirm y alert
   ------------------------------------------------------------
   Son funciones globales del navegador (BOM: Browser Object
   Model), no de JS puro. Las tres son SÍNCRONAS y BLOQUEANTES:
   mientras el usuario no responda, el resto del código no sigue.
*/

// alert(): muestra un mensaje con un botón "OK". No devuelve
// ningún valor útil (undefined). Solo sirve para avisar algo.
alert('Hola Mundo');

// prompt(): muestra un campo de texto para que el usuario escriba
// algo. Devuelve SIEMPRE un string, o `null` si cancela.
let nombre = prompt('¿Cuál es tu nombre?');
console.log(nombre);
console.log('****' + nombre + '****'); // útil para detectar vacíos o espacios

// confirm(): muestra dos botones, "Aceptar" y "Cancelar".
// Devuelve un booleano: true si acepta, false si cancela.
const seleccion = confirm('¿Está seguro de borrar esto?');
console.log(seleccion);


/* ------------------------------------------------------------
   13. Nota general
   ------------------------------------------------------------
   JavaScript es un lenguaje interpretado: el código se ejecuta
   línea por línea y no necesita compilarse antes de ejecutarse.
   Esto da flexibilidad y rapidez, pero exige más cuidado con la
   sintaxis y la lógica.
*/