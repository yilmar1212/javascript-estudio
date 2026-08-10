

const regresaTrue = () => {
    console.log("Regresa true");
    return true;
} 


const regresaFalse = () => {
    console.log("Regresa false");
    return false;
} 


console.warn("Not la negacion");
console.log(true);
console.log(!true); // ! la negacion es para pasar un valor boleano a su opuesto, si es true pasa a falso y viceversa, se puede usar tambien la doble negacion


console.log(!regresaFalse()); // la negacion tambien se puede usar en cualquier cosa que regrese un valor boleano  


console.warn("and"); // true si todos los valores son verdaderos, (malos recuerdos de matematicas discretas jajaja)

console.log( true && true ); // true
console.log( true && false ) // false


console.log("=======================")
console.log( regresaFalse() && regresaTrue() ) // false
//este caso es un poco particular,
// Primero se ejecuta regresaFalse()
// Imprime: "Regresa false"
// Regresa: false
//
// Como && necesita que AMBOS sean true,
// al encontrar false ya sabe que el resultado será false. desistio de la busqueda XD
// Por eso NO ejecuta regresaTrue().
//
// Resultado:
// Regresa false
// false

console.log("por el contrario de empezar con false")
console.log( regresaTrue() && regresaFalse() );

// regresaTrue() → imprime "Regresa true" y retorna true
// Como es true, && necesita comprobar el segundo valor. aqui si vale la pena seguir buscando
//
// regresaFalse() → imprime "Regresa false" y retorna false
//
// Resultado:
// Regresa true
// Regresa false
// false

console.log( "cuatro condiciones: ", true && true && true && false ) // falso



console.warn("or") // con cualquiera de los dos da true

console.log( false || true );
console.log( true || false );

console.log( regresaTrue() || regresaFalse() );
console.log( regresaFalse() || regresaTrue() );

console.log(regresaTrue() || regresaFalse()); 
// Primero ejecuta regresaTrue()
// Imprime: "Regresa true"
// Regresa: true
//
// Como ya encontró true, || ya sabe que el resultado será true.
// Por eso NO ejecuta regresaFalse().
//
// Resultado:
// Regresa true
// true


console.log(regresaFalse() || regresaTrue()); 
// Primero ejecuta regresaFalse()
// Imprime: "Regresa false"
// Regresa: false
//
// Como encontró false, todavía necesita revisar el segundo. le toca seguir revisando
// Entonces ejecuta regresaTrue()
// Imprime: "Regresa true"
// Regresa: true
//
// false || true → true
//
// Resultado:
// Regresa false
// Regresa true
// true

console.log( "cuatro condiciones: ", false || false || false || true ) // verdadero




// RESUMEN:
// || → con encontrar un true, ya se detiene.
// && → con encontrar un false, ya se detiene.




console.warn("Asignaciones")

const soyUndefined  = undefined;
const soyNull  = null;
const soyFalso  = false;

const a1 = false && "hola mundo" && 150; // con true de primero se esta asignando el ultimo valor, pero con false seria falso ya que estamos usando &&
const a2 = "hola" && "mundo" && soyFalso && true;  // 
const a3 = soyFalso || "ya no soy falso";  // 
const a4 = soyFalso || soyUndefined || soyNull || "ya no soy falso de nuevo" || true;  // aqui solo llega hasta ya no soy falso de nuevo, ya que como estamos trabajando con "or" pues ya encontro un true, entonces todo lo demas no importa
const a5 = soyFalso || soyUndefined || regresaTrue() || "ya no soy falso de nuevo" || true;  // aqui solo llega hasta ya no soy falso de nuevo, ya que como estamos trabajando con "or" pues ya encontro un true, entonces todo lo demas no importa



console.log(a1, a2, a3, a4, a5);

if ("cuatro condiciones: ", true && true && true && false ) { // no es recomendable hacer esto asi
    console.log("hacer algo");
    
}else{
    console.log("hacer otra cosa");
    
}
