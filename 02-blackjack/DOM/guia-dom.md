# El DOM en JavaScript — Guía completa

Esta guía cubre todo lo que necesitas para manipular páginas web con JavaScript: seleccionar elementos, leerlos, modificarlos, crearlos, borrarlos, y reaccionar a eventos del usuario. Los ejemplos están pensados con tu proyecto de Blackjack en mente, así que varios los puedes aplicar directo ahí.

---

## 1. ¿Qué es el DOM?

DOM significa **Document Object Model**. Cuando el navegador carga tu `index.html`, no se queda con el archivo de texto — lo convierte en un **árbol de objetos** en memoria, donde cada etiqueta (`<div>`, `<button>`, `<h2>`, etc.) se vuelve un objeto que JavaScript puede leer y modificar.

```html
<body>
    <header class="titulo">Blackjack</header>
    <div class="row">
        <button class="btn btn-danger">Nuevo Juego</button>
    </div>
</body>
```

Esto se convierte internamente en algo así (simplificado):

```
document
 └── html
      └── body
           ├── header (class="titulo")
           │     └── texto: "Blackjack"
           └── div (class="row")
                 └── button (class="btn btn-danger")
                       └── texto: "Nuevo Juego"
```

`document` es el objeto raíz desde donde accedes a todo el árbol. Todo lo que hagas con el DOM empieza escribiendo `document.algo`.

**Importante:** el DOM es distinto al HTML original. Si JavaScript modifica el DOM (agrega, borra, cambia texto), esos cambios se ven en pantalla al instante, pero **no** se reflejan en tu archivo `.html` — ese sigue intacto en disco. El DOM vive solo en la memoria del navegador mientras la página está abierta.

---

## 2. Seleccionar elementos

Antes de modificar algo, necesitas **agarrarlo** primero. Hay varias formas:

### 2.1 `document.getElementById()`

Busca un único elemento por su atributo `id`. Es el más rápido y directo, pero necesitas que el HTML tenga ese `id`.

```html
<h2>Jugador 1 - <span id="puntosJugador">0</span></h2>
```

```javascript
const puntosJugador = document.getElementById('puntosJugador');
console.log(puntosJugador); // <span id="puntosJugador">0</span>
```

### 2.2 `document.querySelector()`

Busca el **primer** elemento que coincida con un selector CSS (igual que los que usas en tu `.css`). Más versátil que `getElementById` porque acepta clases, etiquetas, atributos, combinaciones, etc.

```javascript
const btnNuevoJuego = document.querySelector('.btn-danger');       // por clase
const primerBoton = document.querySelector('button');               // por etiqueta
const puntos = document.querySelector('#puntosJugador');             // por id (con #)
const btnDentroDeDiv = document.querySelector('.row .btn-primary'); // anidado, como en CSS
```

### 2.3 `document.querySelectorAll()`

Igual que `querySelector`, pero devuelve **todos** los elementos que coincidan, no solo el primero. El resultado es un `NodeList` (parecido a un array).

```javascript
const botones = document.querySelectorAll('.btn');
console.log(botones.length); // cuántos botones hay

botones.forEach(boton => {
    console.log(boton.textContent);
});
```

### 2.4 `getElementsByClassName()` / `getElementsByTagName()`

Versiones más viejas, devuelven una `HTMLCollection` (parecido a un array, pero "vivo" — se actualiza solo si el DOM cambia). Hoy en día casi todo el mundo prefiere `querySelector`/`querySelectorAll` porque son más flexibles y consistentes.

```javascript
const botonesPorClase = document.getElementsByClassName('btn');
```

**Regla práctica:** usa `getElementById` cuando tengas un id específico (es ligeramente más rápido y directo), y `querySelector`/`querySelectorAll` para todo lo demás, porque el selector CSS es el mismo lenguaje que ya conoces de tu `.css`.

---

## 3. Leer y modificar contenido

