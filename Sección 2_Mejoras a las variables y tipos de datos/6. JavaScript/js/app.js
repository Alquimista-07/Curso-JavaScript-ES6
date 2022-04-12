// 11. Destructuring, asignar valores de forma rápida

// Destructuring es un nuevo método para extraer datos rápidamente de un objeto {} 
// o un arreglo [] sin tener que escribir mucho código.

//* **************************** */
// Ejemplo con arreglos
//* **************************** */
let foo = [ 'uno', 'dos', 'tres' ];
let [ one, two, three ] = foo;
console.log( one ); // uno

//* **************************** */
// Ejemplo con objetos
//* **************************** */
let modulo = {
    cuadrado( lon ){ console.log( lon * lon ); },
    circulo( radio ){ console.log( Math.PI * Math.pow(radio, 2) ); },
    texto( text ){ console.log( text ); }
};

let { cuadrado, texto, circulo } = modulo;
cuadrado( 5 );   // 25
texto( "Hola" ); // Hola
circulo( 10 );   // 31,41...

// Destructuring también puede ser usado para pasar objetos a una función, permitiéndonos
// obtener propiedades específicas de un objeto.
// También nos permite asignar valores por default como argumentos.

//* **************************** */
// Ejemplo con objetos
//* **************************** */
let juan = {
    nombre: 'Juan',
    paterno: 'Cáceres'
}

let ariadna = {
    nombre: 'Ariadna',
    paterno: 'Cáceres',
    materno: 'Hernández'
}

function nombreCompleto( { nombre, paterno, materno = 'N/A' }){
    console.log( `Hola ${nombre} ${paterno} ${materno}` );
}

nombreCompleto( juan );    //-> Hola Juan Cáceres N/A
nombreCompleto( ariadna ); //-> Hola Ariadna Cáceres Hernández
