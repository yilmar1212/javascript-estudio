# Curso de JavaScript

Repositorio de estudio donde documento mi progreso aprendiendo JavaScript desde cero, siguiendo el curso de **DevTalles**. Cada carpeta corresponde a una sección del curso, con su propio código comentado y su propio README explicando los temas vistos ahí.

## ¿Qué es esto?

Este no es un repo de un solo proyecto — es una **bitácora de aprendizaje**. Cada carpeta (`01-fundamentos`, `02-...`, etc.) contiene los ejemplos, ejercicios y notas de una sección específica del curso, con comentarios explicando el *por qué* de cada línea, no solo el *qué*.

## ¿Por qué documento así?

Vengo de haber estudiado Python, Java y Racket, y de trabajar en mi propio homelab (Arch Linux, redes, virtualización). Mi objetivo con este repo es:

- Construir una base sólida de JavaScript antes de avanzar a TypeScript, Node.js y NestJS
- Tener un registro propio al que volver cuando se me olvide algo (mejor que depender solo de la memoria o de rebuscar en el curso)
- Practicar el mismo flujo de trabajo con Git/GitHub que voy a usar en proyectos reales: commits pequeños, ramas por tema, y documentación clara

## Estructura del repositorio

```
curso-javascript/
├── README.md              # Este archivo
└── 01-fundamentos/
    ├── README.md            # Detalle de los temas de esta sección
    ├── teoria/
    │   ├── primitivos.js
    │   ├── palabras-reservadas.js
    │   └── arreglos.js
    ├── ejercicios/
    │   └── ejercicios.js
    ├── codigo-seccion/
    ├── index.html
    └── app.js
```

Cada carpeta nueva de sección va a seguir el mismo patrón: su propio `README.md` con el detalle de los temas, y el código correspondiente organizado en `teoria/` y `ejercicios/`.

## Secciones

| Sección | Estado | Temas principales |
|---|---|---|
| [`01-fundamentos`](./01-fundamentos/README.md) | 🟢 Terminado | Variables (`var`/`let`/`const`), scope, hoisting, `console`, debugging, `alert`/`prompt`/`confirm`, funciones y `return`, operador `+`, tipos primitivos, palabras reservadas, arreglos |

*(Esta tabla se va actualizando a medida que se agregan secciones nuevas)*

## Ruta de aprendizaje

Este repo cubre la primera parte de mi ruta de estudio actual:

**JavaScript** → TypeScript → Node.js → NestJS

## Cómo usar este repositorio

1. Entra a la carpeta de la sección que te interese (ej. `01-fundamentos/`).
2. Lee el `README.md` de esa carpeta para tener el contexto de los temas.
3. Revisa `teoria/` para los conceptos explicados y `ejercicios/` para la práctica.
4. Abre el `index.html` correspondiente en el navegador, o corre los `.js` con Node (`node archivo.js`) para ver los ejemplos en acción.

## Autor

**Yilmar** — Estudiante de Ingeniería de Sistemas, Universidad del Valle (sede Tuluá).
GitHub: [@yilmar1212](https://github.com/yilmar1212)