// 2. Las flechas gordas para las funciones anónimas en ES6

// Función anónima normal

var fnTradicional = function(parm){
    return parm;
}

console.log( fnTradicional( "Hola!!!..." ) );

// Convertimos la anterior función en una función de flecha
// NOTA: Si nada más es un parámentro que va a recibir la función
//       podemos omitir los () pero no sucede nada si los dejamos
var fnArrow = a => a; // Omitimos el return y las {}
console.log( fnArrow( "Hola 2" ) );

var fnArrow2 = (b) => b; // Omitimos el return y las {}
console.log( fnArrow2( "Hola 3" ) ); 

// Ahora supongamos que necesitamos una función con más de un parámetro
// Entonces para este caso si es necesario colocar los ()
var fnArrowVariosParms = ( c, d ) => c + d;
console.log("La suma es: " + fnArrowVariosParms(4, 36) );

// Ahora si suponemos que necesitamos una función sin parámetros
var fnArrowSinParms = () => "Hola Mundo!!!...";
console.log( fnArrowSinParms() );

// Llamar a la función desde otra función
setTimeout( () => alert( "Hola desde ES6" ),1000 );

// Función con más de una instrucción
var x = () => {a = "Hola"; b = "Cara de bola"; alert( a + " " + b );}
x(); // Invocamos la función