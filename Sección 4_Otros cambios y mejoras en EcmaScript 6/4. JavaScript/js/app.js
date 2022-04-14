// 21. Manejo de promesas con race()

// Más de una promesa.
//
// * Encadenar varias promesas.
//
// * all[] indican si se cumplen todas las promesas: El método Promise.all(iterable) devuelve
//   una promesa que termina correctamente cuando todas las promesas en el argumento iterable
//   han sido concluidas con éxito, o bien rechazada la petición por la primera promesa que
//   es rechazada.
//
// * race[] indican si se cumple "alguna" de las promesas, la más rápida. El método Promise.race(iterable)
//   retorna una promesa que se cumplirá o no tan pronto como una de las promesas del argunmento iterable
//   se cumpla o se rechace, con el valor o razón de rechazo de ésta.

//-----------------------------
// Ejemplo 1
//-----------------------------
console.log( "==============================" );
console.log( "Ejemplo 1" );
console.log( "==============================" );
let p1 = new Promise( (resolve, reject) => {

    setTimeout(() => {
        //console.log( "Promesa 1" );
       resolve( "Uno" ); 
    }, 500);

});

let p2 = new Promise( (resolve, reject) => {

    setTimeout(() => {
        //console.log( "Promesa 2" );
       resolve( "Dos" ); 
    }, 1500);

});

Promise.race( [ p1, p2 ] )
    .then( (valor) => {

        console.log( valor ); // Muestra uno ya que se ejecuta primero y race se basa algo así como si fuera una carrera, es decir, la primera en llegar

    });