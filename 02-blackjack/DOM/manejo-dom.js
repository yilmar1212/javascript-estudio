// ============================================================
// Manejo del DOM en JavaScript
// este archivo esta pensado para correr en el navegador (dentro
// de un index.html), no con Node, porque "document" solo existe
// cuando hay una pagina web cargada
// ============================================================


// ============================================================
// 1. seleccionar elementos
// ============================================================

// getElementById: busca UN elemento por su id, es el mas directo
const puntosJugador = document.getElementById('puntosJugador');

// querySelector: busca el PRIMER elemento que coincida con un selector CSS
// (el mismo tipo de selector que usas en tu .css)
const btnNuevoJuego = document.querySelector('.btn-danger');
const primerBoton = document.querySelector('button');
const btnDentroDeDiv = document.querySelector('.row .btn-primary'); // anidado, como en css

// querySelectorAll: busca TODOS los que coincidan, devuelve un NodeList (parecido a un array)
const todosLosBotones = document.querySelectorAll('.btn');
console.log('cantidad de botones:', todosLosBotones.length);

todosLosBotones.forEach(boton => {
    console.log(boton.textContent);
});

// regla practica: getElementById cuando tengas un id especifico,
// querySelector/querySelectorAll para todo lo demas


// ============================================================
// 2. leer y modificar contenido
// ============================================================

// textContent: texto plano, sin interpretar HTML
console.log(puntosJugador.textContent); // "0"
puntosJugador.textContent = "15"; // cambia lo que se ve en pantalla

// innerHTML: si necesitas meter HTML de verdad (etiquetas nuevas)
const contenedorCartas = document.querySelector('.cartas-jugador');
contenedorCartas.innerHTML = '<img src="assets/cartas/as-corazones.png" class="carta">';
// ojo: si el contenido viene de algo que escribio el usuario, mejor usar
// textContent, meter texto de usuario con innerHTML sin filtrar es riesgoso


// ============================================================
// 3. atributos
// ============================================================

const imagenCarta = document.querySelector('.carta');

console.log(imagenCarta.getAttribute('src'));
imagenCarta.setAttribute('src', 'assets/cartas/rey.png');

// muchos atributos comunes se pueden leer/escribir directo, sin getAttribute
imagenCarta.src = 'assets/cartas/rey.png'; // hace lo mismo que el setAttribute de arriba

const btnPedirCarta = document.querySelector('.btn-primary');
btnPedirCarta.disabled = true; // desactiva el boton


// ============================================================
// 4. clases css con classList
// ============================================================

const mesa = document.querySelector('.mesa');

mesa.classList.add('perdiste');       // agrega la clase
mesa.classList.remove('perdiste');    // la quita
mesa.classList.toggle('perdiste');    // si la tiene la quita, si no la tiene la pone
console.log(mesa.classList.contains('perdiste')); // true o false

// mejor usar classList que escribir estilos directo, asi el diseño queda
// en el css y el js solo decide CUANDO aplicar cada estilo
if (Number(puntosJugador.textContent) > 21) {
    mesa.classList.add('perdiste');
}

// a veces si hace falta un valor calculado en el momento, ahi si toca .style
imagenCarta.style.transform = 'rotate(15deg)';
// nota: las propiedades con guion se escriben en camelCase en js
// (background-color se vuelve backgroundColor)


// ============================================================
// 5. crear y eliminar elementos
// ============================================================

// crear un elemento no lo pone en pantalla todavia, queda "flotando"
const nuevaCarta = document.createElement('img');
nuevaCarta.src = 'assets/cartas/reina-picas.png';
nuevaCarta.classList.add('carta');

// hay que decirle donde meterlo
contenedorCartas.appendChild(nuevaCarta); // lo agrega al final, adentro del contenedor
// contenedorCartas.prepend(nuevaCarta);  // al principio
// contenedorCartas.insertBefore(nuevaCarta, otroElemento); // antes de un elemento especifico

// eliminar
// nuevaCarta.remove(); // forma moderna, la mas simple
// contenedorCartas.removeChild(nuevaCarta); // forma mas vieja, se ve en codigo antiguo


