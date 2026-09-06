// objetos literales vs funciones constructoras
// (la forma vieja de hacer "clases" en JS)
 
 
// esto es un objeto literal normal, con {}
// cada uno es independiente, no hay una plantilla detras
const fher = {
    nombre: "Fernando",
    edad: 30,
 
    // los metodos dentro de un objeto se escriben asi, sin "function"
    imprimir() {
        // this apunta al objeto donde esta el metodo (fher)
        // por eso this.nombre = "Fernando"
        //
        // la nota de "no lo llames con ." es porque adentro del metodo
        // se usa this.nombre, no fher.nombre. si pongo fher.nombre
        // tambien funcionaria, pero queda el metodo amarrado al nombre
        // de esa variable especifica, ya no es reutilizable
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}
 
 
// mismo objeto pero para pedro, tocando repetir todo el codigo
// este es el problema que resuelve la funcion constructora
const pedro = {
    nombre: "Pedro",
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}
 
 
// fher.imprimir();
// (queda comentado, solo para recordar como se llamaria el metodo)
 
 
// funcion constructora
// con P mayuscula para que se sepa que no es una funcion cualquiera,
// que se usa con new (convencion, PascalCase)
function Persona(nombre, edad) {
    // solo para ver cuando se ejecuta el constructor
    console.log("se ejecuto esta linea");
 
    // aca this ya no es "el objeto donde vive el metodo", es el
    // objeto NUEVO que se esta creando en este momento
    // es como si new creara un {} vacio y this fuera ese objeto
    this.nombre = nombre;
    this.edad = edad;
 
    // igual se le puede meter un metodo al objeto que se esta armando
    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}
 
 
// new es la que convierte a Persona en un molde
// cuando pongo new Persona('Maria', 18), por detras pasa esto:
// 1. crea un objeto vacio {}
// 2. this adentro de Persona apunta a ese objeto
// 3. corre el codigo de la funcion (llena nombre, edad, imprimir)
// 4. devuelve el objeto ya lleno
//
// por eso maria y melissa son instancias: cada una es su propio
// objeto, con su propio nombre y edad, pero salieron del mismo molde
const maria = new Persona(`Maria`, 18);
const melissa = new Persona(`Melissa`, 35);
 
console.log(maria);
// deberia salir algo como:
// Persona { nombre: 'Maria', edad: 18, imprimir: [Function] }
 
maria.imprimir();     // Nombre: Maria - Edad: 18
melissa.imprimir();   // Nombre: Melissa - Edad: 35
 
 
// en resumen: con {} toca repetir la estructura cada vez
// con function + new me armo un molde y saco instancias de ahi
// asi hacia la gente las "clases" antes de que existiera class en JS
// (que por debajo sigue funcionando parecido a esto)