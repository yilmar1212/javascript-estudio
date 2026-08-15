// 2D = two of clubs (terboles)
// 2C = two of diamonds (Diamantes)
// 2h = two of hearts (corazones)
// 2S = two of spades (spadas)


let deck = [];
const tipos = ["C", "D", "H", "S"]
const especiales = ["A", "J", "Q", "K"]



const crearDeck = () => {



    for (let i = 2; i <= 10; i++){
        for (let tipo of tipos){
            deck.push( i + tipo );
        }

       // deck.push( i + "C" );   en vez de hacerlo solo asi y repetir con cada letra, se puede usar otro for
    } 

        for (let tipo of tipos){
            for (let esp of especiales){
                deck.push( esp + tipo );
            }
    } 


    //console.log( deck );
    deck = _.shuffle ( deck );
    console.log( deck );
    return deck;

    
}

crearDeck(); 


// esta funcion te permite pedir una carta

const pedirCarta = ( ) => {
    if (deck.length === 0){
        throw "no hay cartas en el deck";
    }


    const carta = deck.pop();

    console.log (deck)
    console.log (carta); //carta debe ser de la baraja
    return;
}



/* para explcar despues
for (let  i = 0; i <= 100; i++){  


pedirCarta();

} */



pedirCarta();