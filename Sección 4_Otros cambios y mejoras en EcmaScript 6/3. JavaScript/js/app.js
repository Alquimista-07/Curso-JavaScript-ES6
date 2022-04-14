// 20. El manejo de las llamadas de callback por medio de las promesas

// * El flujo de información de internet tiene características asíncronas, lo que
//   significa que mientras esperamos el resultado de una operación como por ejemplo
//   que carguen los datos de una ágina web, un programa puede realizar otras operaciones
//   y utilizarlo cuando el resultado este listo.
//
// * Las "promesas" (promises) son objetos que representan esta clase de operaciones y los
//   datos que se obtienen.
//
// * Las promesas nos sirven para adminstrar las funciones de callback (función llamada desde
//   otra función), procesos asíncronos.
//
// * Una promesa tiene tres estados: penfing, fulfilled (success) y rejected (error).
//
// * Las promesas se pueden encadenar
//
// * Para enviar información dentro de las promesas, se envían dentro de resolve() y de
//   reject(), de dentro de estos un return.
//
// * Con throw cortamos las promesas.
//
// * Las promesas están basadas en un estándar llamado Promises a+.
//
// * Hay varios paquetes que permiten para las promesas:
//   - Accius
//   - Angular tiene manejador de promesas (toPromise)
//   - JQuery tiene deferred
//   - Polifyll ES6 promise
//   - await
//   - https://polyfill.io/v2/docs/
//
//************************************ */
// Crear una promesa
//************************************ */
// * new Promise (function(resolve, reject){})
//
// * La opción resolve() regresa el valor correcto (success).
//
// * La opción reject() regresa el valor erróneo (error).
//
//************************************ */
// Llamar a las promesas
//************************************ */
// * Tiene un método que es "then", lee el valor correcto (success).
// 
// * Tiene un método que es "catch", lee el valor erróneo (error).
//
//************************************ */
// Más de una promesa
//************************************ */
// * Encadenar varias promesas.
//
// * all[] indica si se cumplen todas las promesas.
//
// * race[] indican si se cumple "alguna" de las promesas.
//
//===============================================================================================
// NOTA: Generalmente los parámetros de la promesa son llamados resolve y reject pero
//       no necesariamente se tienen que llamar así, más adelante esto se vera en un ejemplo.
//===============================================================================================
//
//------------------------
// Ejemplo 1
//------------------------
console.log( "=========================" );
console.log( "Ejemplo 1" );
console.log( "=========================" );
// Creamos la promesa
let miPromesa = new Promise( function( resolve, reject ) {

});

//------------------------
// Ejemplo 2
//------------------------
console.log( "=========================" );
console.log( "Ejemplo 2" );
console.log( "=========================" );
// Creamos la promesa
let miPromesa2 = new Promise( ( resolve, reject ) => {

    // Este se tarda menos en lanzarse por lo tanto la promesa nos manda el mensaje del resolve
    setTimeout(() => {
        resolve( "Todo bien" );
    }, 1000);

    setTimeout(() => {
        reject( "Todo mal" );
    }, 1500);

});

// Disparamos la promesa
miPromesa2.then( (res) => {

    console.log( res );

}, ( err ) => {

    console.log( err );

});

//------------------------
// Ejemplo 3
//------------------------
console.log( "=========================" );
console.log( "Ejemplo 3" );
console.log( "=========================" );
// Creamos la promesa
let miPromesa3 = new Promise( function( todoBien, todoMal ) {

    let resultado = false;

    if( resultado ){

        todoBien( "Listo" );

    }
    else{

        todoMal( "Falló" );

    }

});

// Disparamos la promesa
miPromesa3.then( function( resultado ) {
    
    console.log( "El resultado es: " + resultado );

}).catch( function (resultado) {

    console.log( "El resultado es: " + resultado );

});

//------------------------
// Ejemplo 4
//------------------------
console.log( "=========================" );
console.log( "Ejemplo 4" );
console.log( "=========================" );
// Creamos varias promesas
let promesaPrimera = function() {

    return new Promise( function( resolve, reject) {

        resolve( 'Primer Promesa' );

    });

};

let promesaSegunda = function( msg) {

    return new Promise( function( resolve, reject ) {

        resolve( msg + ' Segunda Promesa' );

    });

};

let promesaTercera = function( msg ) {

    return new Promise( function( resolve, reject ) {

        resolve( msg + ' Tercera Promesa' )

    });
    
};

// Disparamos las promesas encadenandolas
promesaPrimera().then( function( resultado ) {

    return promesaSegunda( resultado );

}).then( function( resultado ) {

    return promesaTercera( resultado );

}).then( function( resultado ) {

    console.log( 'Final ' + resultado );

});

//------------------------
// Ejemplo 5
//------------------------
console.log( "=========================" );
console.log( "Ejemplo 5" );
console.log( "=========================" );
// Creamos varias promesas
let miPrimeraPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
        resolve( "Promesa 1 - Todo Bien" );
    }, 1000);

});

let miSegundaPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
        reject( "Promesa 2 - Todo bien" );
    }, 500);

});

// Disparamos las promesas
Promise.all( [ miPrimeraPromesa, miSegundaPromesa ] )
    .then( (data) => {

        console.log( data );

    }).catch( (err) => {

        console.log( err );

    });

//------------------------
// Ejemplo 6
//------------------------
console.log( "=========================" );
console.log( "Ejemplo 6" );
console.log( "=========================" );
// Creamos funciones las cuales dentro tienen la cración de la promesa
let primerPromesa = function(){

    return new Promise( function( resolve, reject ) {

        resolve( 'Primera promesa lista' );

    });

};

let segundaPromesa = function(){

    return new Promise( function( resolve, reject ) {

        resolve( "Segunda Promesa lista" );

    });

};

let tercaraPromesa = function() {

    return new Promise( function( resolve, reject ) {

        resolve( "Tercera promesa lista" );

    });

};

// Disparamos las promesas
Promise.all( [ primerPromesa(), segundaPromesa(), tercaraPromesa() ] ).then(

    function( respuestas ){

        respuestas.forEach( function( msg ){

            console.log( msg );

        });

    });