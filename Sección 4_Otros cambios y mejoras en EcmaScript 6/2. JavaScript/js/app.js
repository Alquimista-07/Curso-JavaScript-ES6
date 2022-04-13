// 19. Nuevos métodos de JavaScript en ES6

// Asignación de propiedad de objeto:
// Nueva función para asignar propiedades enumerables de uno o más objetos
// fuente a un objeto de destino (método assign).
//
//****************************************************** */
// Búsqueda de un elemento en un arreglo:
//****************************************************** */
// Nueva función para encontrar un elemento en un arreglo.

console.log( "=========================" );
console.log(" Ejercicio 1");
console.log( "=========================" );

var b1 = [ 1, 3, 4, 2].find( x => x > 3); // 4
var b2 = [ 1, 3, 4, 2].findIndex( x => x > 3); // 2

console.log( b1 );
console.log( b2 );

// Otro ejemplo
console.log( "=========================" );
console.log(" Ejercicio 2");
console.log( "=========================" );

var dest = { quux: 0 };
var src1 = { foo: 1, bar: 2 };
var src2 = { foo: 3, baz: 4 };

Object.assign( dest, src1, src2 );
console.log( dest );

//****************************************************** */
// Repetición de cadenas
//****************************************************** */
// Nueva funcionalidad de repetición de cadenas.

console.log( "=========================" );
console.log(" Ejercicio 3");
console.log( "=========================" );

var r1 = "*".repeat( 4 * 10);
var r2 = "foo".repeat( 3 );

console.log( r1 );
console.log( r2 );

//****************************************************** */
// Búsqueda de cadenas
//****************************************************** */
// Nuevas funciones de cadena específicas para buscar una subcadena.

console.log( "=========================" );
console.log(" Ejercicio 4");
console.log( "=========================" );

var cadena = "hola como están todos";
console.log( cadena.startsWith( "ola", 1 ) ); // Inicia a validar de la segunda posición recordando que las posiciones son a partir desde 0,1,2...
console.log( cadena.endsWith( "dos") );
console.log( cadena.includes( "ola" ) );
console.log( cadena.includes( "ola", 1 ) ); // Inicia a validar de la segunda posición recordando que las posiciones son a partir desde 0,1,2...
console.log( cadena.includes( "ola", 2 ) ); // Inicia a validar de la tercera posición recordando que las posiciones son a partir desde 0,1,2,3...

//****************************************************** */
// Comprobación de tipo de número
//****************************************************** */
// Nuevas funciones para verificar números que no son números y números finitos.

console.log( "=========================" );
console.log(" Ejercicio 5");
console.log( "=========================" );

Number.isNaN( 42 ) === false;
Number.isNaN( NaN ) === true;

Number.isFinite( Infinity ) === false;
Number.isFinite( -Infinity ) === false;
Number.isFinite( NaN ) === false;
Number.isFinite( 123 ) === true;

//****************************************************** */
// Número de verificación de seguridad
//****************************************************** */
// Comprobar si un número entero está en el rango seguro, es decir, está
// representado correctamente por JavaScript (donde todos los números, incluidos
// los números enteros, son técnicamente número en coma flotante).
// ± 9007199254740991 o ± 9,0007,199,254,740,991

console.log( "=========================" );
console.log(" Ejercicio 6");
console.log( "=========================" );

console.log( Number.isSafeInteger( 42 ) === true );
console.log( Number.isSafeInteger( 9007199254740991 ) === true );
console.log( Number.isSafeInteger( 9007199254740992 ) === false );

//****************************************************** */
// Comparación de números
//****************************************************** */
// Disponiblidad de un valor estándar de Epsilon para una comparación más
// precisa de los números de coma flotante. Esto ya que JavaScript no es muy
// preciso entonces puede llegar a dar algunos problemas como en el siguiente
// ejemplo

console.log( "=========================" );
console.log(" Ejercicio 7");
console.log( "=========================" );

console.log( 0.1 + 0.2 === 0.3 ); // false
console.log( Math.abs( ( 0.1 + 0.2 ) -0.3 ) < Number.EPSILON ); // true

//****************************************************** */
// Número de truncamiento
//****************************************************** */
// Trunca un número de coma flotante a su parte integral, soltando completamente
// la parte fraccionaria.

console.log( "=========================" );
console.log(" Ejercicio 8");
console.log( "=========================" );

console.log( Math.trunc( 42.7 ) ); // 42
console.log( Math.trunc( 0.1 ) );  // 0
console.log( Math.trunc( -0.1 ) ); // -0

//****************************************************** */
// Determinación de signo de número
//****************************************************** */
// Determine el signo de un número, incluidos los casos especiales de cero firmado
// y no número.

console.log( "=========================" );
console.log(" Ejercicio 9");
console.log( "=========================" );

console.log( Math.sign( 7 ) );   // 1
console.log( Math.sign( 0 ) );   // 0
console.log( Math.sign( -0 ) );  // -0
console.log( Math.sign( -7 ) );  // -1
console.log( Math.sign( NaN ) ); // NaN
