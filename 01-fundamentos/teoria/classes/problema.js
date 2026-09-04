


const fher = {
    nombre: "Fernando",
    edad: 30,
    imprimir() {                // cuando se quiera hacer una referencia no lo llames con. ejemplo: fher.nombre
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
        
    }
}


const pedro = {
    nombre: "Pedro",
    edad: 15,
    imprimir() {                // cuando se quiera hacer una referencia no lo llames con. ejemplo: fher.nombre
    console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
        }
    }





// fher.imprimir ();

         // con P mayuscula para indicar que es oper camell case, o como se llame 
function Persona (nombre, edad) {
    console.log("se ejecuto esta linea");
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
         console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

              // palabra new es para crear instancias
const maria = new Persona (`Maria`, 18)
const melissa = new Persona (`Melissa`, 35)

console.log(maria);
maria.imprimir();
melissa.imprimir();


// todo este codigo anterior es lo que hacian para crear "clases", por asi decirlo es un metodo antiguo