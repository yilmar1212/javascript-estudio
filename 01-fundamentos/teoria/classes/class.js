// class
// esta es la forma nueva/moderna de hacer lo mismo que el archivo
// anterior (function Persona + new), pero con una sintaxis mas
// clara. por dentro, en el fondo, sigue haciendo cosas parecidas
 
 
class Persona {
 
    // esto se llama "propiedades de clase" o "campos de clase"
    // es una forma de declarar de una vez las propiedades que va
    // a tener cada objeto, con un valor por defecto ("")
    // no es obligatorio ponerlas aca, se podria solo con el
    // constructor, pero asi queda mas claro y ordenado que
    // propiedades tiene la clase con solo mirar arriba
    nombre = "";
    codigo = ""; //propiedades de clases
    frase = "";
 
    // el constructor es un metodo especial, siempre se llama asi
    // (constructor) y se ejecuta automaticamente apenas se crea
    // una instancia nueva con new
    //
    // aca ademas le puse valores por defecto a los parametros:
    // si no le paso nombre, va a usar "sin nombre", etc
    constructor(nombre = "sin nombre", codigo = "sin codigo", frase = "sin frase") {
        //console.log("hola! ");
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}
 
 
const spiderman = new Persona("Peter Parker", "Spider", "soy tu amigable vecino Spiderman");
console.log(spiderman);
// deberia salir algo como:
// Persona { nombre: 'Peter Parker', codigo: 'Spider', frase: 'soy tu amigable vecino Spiderman' }
 
 
// comparando con la funcion constructora del archivo anterior:
// - alla tocaba escribir "function Persona(...)" y meterle this.algo
//   a mano por cada propiedad, y hasta los metodos se armaban con
//   this.metodo = function(){}
// - aca con class ya viene mas organizado: las propiedades se ven
//   de una vez arriba, el constructor es una parte fija de la clase,
//   y si quisiera meterle un metodo (como el imprimir de antes) se
//   pondria directo abajo del constructor, sin la palabra function
//   ni el this.metodo =
//
// osea que si, esta es la forma buena/limpia, la funcion constructora
// de antes es como el abuelo de esto