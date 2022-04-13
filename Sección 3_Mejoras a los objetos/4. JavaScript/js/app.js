// 16. La programación orientada a objetos con JavaScript ES6

//************************ */
// Class (Clases).
//************************ */
// * Ahora podemos hacer clases por medio de la sentencia "class".
//
// * Podemos utilizar el método "constructor()" para crear la función
//   constructora.
//
// * Los lenguajes tradicionales basados en clases ofrecen la palabra reservada
//   this para referencia la instacia actual de la clase.
//
// * En JavaScript this se refiere al contexto de la llamada y como tal puede ser
//   cambiado a algo más que un objeto.


//************************ */
// Objeto.
//************************ */
// * Un objeto es una instacia de la clase, la cual es creada usando el operador
//   new.
//
// * Cuando se usa un punto para acceder al método del objeto, this se va a
//   referir al objeto a la izquierda al punto.


//************************ */
// Herencia.
//************************ */
// * Al igual que en otros lenguajes de programación, una clase peude extender
//   otra clase heredando métodos o propiedades de la clase padre.
//
// * La función super() ejecuta el método con el mismo nombre desde el que se
//   está llamando a super(), de esta forma al definir el nuevo constructor
//   llamamos a super() y le pasamos los mismos parámetros que recibe el
//   constructor, entonces se ejecuta ese constructor y luego el código del nuevo.


//************************ */
// Getters y Setters.
//************************ */
// * En algunos lenguajes de programación (como Java) existen los gettes y
//   setters.
//
// * Estos métodos que se usan para controlar variables internas de un objeto
//   (propiedades).
//
// * Para usarlos simplemente se agrega get o set adelante del nombre del
//   método de la siguiente forma:
//
// * Definir un método get con el nombre que quieras (no puede ser el nombre de la propiedad)
//   y este debería devolver el valor deseado (técnicamente puede hacer cualquier cosa el método),
//   o defines un método set con otro nombre (tampoco el mismo de la propiedad) y que recibe el 
//   nuevo valor y lo asigna a this.
//
// * Aunque esteo hace bastante más legible y limpio el código, al tener métodos específicos que obtener
//   o modificar propiedades del objeto, la verdad es que no son necesarios ya que simplemente usando la 
//   sintaxis de objetos de toda la vida puedes obtener el valor de una propiedad y modificarlo.


//************************ */
// Métodos estáticos.
//************************ */
// * Al isugal que en otros lenguajes también va a ser posible crear métodos
//   estáticos usando la palabra clave static antes del nombre del método.

class miClase{

    static miMetodo(){

        return 'Hola Mundo!!!..';

    }

}

// * Luego para poder usarlo simplemente llamas al método desde la clase sin
//   instanciar

let mensaje = miClase.miMetodo(); // 'Hola Mundo!!!...'
console.log( mensaje );

//-------------------------
// Caracteristicas
//-------------------------
// * Los nombres de las clases no pueden ser eval o arguments
//
// * No están permitidos nombres de clases repetidos.
//
// * El nombre constructor solo puede ser usado para métodos, no para getters,
//   setters o un generador de métodos
//
// * Las clases no se pueden llamar antes de definirse
//
// * Todavía se puede instanciar la clase desde cualquier parte, solo es
//   necesario esperar a que esté definida.

class Rectangulo {

    constructor( base, altura ){
        this.base = base;
        this.altura = altura;
    }

    calcArea() {
        
        return this.base * this.altura;

    }

}

var r = new Rectangulo( 5, 10 );
console.log( r.calcArea() ); // 50