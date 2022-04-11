// 6. Manejo de variables de bloque y constantes

//====================================================================================================================
// Let: Indica que una variable sólo va a estar definida en un bloque (entre llaves) en particular,
//      al terminar el bloque la variable deja de existir, esto es muy útil para evitar errores
//      lógicos cuando alteramos una variable que no deberíamos. Y ayuda a administrar por ejemplo 
//      la memoria.
//====================================================================================================================

//* ******************* */
// Ejemplo
//* ******************* */

function letTest(){
    
    if( true){
        let x = 23;
        console.log( x ); // 71
    }
    
    console.log( x ); // no existe x
    
}

function varTest(){
    
    if( true){
        // Si cambiamos a ver no da error
        var x = 23;
        console.log( x ); // 71
    }
    
    console.log( x ); // no existe x
    
}

// Invocamos la función para probar lo que se dijo .
// Descomentar la siguiente linea.
//letTest();

// Prueba con var. Descomentar lo siguiente
//varTest();

// NOTA: Esto es algo parecido a lo que se tiene con las funciones y las variable que se definian con var 
//       que nada más existen mientras tenemos la llaves y fuera de las llaves ya no. Y pues con let es
//       fuera de los bloques

//====================================================================================================================
// Const: Por su parte previene que una variable declarada cambie de valor, convirtiéndose efectivamente en una
//        constante.
//        Siempre es recomendable usar constantes para valores que sabemos que no van a cambiar, así se evitan 
//        modificaciones inesperadas. 
//====================================================================================================================

//* ******************* */
// Ejemplo
//* ******************* */

//NOTA: Generalmente las constantes por estándar se manejan con mayúsculas pero no existe ningún problema si se manejan como
//      mayúsculas o minúsculas
const A = 7;

A = 5; // Error ya que no se puede modificar la constante

console.log( a );

// Pero si lo manejara como var o let no marca error ya que son variables