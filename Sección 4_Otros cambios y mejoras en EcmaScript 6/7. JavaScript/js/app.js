// 24. Interceptar el constructor desde un Proxy

// Proxying
//
// Por medio del método construct podemos interceptar o atrapar el
// constructor desde cualquier objeto.

const DateProxy = new Proxy( Date, {

    construct( target, args ){

        console.log( "Creamos una fecha" );
        
        return new Date( ...args ); // Acá también podemos escribir target

    }

});

//let fecha = new DateProxy();
let fecha = new DateProxy( 2022, 3, 14 );
console.log( fecha ); // Mostramos la fecha del día que la podemos pasar por parámetro o dejarla vacía y muestra la del día que se esta ejecutando