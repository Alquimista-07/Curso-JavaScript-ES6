// 26. Proxy: Modificar y eliminar una propiedad

// Proxying
//
// * Necesitamos el parámetro set que recibe tres parámetros: el target, la propiedad
//   y el valor.
//
// * Por medio de deleteProperty podemos interceptar si se solicita borrar una propiedad.
//   Recibe dos parámetros: target y propiedad.

const auto = {

    placas : "123abc",
    marca  : "Ford",
    anio   : 2022,
    modelo : "T",
    color  : "Blanco"

}

const handler = {

    get : function( target, prop, proxy ){

        if( prop === "marca" ){

            return `Auto marca: ${target[prop]}`;

        }
        else if( prop === "modelo" ){

            return `Auto modelo: ${target[prop]}`;

        }
        else if( prop === "todo" ){

            return `Auto: ${target["marca"]}  ${target["modelo"]}  ${target["color"]}`;

        }
        else{
            return target[prop];
        }

    },

    set : function( target, prop, valor ){

        if( prop === "marca" || prop === "modelo" ){

            console.log( `No se puede modificar la propiedad ${prop}` );

        }
        else{

            target[prop] = valor;

        }

    },

    deleteProperty : function( target, prop ){

        console.log( "No puedes eliminar ninguna propiedad" );

    }

}

var miAuto = new Proxy( auto, handler );
console.log( miAuto.todo );
miAuto.marca = "Nissan";
miAuto.placas = "abc123";
console.log( miAuto.placas );

delete miAuto.placas;