// 22. Manejo de un proceso asíncrono con una promesa

// Crear una promesa con AJAX
//
// * En esta clase realizaremos un proceso asíncrono con AJAX controlado
//   con una promesa.
//
// * Es necesario ejecutarlo en un servidor de internet, como Apache o ISS.

function leeArchivo( archivo ){

    return new Promise( (resolve, reject) => {

        // Acá hacemos lo que es con AJAX
        var req = new XMLHttpRequest();
        req.open( "GET", archivo );
        req.send();

        req.onload = function(){

            // Verificamos lectura
            if(req.status == 200){
                
                resolve( req.response );

            }
            else{
                
                reject( req.statusText );

            }

        }

        req.onerror = function(){

            reject( "Error en la conexión!!!..." );

        }

    });

}

leeArchivo( "js/alumnos.json" ).then( respuesta => {

    console.log( "Respuesta: ", respuesta );

}).catch( err => {

    console.log( "Error: ", err );

});