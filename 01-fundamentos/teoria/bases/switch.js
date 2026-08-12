const dia = 9;

// switch compara "dia" contra cada case de arriba a abajo, apenas encuentra
// una coincidencia exacta (usa === por dentro, no convierte tipos) ejecuta ese
// bloque, y el break es para que no siga cayendo a los case de abajo

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break
    default:
        console.log("No es ningun dia de la semana")
}

// con dia = 9 ninguno de los case coincide, entonces cae directo al default


// que pasa si me olvido de poner el break? esto se llama fallthrough

const diaSinBreak = 2;

switch (diaSinBreak) {
    case 1:
        console.log("es lunes");
    case 2:
        console.log("es martes"); // aqui entra, porque diaSinBreak es 2
    case 3:
        console.log("es miercoles"); // pero como el case 2 no tiene break, sigue cayendo aqui tambien
        break; // hasta que encuentra este break, aqui si se detiene
    case 4:
        console.log("es jueves");
}
// resultado: imprime "es martes" Y "es miercoles", aunque diaSinBreak sea 2
// por eso es tan importante no olvidarse el break, es de los errores mas comunes con switch


// a veces el fallthrough se usa A PROPOSITO, cuando varios case deben hacer
// lo mismo, entonces se dejan varios case seguidos sin nada en medio, y solo
// el ultimo tiene el codigo y el break

const diaFinde = 6;

switch (diaFinde) {
    case 0:
    case 6:
        console.log("fin de semana"); // este bloque corre tanto para 0 como para 6
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("dia de semana");
        break;
    default:
        console.log("no es un dia valido");
}