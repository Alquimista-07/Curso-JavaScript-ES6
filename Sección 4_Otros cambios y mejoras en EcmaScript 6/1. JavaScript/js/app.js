// 18. Las nuevas características de las expresiones regulares en ES6

// La bandera "y" mantiene la posición entre coincidencias mediante el parámetro
// lastIndex, por lo que se le llama  "Búsqueda pegajosa" o "Bandera adhesiva".

var sticky;

try{

    RegExp( '', 'y' );
    sticky = true;
    
}
catch( e ){

    sticky = false;
    console.log( e );

}

console.log( sticky );

//********************************** */
// Otro ejemplo
//********************************** */
var str = "Primera línea\nSegunda línea";
var regex = /(\S+) línea\n?/y;

var match = regex.exec( str );
console.log( match );           // Primera
console.log( regex.lastIndex ); // 14

var match2 = regex.exec( str );
console.log( match2 );          // Segunda
console.log( regex.lastIndex ); // 27

var match3 = regex.exec( str );
console.log( match3 );          // null
