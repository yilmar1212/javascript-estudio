# 01-fundamentos

README de la Sección 2 del curso: *Introducción a JavaScript y la consola*. Aquí queda documentado todo lo que se estudió, con los archivos donde está cada cosa.

## Estructura

```
01-fundamentos/
├── index.html      # Carga los scripts en el navegador
├── app.js          # Ejemplos comentados de la sección (13 temas + return)
└── ejercicios.js    # Ejercicios de funciones/return, scope en loops y operador "+"
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
- Caso especial: `var` dentro de un `for` "se escapa" del loop; `let` no (ver `ejercicios.js`)

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
- Parámetro vs. argumento, cómo se llama una función (ver `ejercicios.js`)

### 6. El operador `+`: suma vs. concatenación
- Con dos números: suma matemática
- Con al menos un string: concatena
- Se evalúa siempre de izquierda a derecha, de a dos en dos
- `Number("texto")` convierte a número **antes** de participar en el resto de la expresión — el orden en que se aplica cambia completamente el resultado (ej: `Number("8"+"2")` da `82`, pero `Number("8")+Number("2")` da `10`)
- Los paréntesis cambian el orden de evaluación, igual que en matemáticas

## Cómo usarlo

1. Abre `index.html` en el navegador y abre la consola (`F12`).
2. Revisa `app.js` para ver los ejemplos organizados por tema.
3. Corre `ejercicios.js` con Node (`node ejercicios.js`) o en el navegador, para ver las salidas reales.

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
- [x] Código fuente de la sección
- [x] Cierre de sección