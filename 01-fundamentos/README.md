# 01-fundamentos

README de la Sección 2 del curso: *Introducción a JavaScript y la consola*. Aquí queda documentado todo lo que se estudió, con los archivos donde está cada cosa.

## Estructura

```
01-fundamentos/
├── teoria/
│   ├── primitivos.js           # Tipos de datos primitivos y typeof
│   ├── palabras-reservadas.js  # Palabras reservadas y buenas practicas de nombres
│   └── arreglos.js             # Arreglos, indices y arreglos anidados
├── ejercicios/
│   └── ejercicios.js           # Ejercicios de funciones/return, scope en loops y operador "+"
├── codigo-seccion/             # Codigo que sigue tal cual el profesor en clase
├── index.html                  # Carga los scripts en el navegador
├── app.js                      # Ejemplos comentados de la sección (13 temas + return)
└── README.md
```

## Temas cubiertos

### 1. `console` y depuración
- `console.log()`: qué hace, por qué retorna `undefined`, cómo usar etiquetas y objetos (`{ variable }`)
- Otros niveles: `console.warn`, `console.error`, `console.info`
- `console.table()` para ver arrays/objetos como tabla
- Breakpoints y `debugger` — pausar la ejecución e inspeccionar variables en tiempo real, y por qué es más potente que solo usar `console.log`

### 2. Variables: `var`, `let`, `const`
- Diferencias de reasignación y redeclaración
- **Scope**: `var` es de función (ignora bloques como `if`/`for`/`while`, pero sí respeta funciones); `let`/`const` son de bloque
- **Hoisting**: `var` se sube con valor `undefined`; `let`/`const` se suben pero quedan en la Temporal Dead Zone (usarlas antes de declararlas da `ReferenceError`)
- El **método de las 4 preguntas** para razonar cualquier caso de scope: ¿dónde nació? → ¿dónde se usa? → ¿es `let` o `var`? → ¿las reglas permiten acceder?
- Caso especial: `var` dentro de un `for` "se escapa" del loop; `let` no (ver `ejercicios/ejercicios.js`)

### 3. Orden y ubicación de los `<script>`
- Por qué un `<script>` sin `defer` bloquea el renderizado del HTML (render-blocking)
- Uso de `defer` vs. colocar los scripts antes de `</body>`

### 4. `alert`, `prompt`, `confirm`
- Parte del BOM (Browser Object Model), no de JS puro
- Son síncronos y bloqueantes
- `prompt()` **siempre** devuelve string — hay que convertir con `Number()` si se va a usar en operaciones matemáticas

### 5. Funciones y `return`
- `return` saca el valor de la función hacia afuera; el `=` es quien lo guarda en una variable
- Sin `return`, la función devuelve `undefined`
- `return` también corta la ejecución (nada después de él corre)
- Parámetro vs. argumento, cómo se llama una función (ejercicios/ejercicios.js)

### 6. El operador `+`: suma vs. concatenación
- Con dos números: suma matemática
- Con al menos un string: concatena
- Se evalúa siempre de izquierda a derecha, de a dos en dos
- `Number("texto")` convierte a número **antes** de participar en el resto de la expresión — el orden en que se aplica cambia completamente el resultado (ej: `Number("8"+"2")` da `82`, pero `Number("8")+Number("2")` da `10`)
- Los paréntesis cambian el orden de evaluación, igual que en matemáticas

### 7. Tipos primitivos y `typeof` (`teoria/primitivos.js`)
- Qué es un primitivo: información que no es un objeto y es inmutable
- `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol`
- `undefined` lo pone JS solo cuando declaras y no asignas; `null` lo pones tú a propósito
- El bug histórico de `typeof null` devolviendo `"object"`
- `Symbol()`: valores únicos e irrepetibles, aunque tengan la misma descripción de texto (`symbol1 === symbol2` da `false`)
- JS es de tipado débil: una misma variable puede cambiar de tipo de dato sin problema

### 8. Palabras reservadas y buenas prácticas de nombres (`teoria/palabras-reservadas.js`)
- Qué son las palabras reservadas y por qué no se pueden usar como nombre de variable/función
- Ejemplos: `let`, `const`, `function`, `if`, `class`, `return`, `new`, `this`, etc.
- Caso especial de `NaN`, `Infinity` y `undefined`: no son reservadas oficialmente, pero mejor evitarlas igual
- Buenas prácticas: camelCase para variables/funciones, PascalCase solo para clases, nada de tildes/ñ ni espacios (por temas de despliegue en servidores Linux), nombres descriptivos en vez de `x`, `dato1`, etc.

### 9. Arreglos (`teoria/arreglos.js`)
- Qué es un arreglo y por qué los índices empiezan en `0`
- Notación literal `[]` vs. constructor `new Array()`
- Un arreglo puede mezclar tipos de datos distintos (booleans, numbers, strings, funciones, objetos, otros arreglos)
- Arreglos anidados y acceso encadenado (`arreglo[7][3][1]`)
- hay ejercicios en la carpeta de ejercicios XD (valga la redundancia), (./01-fundamentos/ejercicios/arreglosejercicios.js)

## Cómo usarlo

1. Abre `index.html` en el navegador y abre la consola (`F12`).
2. Revisa `app.js` y los archivos en `teoria/` para ver los ejemplos organizados por tema.
3. Corre los archivos de `ejercicios/` con Node (`node ejercicios/ejercicios.js`) o en el navegador, para ver las salidas reales.
4. otra opcion que uso es usar un compilador web, y los pedacitos de codigo ir poniendolos en dicho compilador 

## Progreso del curso

- [x] Introducción a la sección
- [x] Temas puntuales de la sección
- [x] JavaScript y su historia
- [x] Usos de JavaScript
- [x] Hola Mundo
- [x] Introducción a variables y comentarios
- [x] Introducción a la consola
- [x] Depuración y breakpoints
- [x] Orden y lugar de las importaciones
- [x] Principal problema con la inicialización de variables con Var
- [x] Prompt, confirm y alert
- [x] Tipos de datos primitivos
- [x] Palabras reservadas
- [x] Arreglos
- [x] Código fuente de la sección
- [x] Cierre de sección