// 13. Nuevas características de los objetos en JavaScript ES6

//======================================================================================
// 1. Sintaxis corta para los objetos:

var x = "Hola", y = "Mundo!!!...";

// Antes:
objAntes = {
    x: x,
    y: y
}

console.log( "ObjAntes", objAntes );

// Ahora
objAhora = {
    x,
    y
}

console.log( "ObjAhora", objAhora );

//======================================================================================
// 2. Soporte de nombres calculados en la definición de propiedades:

let obj = {
    foo: "bar",
    [ "id" + num() ]: 4 // Esto es el soporte calculado de definiciones de propiedades, por ejemplo llamados a diferentes cadenas o en esta caso una cadena y una función
}

console.log( obj );
//
function num(){
    return Math.floor( Math.random() * 10 );
}

//======================================================================================
// 3. Soporte de notación tipo método en la definición de propiedades, en forma
// regular y como función generadora.

let obj2 = {
    foo( a, b ) {}, // Función
    bar( x, y ) {}, // Función
    *num( x, y ) {} // Función generadora
}

console.log( obj2 );

/* Otro ejemplo */
let obj3 = {
    // Anteriormente quedaría
    // suma: function suma( a, b ) { return a + b },
    // suma: function( a, b ) { return a + b }, // O en todo caso una función anónima ya que hace referencia a suma
    
    // Pero ahora se puede de una forma más corta
    suma ( a, b ) { return a + b },
    multiplica ( x, y ) { return x * y },
    *num2( x, y ) { }
}

console.log( obj3.suma( 10, 3) );
console.log( obj3.multiplica( 10,3 ) );

//======================================================================================
// 4. Método assign() para copiar objetos.

// NOTA: Como sabiamos los objetos se pasan por referencia y si igualabamos un objeto a otro se perdia el valor
//       ahora con el assign() lo que hace es pasar los parámetros, donde vamos a tener un objeto donde vamos a 
//       vaciar los demás valores de los demás objetos

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj4 = Object.assign( o1, o2, o3 );
console.log( obj4 ); // { a : 1, b : 2, c : 3 }
console.log( o1 );   // { a : 1, b : 2, c : 3 }
console.log( o2 );   // { b : 2 }
console.log( o3 );   // { c : 3 }

/* Otro ejemplo */
// En este caso cae en cascada y se van reemplazando los valores debido a que los valores de los objetos se pasan por referencia

var o4 = { a: 1, b : 1, c: 1 };
var o5 = { b: 2, c : 2 };
var o6 = { c: 3 };

var obj5 = Object.assign( {}, o4, o5, o6 );
console.log( obj5 ); // { a : 1, b : 2, c : 3 }
