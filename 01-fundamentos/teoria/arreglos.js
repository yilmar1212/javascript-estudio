// ==========================================
// ARREGLOS (ARRAYS)
// ==========================================

// un arreglo es una estructura de datos en forma de lista que sirve para guardar 
// varios valores juntos en una sola variable, ya sean numeros, textos, booleanos, 
// funciones, otros arreglos, objetos... literalmente lo que sea
// cada elemento dentro del arreglo ocupa una posicion, y esas posiciones (indices) 
// empiezan a contar desde el 0, no desde el 1


// no olvidar poner la A en mayuscula
// const arr = new Array(10);
// esta es la forma "larga" de crear un arreglo, con el constructor Array()
// casi nadie la usa asi en el dia a dia, ademas si le pasas un solo numero (como el 10)
// no crea un arreglo con el valor 10 adentro, sino un arreglo VACIO con 10 espacios

/* const arr = [];
console.log(arr); */
// esta es la forma corta y la que se usa casi siempre: los corchetes []
// se le llama "notacion literal" y es mucho mas legible


let videoJuegos = [ "the last of us", "warzone", "cyberpunk 2077" ];
//console.log(videoJuegos);
console.log(videoJuegos[0]); // "the last of us"
// para acceder a un elemento del arreglo se usa el indice entre corchetes
// videoJuegos[0] es el primero, videoJuegos[1] el segundo, y asi sucesivamente
// si pusiera videoJuegos[3] me daria undefined, porque ese indice no existe


// los arreglos en JS son bien flexibles, un mismo arreglo puede tener 
// tipos de datos totalmente distintos mezclados, cosa que en otros lenguajes 
// mas estrictos no se puede hacer tan facil
let arregloCosas = [
    true,             // [0] boolean
    123,              // [1] number
    "yilmar",         // [2] string
    1 + 2,            // [3] number (esto se resuelve antes de guardarse, osea guarda 3)
    function () {},   // [4] una funcion tradicional
    () => {},         // [5] una arrow function
    { a: 1 },         // [6] un objeto
    [ "ellie", "ghost", "vincent(v)", [    // [7] un arreglo... dentro del arreglo
        "joel",
        "capitan price",
        "jackie",
        ]]
    ]

// console.log(arregloCosas);
// console.log(arregloCosas[2]); // "yilmar"

console.log(arregloCosas[7][3][1]);
// esto es acceso encadenado, se va abriendo como capas de cebolla:
// arregloCosas[7] -> me da el arreglo [ "ellie", "ghost", "vincent(v)", [...] ]
// arregloCosas[7][3] -> me da el arreglo de adentro [ "joel", "capitan price", "jackie" ]
// arregloCosas[7][3][1] -> me da "capitan price", porque esta en la posicion 1 de ese ultimo arreglo


// esto se le conoce como ARREGLO ANIDADO (nested array), un arreglo que vive 
// dentro de otro arreglo, y se puede anidar tantas veces como uno quiera, 
// aunque si te vas 4 o 5 niveles para adentro ya se vuelve dificil de leer