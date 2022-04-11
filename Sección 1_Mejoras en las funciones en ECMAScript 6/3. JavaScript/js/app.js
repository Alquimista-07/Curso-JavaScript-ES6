// 4. Valores por default en argumentos

// En ES6 podemos recibir valor por omisión o default en los
// parámetros de las funciones. Pueden ser definidos como variables
// primitivas, funciones, expresiones o arreglos.

// Por ejemplo tenemos la siguiente función con ES5
console.log( "=============================" );
console.log( "Anteriormente con ES5" );
console.log( "=============================" );
console.log( multiplicar );

function multiplicar( a, b ){

    b = typeof b !== 'undefined' ? b : 1;
    return a * b;

}

console.log( "Resultado" );
console.log( multiplicar( 5 ) );
console.log( multiplicar( 5, 5 ) );

// Ahora con ES6 simplemente podemos hacer lo siguiente:
console.log( "=============================" );
console.log( "Ahora con ES6" )
console.log( "=============================" );
console.log(multipli);

function multipli( a, b=1 ){
    
    return a * b;
    
}

console.log( "Resultado" );
console.log( multipli( 5 ) );
console.log( multipli( 5, 5 ) );

// Otro ejemplo usando ES6
console.log( "=============================" );
console.log( "Otro ejemplo usando ES6" );
console.log( "=============================" );
console.log( f );

function f(x, y = 7, z = 42 ){

    return x + y + z;

}

console.log( "Resultado" );
console.log( f( 1 ) ); // 50
console.log( f( 7, 7, 7 ) ); // 21

// Otro ejemplo usando ES6 con strings
console.log( "=====================================" );
console.log( "Otro ejemplo usando ES6 con strings" );
console.log( "=====================================" );
console.log( cambiaFondo );

function cambiaFondo( elemento, color = 'yellow' ){

    elemento.style.backgroundColor = color;

}

console.log( "Resultado" );
cambiaFondo( document.getElementById( "cuadro" ) ); // Color congifuarado a yellow
cambiaFondo( document.getElementById( "cuadro" ), undefined ); // Color configurado a yellow también
cambiaFondo( document.getElementById( "cuadro" ), "blue" ); // Color configurado a blue

// Otro ejemplo usando ES6
console.log( "=====================================" );
console.log( "Otro ejemplo usando ES6 con arreglos" );
console.log( "=====================================" );
console.log( agregar );

function agregar( valor, arr = [] ){

    arr.push( valor ); // Añade uno o más elementos al final del arreglo
    return arr;

}

console.log( "Resultado" );
console.log( agregar() ); // [1]
console.log( agregar( 1 ) ); // [1]
console.log( agregar( 2 ) ); // [2] no [1,2]

// También podemos hacer que si no lega algún valor entonces ejecutamos una función
console.log( "=====================================" );
console.log( "Otro ejemplo usando ES6 con funciones" );
console.log( "=====================================" );
console.log( llamarAlgo );

function llamarAlgo( cosa = algo() ){
    return cosa;
}

function algo(){
    //return "Hola";
    return Math.floor( Math.random() * 10 ); // Numero aleatorio entre 0 y 9
}

console.log( "Resultado" );
console.log( llamarAlgo() );
console.log( llamarAlgo( "Hola Mundo!!!..." ) );

// Otro ejemplo cambiando valores
console.log( "=====================================" );
console.log( "Otro ejemplo usando ES6 con valores" );
console.log( "=====================================" );
console.log( f2 );

function f2( x = 1, y ){ // NOTA: Acá no es bueno colocar los parámetros con valores que son por omisión primero, es decir es mejor dejarlos al final

    return [ x, y ];

}

console.log( f2() ); // [1, undefined]

// También en estos casos podemos usar lo que se llama el destructuring
// que se verá más adelante
console.log( "==========================================" );
console.log( "Otro ejemplo usando ES6 con destructuring" );
console.log( "==========================================" );
console.log( f3 );

function f3( [ x,y ] = [ 1, 2 ], { z : z } =  {z : 3 } ){

    return x + y + z;

}

console.log( "Resultado" );
console.log( f3() ); // 6