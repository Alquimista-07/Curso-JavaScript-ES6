// 8. El nuevo tipo de datos "símbolo" o "symbol"

// Los símbolos son un nuevo tipo de dato primitivo.
// Los símbolos son únicos e inmutables (no pueden cambiarse) y son utilizados cono identificadores para propiedades de objetos.
// Los símbolos prueden tener una descripción opcional, pero sólo es utilizada para fines del depurador.
// Cada valor del tipo symbol tiene asociado un valor del tipo String o undefined que sirve únicamente como descripción del símbolo.
// El constructor Symbol no debe ser usado con el operador new.
// Tampoco debe ser extendido mendiante clases.

// Ejemplos:
// Si siguiente código crea tes símbolos nuevos. Hay que destacar que Symbol("foo") no convierte la cadena "foo" en un símbolo,
// sino que crea un símbolo nuevo que tiene la misma descripción.

var sim1 = Symbol();
var sim2 = Symbol( "foo" ); // Lo que esta en "" (como "foo") nos sirve como una pequeña documentación
var sim3 = Symbol( "foo" ); // Lo que esta en "" (como "foo") nos sirve como una pequeña documentación

console.log( Symbol( "foo" ) === Symbol( "foo" ) ); // false ya que aunque tengan la misma descripción no son iguales

/*
var sym = new Symbol(); //TypeError
*/

var sym = Symbol( "foo" );
console.log( typeof sym );      // symbol
var symObj = Object( sym );     // Meterlo a un objeto
console.log( typeof symObj );   // object

/*********************** */
Symbol( "foo" ) !== Symbol( "foo" );
const foo = Symbol();
const bar = Symbol();

console.log( typeof foo === "symbol");    // true: Nos dice que es un symbol y no una constante como se creería, es decir no cambia su tipo
console.log( typeof bar === "symbol");    // treu: Nos dice que es un symbol y no una constante como se creería, es decir no cambia su tipo

let obj = {};
obj[ foo ] = "foo";
obj[ bar ] = "bar";
JSON.stringify( obj );               // {}
console.log( Object.keys( obj ) );                  // []
console.log( Object.getOwnPropertyNames( obj ) );   // []
console.log( Object.getOwnPropertySymbols( obj ) ); // [ foo, bar ]

// También vamos a tener lo que son las funciones: 
// Symbol.for();
// Symbol.keyFor();

//* ************************************* */

const foo2 = Symbol( "Este simbolo es foo" ); // Tiene una descripción (entre "") y no es un valor
const bar2 = Symbol( "Este simbolo es bar" ); // Tiene una descripción (entre "") y no es un valor
let obj2 = {};
obj2[ foo2 ] = "foo";
obj2[ bar2 ] = "bar";
console.log( JSON.stringify( obj2 ) );               // {}
console.log( Object.keys( obj2 ) );                  // []
console.log( Object.getOwnPropertyNames( obj2 ) );   // []
console.log( Object.getOwnPropertySymbols( obj2 ) ); // [ foo, bar ]

//* ************************************************ */
const COLOR_RED     = Symbol( 'Red' );
const COLOR_ORANGE  = Symbol( 'Orange' );
const COLOR_YELLOW  = Symbol( 'Yellow' );
const COLOR_GREEN   = Symbol( 'Green' );
const COLOR_BLUE    = Symbol( 'Blue' );
const COLOR_VIOLET  = Symbol( 'Violet' );

function complemento( color ){

    switch ( color ){

        case COLOR_RED:
            return COLOR_GREEN;

        case COLOR_ORANGE:
            return COLOR_BLUE;

        case COLOR_YELLOW:
            return COLOR_VIOLET;

        case COLOR_GREEN:
            return COLOR_RED;
        
        case COLOR_BLUE:
            return COLOR_ORANGE;

        case COLOR_VIOLET:
            return COLOR_YELLOW;

        default:
            throw new Exception( 'Unknown color: ' + color );

    }

}

console.log( complemento( COLOR_RED ) );