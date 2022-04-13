// 15. Los objetos de propagación o spreads

// La sintaxis de Spread nos permite expandir la expresión para
// los siguientes casos:

// * Arreglos (arrys)
// * Llamadas a funciones
// * Múltiple destructuring de variables

//**************************************** */
// Ejemplo en funciones
//**************************************** */
console.log( "===============================" );
console.log( "Ejemplo en funciones 1" );
console.log( "===============================" );

const suma = ( a, b ) => a + b; // Función de flecha

let nums = [ 3, 5 ];

// La notación del spread son los ... y luego se pasa el arreglo
console.log( suma( ...nums ) ); // Es igual como si colocaramos suma( nums[0], nums[1] ), es decir lo sustituye

// Otro ejemplo es el siguiente:
console.log( "===============================" );
console.log( "Ejemplo en funciones 2" );
console.log( "===============================" );

function fn( x, y, z ){
    console.log( x + y + z);
}

var numeros = [ 0, 1, 2 ];

// Invocamos la función
fn( ...numeros ); // 3

// Otro ejemplo es el siguiente:
console.log( "===============================" );
console.log( "Ejemplo en funciones 3" );
console.log( "===============================" );

function fn2( v, w, x, y, z ){
    console.log( z );
}

var num = [ 0, 1 ];

// Invocamos la función
fn2( -1, ...num, 2, ...[3] );

// Otro ejemplo es el siguiente:
console.log( "===============================" );
console.log( "Ejemplo en funciones 4" );
console.log( "===============================" );

function multiplicador( multiplicador, ...numeros){

    return numeros.map( function( elemento ) {
        return multiplicador * elemento;
    });

}

var salida = multiplicador( 2, 1, 2, 3, 4 );
console.log( salida ); //[ 2, 4, 6, 8 ]

// Otro ejemplo es el siguiente:
console.log( "===============================" );
console.log( "Ejemplo en funciones 5" );
console.log( "===============================" );

function ordena( ...numeros ){
    var salida = numeros.sort();
    return salida;
}

console.log( ordena( 5, 3, 7, 1 ) ); // 1, 3, 5, 7

//**************************************** */
// Ejemplo en arreglos
//**************************************** */
console.log( "===============================" );
console.log( "Ejemplo en arreglos 1" );
console.log( "===============================" );

let cde = [ 'c', 'd', 'e' ];

let abc = [ 'a', 'b', ...cde, 'f', 'g' ]; // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

console.log( abc );

// Otro ejemplo es el siguiente:
console.log( "===============================" );
console.log( "Ejemplo en arreglos 2" );
console.log( "===============================" );

var num1 = [ 0, 1, 2 ];
var num2 = [ 3, 4, 5 ];

num1.push( ...num2 );

for( var i = 0; i < num1.length; i ++){
    console.log( `${num1[i]}` );
}

//**************************************** */
// Ejemplo en objetos
//**************************************** */
console.log( "===============================" );
console.log( "Ejemplo en objetos 1" );
console.log( "===============================" );

let mapABC = {
    a : 5,
    b : 6,
    c : 3
};

let mapABCD = {
    ...mapABC,
    d : 7
}; // { a : 5, b : 6, c : 3, d: 7 }

console.log( mapABCD );

// Otro ejemplo es el siguiente:
console.log( "===============================" );
console.log( "Ejemplo en objetos 2" );
console.log( "===============================" );

function fun1( ...numeros ){

    console.log( numeros.length );

}

fun1(); // 0
fun1( 5 ); // 1
fun1( 5, 6, 7 ); // 3