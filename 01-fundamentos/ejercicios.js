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