// ==========================================
// PALABRAS RESERVADAS
// ==========================================

// que son las palabras reservadas?
// son palabras que JS ya tiene apartadas para su propio uso, o sea que ya significan 
// algo dentro del lenguaje, por eso no las puedo usar como nombre de variable, 
// funcion, clase, etc. porque chocarian con lo que el motor de JS ya entiende por esa palabra

// let const = 123;
// esto explota, tira SyntaxError, porque "const" ya es una palabra reservada,
// JS la necesita para declarar constantes, entonces no la puedo usar de nombre de variable
// es como si en español intentaras usar "si" como nombre propio de una condicional, no tiene sentido


// otros ejemplos que tampoco puedo usar como nombre de variable:

// let let = 1;         // error, "let" se usa para declarar variables
// let function = 2;     // error, "function" se usa para declarar funciones
// let if = 3;            // error, "if" es una estructura de control
// let class = 4;         // error, "class" se usa para clases
// let return = 5;        // error, "return" se usa dentro de funciones
// let new = 6;           // error, "new" se usa para instanciar objetos
// let this = 7;          // error, "this" hace referencia al contexto


// lista de las que mas se usan en el dia a dia:
// var, let, const, function, return, if, else, for, while, do, switch, case, 
// default, break, continue, try, catch, finally, throw, class, extends, super, 
// new, this, typeof, instanceof, in, of, delete, void, null, true, false, 
// import, export, async, await, yield, static, get, set


// caso especial: NaN, Infinity y undefined
// tecnicamente no estan en la lista oficial de palabras reservadas, pero ya tienen 
// un significado especial dentro de JS, asi que aunque a veces "funcionen" como 
// nombre de variable, mejor nunca usarlos, solo te vas a confundir a ti mismo y 
// a quien lea tu codigo despues


// ==========================================
// BUENAS PRACTICAS PARA NOMBRAR VARIABLES Y ARCHIVOS
// ==========================================

// 1. usar camelCase para variables y funciones
let miNombreDeUsuario = "yilmar1212"; // bien
// let mi_nombre_de_usuario = "yilmar1212"; // esto es snake_case, no es la convencion en JS
// let MiNombreDeUsuario = "yilmar1212"; // esto es PascalCase, se usa para CLASES, no variables


// 2. no usar mayuscula al inicio en variables normales
// let FuncionCasa = () => {}; // mal, esto confunde porque parece una clase
function funcionCasa() {} // bien, con minuscula al inicio


// 3. nada de tildes ni la ñ, ni en variables ni en nombres de archivo
// let años = 5;   // mal, evitarlo
let anios = 5;     // bien

// esto aplica todavia mas fuerte para los NOMBRES DE ARCHIVO, ejemplo:
// "informacion.js"  -> bien
// "configuracion.js" -> bien
// evitar tildes y la ñ en los nombres de archivo
// la razon es que la mayoria de servidores donde se despliega el codigo corren 
// Linux, y puede tener problemas con la codificacion de esos caracteres especiales, 
// entonces algo que en tu PC (Windows/Mac) te funciona perfecto, en el servidor 
// te puede tirar error 404 o de encoding


// 4. nombres de archivo en minuscula y con guiones, no con espacios
// "Mi Archivo Final.js"  -> mal, tiene espacios y mayusculas
// "mi-archivo-final.js"  -> bien
// "miArchivoFinal.js"    -> tambien valido (camelCase), depende de la convencion del equipo


// 5. nombres descriptivos, nada de variables tipo "x", "dato1", "cosa"
// let x = 21; // mal, no dice nada
let edadUsuario = 21; // bien, se entiende de una que es