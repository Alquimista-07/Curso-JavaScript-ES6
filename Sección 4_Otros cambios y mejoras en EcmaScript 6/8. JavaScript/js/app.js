// 25. Interceptar las propiedades de un objeto con un objeto Proxy

// Proxying
//
// * Por medio del método construct podemos interceptar o atrapar el
//   constructor de cualquier objeto.
//
// * Necesitamos el parámetro get que recibe tres parámetros: el target, la
//   propiedad y el proxy definido.

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

    }

}

var miAuto = new Proxy( auto, handler );
console.log( miAuto.marca );
console.log( miAuto.modelo );
console.log( miAuto.todo );
console.log( miAuto.placas );
console.log( miAuto.anio );