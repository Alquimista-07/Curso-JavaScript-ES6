// 23. Fundamentos para los proxys en ES6

// Proxying
//
// El objeto Proxy se usa para definir un comportamiento personalizado para operaciones
// fundamentales (por ejemplo, para observar propiedades, cuando se asignan, enumeración,
// invocación de funciones, etc).
//
// Handler: Objeto que gestiona las intercepciones a las propiedades del objeto proxy.
//
// Traps: Son los métodos interceptores que proveen acceso a las propiedades.
//
// Target: El objeto que visualiza este objeto. Suele usarse como backend de almacenamiento
//         del proxy.
//
//-------------------------------------------
// Syntaxix:
//-------------------------------------------
//
//var p = new Proxy( target, handler );
//
//handler.apply(), intercepta la llamada a una función.
//
//****************************** */
// Ejemplo 1 - Proxy básico
//****************************** */
console.log( "=============================" );
console.log( "Proxy Básico" )
console.log( "=============================" );

// NOTA: Esto lo podemos hacer sobre un arreglo, un objeto y en este caso que es sobre
//       una función
const target = function( nombre, apellido ){

    console.log( "Mi nombre es", nombre, apellido );

}

const handler = {

    apply : function( target, valor, args ){

        console.log( `Se ha llamado la función ${target.name} con los parámetros ${args}` );

        return target(...args);

    }

}

// Creamos el proxy
var p = new Proxy( target, handler );

// Ejecutamos
p( "Juan", "Hernández" );