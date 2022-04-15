// 28. Funciones asíncronas

// * Una función async devuelve una promesa (Promise).
//
// * Si una función asíncrona devuelve un valor, la promesa se resolverá con ese
//   valor.
//
// * Una función asíncrona puede contener una expresión await, la cual pausa la
//   ejecución de la función asíncrona.
//
// * Con las expresión await (similar a Promise.all ya que espera a que terminen su 
//   ejecución o resolución de la promesa y devuelve el valor resueltao) la función 
//   espera la resolución de la promesa pasada y reanuda la ejecución de la función
//   async y devuelve el valor resuelto.

//----------------------------
// Ejemplo
//----------------------------
function fn1(){

    return new Promise( (resolve, reject ) => {

        setTimeout( resolve, 2000, "Promesa 1" );

    });

}

function fn2(){

    return new Promise( (resolve, reject ) => {

        setTimeout( resolve, 1000, "Promesa 2" );

    });

}

function fn3(){

    return new Promise( (resolve, reject ) => {

        setTimeout( resolve, 1000, "Promesa 3" );

    });

}

async function promesas(){

    let promesa1 = await fn1();
    let promesa2 = await fn2();
    let promesa3 = await fn3();

    console.log( promesa1, promesa2, promesa3 );

}

promesas();