// funcion reusable para agregar una carta al pedir
function pedirCarta(nombreImagen, contenedorSelector) {
    const contenedor = document.querySelector(contenedorSelector);

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${nombreImagen}.png`;
    imgCarta.classList.add('carta');

    contenedor.appendChild(imgCarta);
}

pedirCarta('as-corazones', '.cartas-jugador');


// ============================================================
// 6. eventos
// ============================================================

// addEventListener es la forma moderna de escuchar eventos
btnPedirCarta.addEventListener('click', () => {
    console.log('el jugador pidio una carta');
    pedirCarta('rey-treboles', '.cartas-jugador');
});

// estructura: elemento.addEventListener('nombreDelEvento', funcionQueSeEjecuta)

// eventos mas comunes:
// click, dblclick, mouseover, mouseout, keydown, keyup, input, change, submit

// la funcion recibe un objeto "event" con info sobre lo que paso
btnPedirCarta.addEventListener('click', (event) => {
    console.log(event.target); // el elemento exacto que disparo el evento
    console.log(event.type);   // "click"
});

// para eventos de teclado, event.key dice que tecla se presiono
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('presionaste Enter');
    }
});

// DOMContentLoaded: esperar a que el HTML termine de cargar antes de
// seleccionar elementos, importante si tu <script> no tiene defer
document.addEventListener('DOMContentLoaded', () => {
    // aca adentro ya es seguro que TODO el html existe
    const btn = document.querySelector('.btn-danger');
    console.log('el html ya cargo completo, btn existe:', btn);
});
// si ya usas defer en el <script> del index.html, este paso no es
// estrictamente necesario, pero no esta de mas tenerlo presente


// ============================================================
// 7. navegar el arbol del DOM
// ============================================================

const boton = document.querySelector('.btn-danger');

console.log(boton.parentElement);          // el contenedor directo
console.log(boton.nextElementSibling);     // el hermano siguiente
console.log(boton.previousElementSibling); // el hermano anterior
console.log(boton.children);               // los hijos directos

// ejemplo real: desactivar los otros botones cuando el jugador se planta
const btnDetener = document.querySelector('.btn-primary:last-child');

btnDetener.addEventListener('click', () => {
    const contenedorBotones = btnDetener.parentElement;
    const otrosBotones = contenedorBotones.querySelectorAll('button:not(.btn-danger)');

    otrosBotones.forEach(btn => btn.disabled = true);
});


// ============================================================
// 8. todo junto: esqueleto basico del blackjack
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    const btnNuevoJuego2 = document.querySelector('.btn-danger');
    const btnPedirCarta2 = document.querySelector('.btn-primary');
    const btnDetener2 = document.querySelectorAll('.btn-primary')[1];
    const puntosJugador2 = document.getElementById('puntosJugador');
    const contenedorCartas2 = document.querySelector('.cartas-jugador');

    let puntos = 0;

    btnNuevoJuego2.addEventListener('click', () => {
        puntos = 0;
        puntosJugador2.textContent = puntos;
        contenedorCartas2.innerHTML = ''; // limpia las cartas anteriores
        btnPedirCarta2.disabled = false;
        btnDetener2.disabled = false;
    });

    btnPedirCarta2.addEventListener('click', () => {
        const valorCarta = Math.floor(Math.random() * 11) + 1; // simplificado, sin palos todavia
        puntos += valorCarta;
        puntosJugador2.textContent = puntos;

        const imgCarta = document.createElement('div');
        imgCarta.textContent = valorCarta; // luego se reemplaza por una imagen real
        imgCarta.classList.add('carta');
        contenedorCartas2.appendChild(imgCarta);

        if (puntos > 21) {
            puntosJugador2.classList.add('perdiste');
            btnPedirCarta2.disabled = true;
        }
    });

    btnDetener2.addEventListener('click', () => {
        btnPedirCarta2.disabled = true;
        btnDetener2.disabled = true;
        console.log('el jugador se planto con', puntos, 'puntos');
    });

});