Una vez que tienes el elemento seleccionado, hay varias propiedades para trabajar con su contenido.

### 3.1 `textContent`

Lee o cambia el **texto plano** de un elemento (sin interpretar HTML).

```javascript
const puntos = document.getElementById('puntosJugador');

console.log(puntos.textContent); // "0"

puntos.textContent = "15"; // ahora en pantalla se ve "Jugador 1 - 15"
```

### 3.2 `innerHTML`

Lee o cambia el contenido, pero **interpretando HTML**. Te deja meter etiquetas nuevas directamente como string.

```javascript
const contenedorCartas = document.querySelector('.cartas-jugador');

contenedorCartas.innerHTML = '<img src="assets/cartas/as-corazones.png" class="carta">';
```

**Cuidado con `innerHTML`:** si el contenido viene de algo que escribió un usuario (por ejemplo, un input de texto), usar `innerHTML` con ese texto sin filtrar es un riesgo de seguridad (inyección de HTML/scripts). Para texto simple, siempre preferí `textContent`. Usa `innerHTML` solo cuando necesitas insertar HTML de verdad (como el ejemplo de la carta arriba).

### 3.3 `innerText`

Parecido a `textContent`, pero respeta el CSS (por ejemplo, no cuenta texto que esté oculto con `display: none`). En la práctica, `textContent` es más usado porque es más predecible y rápido.

---

## 4. Modificar atributos

### 4.1 `getAttribute()` / `setAttribute()`

Sirve para cualquier atributo HTML: `src`, `href`, `class`, `disabled`, atributos personalizados, etc.

```javascript
const imagenCarta = document.querySelector('.carta');

console.log(imagenCarta.getAttribute('src')); // "assets/cartas/as.png"

imagenCarta.setAttribute('src', 'assets/cartas/rey.png'); // cambia la imagen
```

### 4.2 Atajos directos para atributos comunes

Muchos atributos también se pueden leer/escribir directo como propiedad del elemento, sin pasar por `getAttribute`:

```javascript
imagenCarta.src = 'assets/cartas/rey.png'; // igual que setAttribute('src', ...)

const btnPedirCarta = document.querySelector('.btn-primary');
btnPedirCarta.disabled = true; // desactiva el botón (útil cuando el jugador se planta)
```

---

## 5. Clases CSS — `classList`

Para agregar, quitar o alternar clases CSS desde JS (por ejemplo, para mostrar un estado de "ganaste"/"perdiste" con estilos distintos):

```javascript
const mesa = document.querySelector('.mesa');

mesa.classList.add('perdiste');       // agrega la clase
mesa.classList.remove('perdiste');    // la quita
mesa.classList.toggle('perdiste');    // si la tiene la quita, si no la tiene la pone
mesa.classList.contains('perdiste');  // true o false, para preguntar si la tiene
```

**Por qué usar `classList` en vez de escribir estilos directo con JS:** mantiene tu diseño en el `.css` (donde debe estar) y JS solo decide *cuándo* aplicar cada estilo, no *cómo* se ve. Es más fácil de mantener.

```css
/* en tu styles.css */
.perdiste {
    background-color: darkred;
}
```

```javascript
// en tu JS, solo decides cuándo
if (puntosJugador > 21) {
    mesa.classList.add('perdiste');
}
```

### 5.1 Modificar estilos directo (cuando sí hace falta)

A veces necesitas un valor calculado en el momento (una posición, un color dinámico) que no tiene sentido meter en una clase fija:

```javascript
imagenCarta.style.transform = 'rotate(15deg)';
imagenCarta.style.left = '120px';
```

Nota: las propiedades CSS con guion se escriben en **camelCase** en JS (`background-color` → `backgroundColor`).

---

## 6. Crear y eliminar elementos

Este es el bloque más importante para tu Blackjack, porque cada vez que el jugador pide una carta, necesitas **crear** un elemento nuevo en pantalla.

### 6.1 Crear un elemento

