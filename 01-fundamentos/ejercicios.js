// ============================================================
// Ejercicios prácticos de JavaScript
// Funciones, parámetros, return y cómo se llaman las funciones
// ============================================================


/* ------------------------------------------------------------
   Ejercicio 1 — console.log() dentro de una función + return
   ------------------------------------------------------------
   - La función "ejemplo" hace DOS cosas distintas:
     1. Imprime "holas" en consola (console.log es un efecto
        secundario, pasa ahí mismo, no se guarda en r de forma útil).
     2. Usa return, pero ojo: retorna el STRING "r" (con comillas),
        no el valor de la variable r. Es un error común de
        principiante confundir el nombre de la variable con un
        string literal.
   - r guarda undefined, porque console.log no devuelve nada útil.
     Pero r nunca se usa después, así que ese undefined no se ve.
   - Lo que SÍ se imprime al final es "r" (el string literal),
     porque eso es lo que la función retorna.
*/
function ejemplo (){
    let r = console.log("holas"); // imprime "holas"; r = undefined
    return "r"; // retorna el texto "r", NO el contenido de la variable r
}

console.log(ejemplo());
// Salida esperada:
// holas
// r


/* ------------------------------------------------------------
   Ejercicio 2 — Variable simple + console.log
   ------------------------------------------------------------
   - Declaramos una variable de tipo string y la imprimimos.
   - No hay funciones aquí todavía, solo variable + impresión.
*/
let mensaje = "hola mundo";
console.log(mensaje);
// Salida: hola mundo


/* ------------------------------------------------------------
   Ejercicio 3 — Concatenación de strings con "+"
   ------------------------------------------------------------
   - El operador "+" entre strings NO suma, concatena (pega texto).
   - "Mi nombre es " + nombre junta el texto fijo con el valor
     que tenga la variable "nombre" en ese momento.
*/
let nombre = "Juan";
console.log("Mi nombre es " + nombre);
// Salida: Mi nombre es Juan


/* ------------------------------------------------------------
   Ejercicio 4 — Concatenar varias variables y texto
   ------------------------------------------------------------
   - Se pueden encadenar tantos "+" como se necesite.
   - JS va concatenando de izquierda a derecha:
     nombre + " tiene " + edad + " años "
     -> "Juan" + " tiene " + 20 + " años "
   - Aquí "edad" es un número (20), pero al concatenarlo con "+"
     junto a un string, JS lo convierte automáticamente a texto:
     "20". Por eso el resultado final es todo un solo string.
*/
let nombreLocal = "Juan";
let edad = 20;
console.log(nombreLocal + " tiene " + edad + " años ");
// Salida: Juan tiene 20 años


/* ------------------------------------------------------------
   Ejercicio 5 — Función con PARÁMETRO, sin return
   ------------------------------------------------------------
   - "nombre" aquí es un PARÁMETRO: una variable que la función
     espera recibir cuando la llamen. Actúa como una "casilla
     vacía" que se rellena con lo que le pases al llamarla.
   - saludar("carlos") es la LLAMADA a la función: en ese momento,
     el parámetro "nombre" toma el valor "carlos" (a esto se le
     llama ARGUMENTO: el valor real que entra en el parámetro).
   - Esta función NO tiene return, solo imprime directamente.
     Por eso, si hicieras console.log(saludar("carlos")), verías
     el saludo Y luego "undefined" (porque no hay return).
*/
function saludar(nombre){
    console.log("hola " + nombre );
}

saludar ("carlos");
// Salida: hola carlos


/* ------------------------------------------------------------
   Ejercicio 6 — Función con return (SÍ devuelve el resultado)
   ------------------------------------------------------------
   - Misma idea de parámetro que el ejercicio anterior, pero esta
     vez la función usa return en vez de console.log interno.
   - return SACA el resultado de la función hacia afuera, pero
     no lo imprime por sí solo. Por eso hace falta envolver la
     llamada en console.log(...) para verlo en pantalla.
   - Diferencia clave con el ejercicio 5:
     > Ejercicio 5: la función IMPRIME por dentro (no retorna nada útil)
     > Ejercicio 6: la función RETORNA el valor (no imprime nada por sí sola)
*/
function saludarConReturn(nombre){
    return "hola " + nombre;
}

console.log(saludarConReturn("Ana"));
// Salida: hola Ana


/* ------------------------------------------------------------
   Ejercicio 7 — Función con DOS parámetros + operación matemática
   ------------------------------------------------------------
   - "a" y "b" son dos parámetros: la función espera recibir
     dos valores al llamarla, en ese orden.
   - sumar(5, 3): el primer argumento (5) entra en "a", el
     segundo (3) entra en "b". El orden importa.
   - Como "a" y "b" son números (no strings), "+" aquí SÍ suma
     matemáticamente, no concatena.
   - return a + b calcula la suma y la saca de la función.
*/
function sumar(a, b){
    return a + b;
}

console.log(sumar(5, 3));
// Salida: 8


