// 3. Las funciones generadoras en JavaScript ES6

// Son un tipo de función especial que nos van a guardar el último estado,
// es decir, podemos hacer series, si por ejemplo queremos hacer una función
// que nos genere la secuencia de fibonacci

// Una función se convierte en generador si contiene una o más expresiones yield
// y se declara con function*. 
// NOTA: Para crear un generador es importante colocar la function con el * y en vez
//       del return va la palabra yield y nos va a devolver el valor pero nos va a 
//       también a guardar el estado
//
// Ahora para invocar un generador lo hacemos a través del método next() que devuelve un
// objeto con propiedad value

//---------------------------------------
// Ejemplo de un generador
//---------------------------------------
console.log( "Ejemplo de un generador" );
function* fnGeneradorRango( inicio, fin, incremento ){
    
    while( inicio < fin ){
        yield inicio;
        inicio += incremento; // Esto es lo mismo que tener inicio = inicio + incremento
    }
    
}

for( let i of fnGeneradorRango(0, 10, 2) ){
    console.log( i ); //0, 2, 4, 6, 8
}

//----------------------------------------------
// Ejemplo de generador para generar cuadrados
//----------------------------------------------
console.log( "Ejemplo de generador para generar cuadrados" );
function* fnGeneradorCuadrados(){

    var n = 1;               // Comienza en 1

    while( true ){

        var c = n * n;       // Obtiene el cuadrado
        n++;                 // Aumenta para la próxima iteración
        yield c;             // Devuelve el valor actual

    }

}

// Lo definimos primero no llamaos ningún valor
var gen = fnGeneradorCuadrados(); 

// Acá ya se que gen va a generar un número al cuadrado
console.log( gen );              // "suspended"

// Pero para recuperarlo estoy llamando el next y despúes el valor (value)
// Y pues cada vez que lo llamemos nos va a guardar el estado de las variables
// y no se pierden para que cuando la próxima vez que lo llamemos se vuelve a 
// generar a partir del valor almacenado
console.log( gen.next().value ); // 1
console.log( gen.next().value ); // 4
console.log( gen.next().value ); // 9
console.log( gen.next().value ); // 16
console.log( gen.next().value ); // 25
console.log( gen.next().value ); // 36

//-------------------------------------------------
// Ejemplo de generador para la serie de fibonacci
//-------------------------------------------------
// NOTA: Acá en este ejmplo se usanco cosas como el symbole, el destructuring 
//       que sirven para ejemplificar pero lo veremos más adelante
console.log( "Ejemplo de generador para la serie de fibonacci" );
let fibonacci = {

    *[Symbol.iterator]() {
        let prev = 0, actu = 1;
        for( ;; ) {
            [ prev, actu ] = [ actu, prev + actu ];
            yield actu;
        } 
    }

    }

    for( let n of fibonacci ){
        if( n > 1000 ) break;
        console.log( n );

}
