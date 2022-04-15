// 27. Remover el proxy

// Proxying
//
// * Podemos hacer un objeto Proxy como revocable o "removible" por medio
//   del método Proxy.revocable().
//
// * La sintaxis es:
//
//   Proxy.revocable( target, handler );

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

// Creamos el proxy y le colocamos la opción de que se pueda quitar
const { proxy : miProxy, revoke } = Proxy.revocable( auto, handler );

console.log( miProxy.todo ); // Acá muestra información

revoke();

console.log( miProxy.todo ); // Manda error ya que usamos el revoke() ya que no se puede usar get sobre un proxy que ha sido revocado