/* ------------------------------------------------------------
   Ejercicio 8 — Función con parámetros MIXTOS (string + número)
   ------------------------------------------------------------
   - "nombre" es un string, "edad" es un número.
   - Al concatenar con "+", JS convierte "edad" a texto
     automáticamente para poder unirlo con el resto del string.
   - Ojo con el detalle de este ejercicio: falta un espacio antes
     de "tiene" (queda "María  tiene" con espacio extra o pegado,
     dependiendo de cómo se escriba el string). Es un buen ejemplo
     real de por qué hay que revisar bien los espacios al concatenar.
*/
function presentar(nombre, edad){
    return nombre + "tiene " + edad + " años";
}

console.log(presentar("María ", 22));
// Salida: María tiene 22 años
// (nota: el espacio final de "María " + "tiene " es lo que separa
//  las palabras; si quitas ese espacio del argumento, quedarían pegadas)


/* ------------------------------------------------------------
   Ejercicio 9 — Función con return y multiplicación
   ------------------------------------------------------------
   - Misma estructura que "sumar", pero con el operador "*".
   - a y b son números, así que "*" multiplica matemáticamente.
   - return a * b saca el resultado calculado hacia afuera de
     la función, para que console.log pueda imprimirlo.
*/
function multiplicar(a, b){
    return a * b;
}

console.log(multiplicar(4, 6));
// Salida: 24


/* ============================================================
   Resumen rápido de conceptos usados en estos ejercicios
   ============================================================
   - Parámetro:  la "casilla vacía" que declaras entre los
                 paréntesis de la función (ej: nombre, edad).
   - Argumento:  el valor real que le pasas cuando LLAMAS
                 a la función (ej: saludar("carlos") -> "carlos").
   - Llamar una función: escribir su nombre + paréntesis con
                 los argumentos, ej: sumar(5, 3).
   - return:     saca el resultado de la función hacia afuera.
                 Sin return, la función devuelve undefined.
   - "=" (asignación): es quien GUARDA lo que el return sacó,
                 en una variable, para poder usarlo después.
   - "+": suma si ambos valores son números, concatena (pega
                 texto) si al menos uno es string.
*/




// ============================================================
// Ejercicios: scope de var/let en loops + operador "+" y Number()
// ============================================================


/* ------------------------------------------------------------
   PARTE 1 — var vs let dentro de un for
   ------------------------------------------------------------
   Recordatorio de cómo funciona un for:

   for (inicio; condición; actualización) {
       // código
   }

   - inicio:        se ejecuta UNA sola vez, al principio.
   - condición:     se revisa ANTES de cada vuelta. Si es falsa,
                     el loop se detiene.
   - actualización: se ejecuta al FINAL de cada vuelta.
*/


/* ------------------------------------------------------------
   Ejercicio 1 — var se escapa del for
   ------------------------------------------------------------
   El bloque {} está vacío, no hace nada dentro. Aun así el for
   sigue funcionando: crea la variable, revisa la condición y
   la actualiza en cada vuelta.

   Recorrido paso a paso:
     i=0 -> 0<3 ✅ -> (nada) -> i++ -> i=1
     i=1 -> 1<3 ✅ -> (nada) -> i++ -> i=2
     i=2 -> 2<3 ✅ -> (nada) -> i++ -> i=3
     i=3 -> 3<3 ❌ -> el loop se detiene, pero i QUEDÓ en 3

   Razonamiento de scope:
     1. ¿Dónde nació i?   -> dentro del for
     2. ¿Es var o let?    -> var
     3. ¿var respeta bloques ({})? -> NO
     4. Entonces i sigue existiendo después del for.

   Resultado: imprime 3
*/
for (var i = 0; i < 3; i++) {}
console.log('Ejercicio 1 (var):', i); // 3


/* ------------------------------------------------------------
   Ejercicio 2 — let SÍ muere al salir del for
   ------------------------------------------------------------
   El recorrido de valores (0, 1, 2, 3) ocurre exactamente igual
   que con var. La diferencia está solo al terminar el loop.

   Razonamiento de scope:
     1. ¿Dónde nació j?   -> dentro del for
     2. ¿Es var o let?    -> let
     3. ¿let respeta bloques ({})? -> SÍ
     4. El for tiene sus propias llaves {}; al cerrarlas, j deja
        de existir. Fuera del for, j ya no existe.

   Resultado: ReferenceError: j is not defined
   (la línea de abajo está comentada para no romper el archivo,
   descoméntala para comprobar el error tú mismo)
*/
for (let j = 0; j < 3; j++) {}
// console.log('Ejercicio 2 (let):', j); // ReferenceError: j is not defined


/* ------------------------------------------------------------
   Analogía: el for como una habitación
   ------------------------------------------------------------
   Con var: la variable vive en TODA la casa (la función/archivo
   completo), aunque haya "nacido" dentro del cuarto del for.

   Con let: la variable vive SOLO dentro del cuarto (el bloque
   {} del for). Al salir de ese cuarto, deja de existir.

   Regla para memorizar (no el resultado, el RAZONAMIENTO):
     - El for termina con la variable en su último valor.
     - Pregúntate: ¿la variable sigue existiendo fuera del for?
       > si es var -> sí
       > si es let -> no
*/


