// 7. Los templates strings en javaScript ES6

// Son un tipo especial de cadenas con formato, similares a la interplación en
// otros lenguajes como Ruby, se definen con un par de caracteres back-tick (`)
// o acento agudos del francés, a diferencia de las cadenas normales que usan 
// comillas sencillas o dobles.

// Ejemplo
var s1 = `Esta es una template string`;
console.log( s1 );

// Pueden contener valores
var n = 7;
var s2 = `El valor de n es ${n}`;
console.log( s2 )

// Otro ejemplo
var a = 10;
var nombre = "Pedro Picapiedra";
var s3 = `Mi nombre es ${nombre} y tengo ${a} años en la compañía`
console.log( s3 );

// Pueden abarcar múltiples líneas
var b = 8;
var nombre = "Pablo Marmol";
var s4 = `Mi nombre es ${nombre}
y tengo ${b} años en 
la compañía`
console.log( s4 );

// Otro Ejemplo
var s5 = `Esta es una cadena
escrita en dos líneas`;
console.log( s5 );