```javascript
const nuevaCarta = document.createElement('img'); // crea un <img> "flotando", todavía no está en la página
nuevaCarta.src = 'assets/cartas/reina-picas.png';
nuevaCarta.classList.add('carta');
```

### 6.2 Insertarlo en el DOM

Crear el elemento no lo pone en pantalla — hay que decirle **dónde** meterlo:

```javascript
const contenedorCartas = document.querySelector('.cartas-jugador');

contenedorCartas.appendChild(nuevaCarta); // lo agrega al final, adentro del contenedor
```

Otras formas de insertar, según dónde lo necesites:

```javascript
contenedorCartas.prepend(nuevaCarta);              // lo agrega al PRINCIPIO
contenedorCartas.insertBefore(nuevaCarta, otroElemento); // antes de un elemento específico
```

### 6.3 Eliminar un elemento

```javascript
nuevaCarta.remove(); // se borra a sí mismo del DOM (forma moderna, la más simple)

// forma más vieja, todavía se ve en código antiguo:
contenedorCartas.removeChild(nuevaCarta);
```

### 6.4 Ejemplo completo — agregar una carta al pedir

```javascript
function pedirCarta(nombreImagen, contenedorSelector) {
    const contenedor = document.querySelector(contenedorSelector);

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${nombreImagen}.png`;
    imgCarta.classList.add('carta');

    contenedor.appendChild(imgCarta);
}

pedirCarta('as-corazones', '.cartas-jugador');
```

---

## 7. Eventos — reaccionar a lo que hace el usuario

Hasta ahora todo lo anterior asume que "algo" dispara tu código. Los **eventos** son justo eso: cosas que pasan (un clic, escribir en un input, cargar la página) a las que puedes "escuchar" y reaccionar.

### 7.1 `addEventListener`

Es la forma moderna y recomendada de escuchar eventos.

```javascript
const btnPedirCarta = document.querySelector('.btn-primary');

btnPedirCarta.addEventListener('click', () => {
    console.log('el jugador pidió una carta');
    pedirCarta('rey-treboles', '.cartas-jugador');
});
```

**Estructura:** `elemento.addEventListener('nombreDelEvento', funcionQueSeEjecuta)`

### 7.2 Eventos comunes

| Evento | Cuándo se dispara |
|---|---|
| `click` | Al hacer clic en el elemento |
| `dblclick` | Doble clic |
| `mouseover` / `mouseout` | Al pasar/quitar el mouse por encima |
| `keydown` / `keyup` | Al presionar/soltar una tecla |
| `input` | Al escribir en un `<input>` (se dispara con cada tecla) |
| `change` | Cuando un `<input>`/`<select>` pierde el foco después de cambiar |
| `submit` | Al enviar un `<form>` |
| `DOMContentLoaded` | Cuando el HTML terminó de cargar (se pone en `document`, no en un elemento) |

### 7.3 El objeto `event`

La función que le pasas a `addEventListener` recibe automáticamente un objeto con información sobre lo que pasó:

```javascript
btnPedirCarta.addEventListener('click', (event) => {
    console.log(event.target);       // el elemento exacto que disparó el evento
    console.log(event.type);         // "click"
});
```

Para eventos de teclado, `event.key` te dice qué tecla se presionó:

```javascript
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('presionaste Enter');
    }
});
```

### 7.4 `DOMContentLoaded` — esperar a que el HTML esté listo

Si tu `<script>` está en el `<head>` (sin `defer`), corre **antes** de que el HTML termine de cargar, y tratar de seleccionar elementos que todavía no existen te va a dar `null`. Para evitar eso:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // acá adentro ya es seguro que TODO el HTML existe
    const btnNuevoJuego = document.querySelector('.btn-danger');
    btnNuevoJuego.addEventListener('click', iniciarJuego);
});
```

