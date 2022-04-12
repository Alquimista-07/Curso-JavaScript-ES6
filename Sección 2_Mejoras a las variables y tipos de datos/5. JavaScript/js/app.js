// 10. Los conjuntos (sets) y mapas (maps) en JavaScript ES6

// Los mapas (Map) son una estructura de datos que almacenan pares de llave (key) y valor (value),
// los conjuntos (Set) tienen la características de no aceptar duplicados, y ambos permiten búsquedas
// eficiones cuando se tiene un gran volumen de información porque no guardan sus elementos ordenados
// por un índice, como ocurre con los arreglos.

//***************************** */
// Sets
//***************************** */
var s = new Set();

// Añade 3 elementos, cadena1 se repite
s.add( "cadena1" ).add( "cadena2" ).add( "cadena1" );

// El tamaño es 2
console.log( s.size === 2 ); // true
console.log( s.size );

// El conjutno no tiene la cadena hola
console.log( s.has( "hola" ) ); // false

//***************************** */
// Maps
//***************************** */
var m = new Map();

// Añade la llave "hola" con el valor 42
m.set( "hola", 42 );

// Añade la llave "a" con el valor 34
m.set( "edad", 34 );

// Obtiene el valor asociado a la llave a
console.log( m.get( "hola" ) ); // 42
console.log( m.get( "edad" ) ); // 34