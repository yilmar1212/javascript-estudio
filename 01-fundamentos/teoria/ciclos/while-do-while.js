

const carros = ["ford", "mazda", "olimpus", "ferrari", "chevrolet", "mustang"]


let i = 0;
/*

while (i < carros.length) {   // para que esto se ejecute la condicion siempre debe ser verdadera, por ejemplo: undefined, null, false son condiciones falsas
    console.log(carros[i]);
    //i = i + 1; esto es igual a i++
    i++;
    // tambien esta el i += 2 que es incrementarlo de dos en dos, y puede ser de tres en tres etc.
}

*/


// break vs continue

while (i < carros.length) {
    if (i === 1) {
        break;
        // el break rompe el ciclo completo, ya no revisa mas nada, se sale del while
        // por eso aqui solo se imprime "ford" y ya, nunca llega a mazda ni a los demas

        //continue; si en vez de break pones continue, sera un bucle infinito que se comera toda tu ram, tendras que volver a entrar y salir, despues de haber quitado el continue XD
    }
    console.log(carros[i]);
    i++;
}

// por que continue deja todo pegado en un bucle infinito en este caso especifico?
// continue no rompe el ciclo, salta directo a revisar la condicion de nuevo,
// SIN pasar por las lineas de abajo. entonces cuando i llega a 1, el continue
// hace que se salte el i++ de mas abajo, i se queda pegado en 1 para siempre,
// la condicion (i < carros.length) sigue siendo true por siempre y el while
// nunca termina. moraleja: si usas continue, asegurate que el contador se
// siga moviendo de alguna otra forma antes del continue, si no te vas a quemar la ram



console.warn("Do While");

// la diferencia principal con el while normal es el orden: el do while
// SIEMPRE ejecuta el bloque una primera vez, y AL FINAL revisa la condicion.
// entonces aunque la condicion sea falsa desde el inicio, el codigo de adentro
// se ejecuta minimo una vez. el while normal en cambio revisa antes de entrar,
// si la condicion ya es falsa desde el principio, nunca entra ni una vez

let j = 0;

do {
    console.log(carros[j]);
    j++;
} while (carros[j]);

// dos detalles de esta parte que vale la pena aclarar:

// 1. la condicion "carros[j]" no es lo mismo que "j < carros.length". aqui
//    se esta usando el valor del carro como condicion (un string es "truthy"),
//    y cuando j se sale del arreglo, carros[j] da undefined, que es "falsy",
//    y ahi para el loop. funciona, pero es mas facil de confundir. lo mas
//    claro y lo que se deberia usar es "j < carros.length", asi la condicion
//    dice literalmente lo que esta pasando

// 2. el "{}" que quedaba pegado despues del while(carros[j]) NO es parte del
//    do-while, un do-while termina en punto y coma: do {...} while(condicion);
//    ese "{}" suelto es un bloque vacio aparte, no hace nada, pero mejor
//    quitarlo para que no genere confusion al leerlo