Si ya usas `defer` en tu `<script>` (como vimos en la sección de fundamentos), este paso extra no es estrictamente necesario, porque `defer` ya garantiza que el HTML esté completo antes de ejecutar tu JS. Pero no está de más tenerlo presente.

---

## 8. Recorrer y navegar el árbol del DOM

A veces necesitas moverte entre elementos relacionados, no solo seleccionarlos por separado.

```javascript
const boton = document.querySelector('.btn-danger');

console.log(boton.parentElement);      // el elemento contenedor directo
console.log(boton.nextElementSibling); // el elemento hermano siguiente
console.log(boton.previousElementSibling); // el hermano anterior
console.log(boton.children);           // los hijos directos (si los tuviera)
```

Ejemplo práctico: si tienes los 3 botones dentro del mismo `div.row`, y quieres desactivar los otros dos cuando el jugador se planta:

```javascript
const btnDetener = document.querySelector('.btn-primary:last-child');

btnDetener.addEventListener('click', () => {
    const contenedorBotones = btnDetener.parentElement;
    const otrosBotones = contenedorBotones.querySelectorAll('button:not(.btn-danger)');

    otrosBotones.forEach(btn => btn.disabled = true);
});
```

---

## 9. Ejemplo aplicado a tu Blackjack

Juntando varios conceptos de esta guía, así se vería el esqueleto básico de tu juego:

```javascript
// esperamos a que el HTML este listo
document.addEventListener('DOMContentLoaded', () => {

    // seleccionamos todo lo que vamos a necesitar
    const btnNuevoJuego = document.querySelector('.btn-danger');
    const btnPedirCarta = document.querySelector('.btn-primary');
    const btnDetener = document.querySelectorAll('.btn-primary')[1];
    const puntosJugador = document.getElementById('puntosJugador');
    const contenedorCartas = document.querySelector('.cartas-jugador');

    let puntos = 0;

    btnNuevoJuego.addEventListener('click', () => {
        puntos = 0;
        puntosJugador.textContent = puntos;
        contenedorCartas.innerHTML = ''; // limpia las cartas anteriores
        btnPedirCarta.disabled = false;
        btnDetener.disabled = false;
    });

    btnPedirCarta.addEventListener('click', () => {
        const valorCarta = Math.floor(Math.random() * 11) + 1; // simplificado, sin palos todavia
        puntos += valorCarta;
        puntosJugador.textContent = puntos;

        const imgCarta = document.createElement('div');
        imgCarta.textContent = valorCarta; // luego lo reemplazas por una imagen real
        imgCarta.classList.add('carta');
        contenedorCartas.appendChild(imgCarta);

        if (puntos > 21) {
            puntosJugador.classList.add('perdiste');
            btnPedirCarta.disabled = true;
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        console.log('el jugador se planto con', puntos, 'puntos');
    });

});
```

---

## 10. Resumen para memorizar

| Necesito... | Uso |
|---|---|
| Seleccionar un elemento por id | `document.getElementById('id')` |
| Seleccionar por clase/etiqueta/selector CSS | `document.querySelector('.clase')` |
| Seleccionar varios | `document.querySelectorAll('.clase')` |
| Leer/cambiar texto plano | `elemento.textContent` |
| Insertar HTML | `elemento.innerHTML` |
| Leer/cambiar un atributo | `elemento.getAttribute()` / `.setAttribute()` |
| Agregar/quitar una clase CSS | `elemento.classList.add()` / `.remove()` / `.toggle()` |
| Crear un elemento nuevo | `document.createElement('tag')` |
| Insertarlo en la página | `contenedor.appendChild(elemento)` |
| Quitar un elemento | `elemento.remove()` |
| Reaccionar a un clic/evento | `elemento.addEventListener('click', funcion)` |
| Esperar a que el HTML cargue | `document.addEventListener('DOMContentLoaded', ...)` |

¿Quieres que armemos juntos la lógica completa del mazo (crear las 52 cartas, barajarlas, repartir) para conectarla con todo esto que acabas de ver?