/* ------------------------------------------------------------
   Mini ejercicios de scope para practicar
   ------------------------------------------------------------ */
for (var x = 1; x <= 2; x++) {}
console.log('Mini 1 (var x):', x); // 3
// x nació dentro del for, es var (no respeta bloques),
// entonces sigue existiendo después. El loop terminó con x=3
// (1 -> 2 -> 3, ahí 3<=2 es falso y se detiene).

for (let y = 1; y <= 2; y++) {}
// console.log('Mini 2 (let y):', y); // ReferenceError
// y nació dentro del for, es let (sí respeta bloques),
// muere al cerrar el {} del for. No existe fuera de él.


/* ============================================================
   PARTE 2 — el operador "+", concatenación y Number()
   ============================================================
   Regla base: "+" SUMA si ambos valores son números, y
   CONCATENA (pega texto) si al menos uno de los dos es string.
   Además, JavaScript evalúa "+" de IZQUIERDA A DERECHA.
*/


/* ------------------------------------------------------------
   Ejercicio 3 — Number() aplicado a un string ya concatenado
   ------------------------------------------------------------
   console.log(Number("8" + "2"));

   Paso 1: JS resuelve primero lo que está DENTRO de Number().
     "8" + "2"  -> ambos son strings -> concatena -> "82"

   Paso 2: ahora queda Number("82")
     Number() convierte el texto "82" al número 82

   Resultado: 82 (NO es 8 + 2 = 10, porque la suma nunca ocurre;
   lo que se suma "visualmente" en realidad se concatena primero)
*/
console.log('Ejercicio 3:', Number("8" + "2")); // 82

/* Comparación con el caso que SÍ da 10: */
console.log('Comparación (Number+Number):', Number("8") + Number("2")); // 10
// Aquí cada string se convierte a número ANTES de sumar:
// Number("8") -> 8, Number("2") -> 2, luego 8 + 2 = 10


/* ------------------------------------------------------------
   Ejercicio 4 — Orden de evaluación izquierda a derecha
   ------------------------------------------------------------
   console.log("10" + 5 + 2);

   JS va evaluando de a dos, de izquierda a derecha:

   Paso 1: "10" + 5
     String + Number -> concatena -> "105"

   Paso 2: "105" + 2
     String + Number -> concatena -> "1052"

   Resultado: "1052" (NO "107" — ese sería el resultado solo si
   se sumara 5 + 2 primero, pero eso no pasa sin paréntesis)
*/
console.log('Ejercicio 4:', "10" + 5 + 2); // 1052

/* Con paréntesis el resultado SÍ cambia: */
console.log('Ejercicio 4 con parentesis:', "10" + (5 + 2)); // 107
// Los paréntesis fuerzan a resolver "5 + 2" primero (Number + Number = 7),
// y recién después concatena: "10" + 7 -> "107"


/* ------------------------------------------------------------
   Ejercicio 5 — Segundo caso de orden izquierda a derecha
   ------------------------------------------------------------
   console.log(10 + 5 + "2");

   Paso 1: 10 + 5
     Number + Number -> suma -> 15

   Paso 2: 15 + "2"
     Number + String -> concatena -> "152"

   Resultado: "152"
*/
console.log('Ejercicio 5:', 10 + 5 + "2"); // 152


/* ------------------------------------------------------------
   Ejercicio 6 — Tres variantes para comparar
   ------------------------------------------------------------ */
console.log('Variante A:', 1 + 2 + "3");
// 1+2 -> 3 (número) ; 3 + "3" -> concatena -> "33"

console.log('Variante B:', "1" + 2 + 3);
// "1"+2 -> concatena -> "12" ; "12"+3 -> concatena -> "123"

console.log('Variante C:', 1 + "2" + 3);
// 1+"2" -> concatena -> "12" ; "12"+3 -> concatena -> "123"


/* ------------------------------------------------------------
   Ejercicio 7 — Combinando Number() con concatenación
   ------------------------------------------------------------
   console.log(Number("10") + "5" + Number("2"));

   Paso 1: Number("10") -> 10
   Paso 2: Number("2")  -> 2
     (estas conversiones ocurren donde están escritas, antes de
     evaluar el resto de la expresión)

   Ahora la expresión queda: 10 + "5" + 2

   Paso 3: 10 + "5"
     Number + String -> concatena -> "105"

   Paso 4: "105" + 2
     String + Number -> concatena -> "1052"

   Resultado: "1052"
*/
console.log('Ejercicio 7:', Number("10") + "5" + Number("2")); // 1052


/* ============================================================
   Resumen de reglas clave
   ============================================================
   1. "+" con AMBOS números -> suma matemática.
   2. "+" con AL MENOS UN string -> concatena (pega texto).
   3. Se evalúa siempre de IZQUIERDA A DERECHA, de dos en dos.
   4. Los paréntesis () cambian el orden y por lo tanto el
      resultado, igual que en matemáticas.
   5. Number("texto") convierte string a número ANTES de que
      ese resultado participe en el resto de la expresión.
*/