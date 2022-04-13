// 14. El nuevo objeto para internacionalización y localización Intl

//************************************************************************************** */
// Collation: Sirve para modificar el método sort() con los diferentes idiomas:
//************************************************************************************** */
// En alemán "ä" se ordena junto a "a"
// En sueco "ä" se ordena después de la "z"
console.log( "====================================" );
console.log( "Collator" );
console.log( "====================================" );
var lista = [ "ä", "a", "z" ];

var l10nDE = new Intl.Collator( "de" );
var l10nSV = new Intl.Collator( "sv" );

//l10nDE.compare( "ä", "z" ) === -1;
//l10nSV.compare( "ä", "z" ) === +1;

console.log( l10nDE.compare( "ä", "z" ) );
console.log( l10nSV.compare( "ä", "z" ) );

console.log("DE", lista.sort( l10nDE.compare ) ); // [ "a", "ä", "z" ]
console.log("SV", lista.sort( l10nSV.compare ) ); // [ "a", "z", "ä" ]

//************************************************************************************** */
// Otro método es el number format: Formateo de números según su zona:
//************************************************************************************** */
console.log( "====================================" );
console.log( "Number Format" );
console.log( "====================================" );
var l10nEn = new Intl.NumberFormat( "en-US" );
var l10nDE = new Intl.NumberFormat( "de-DE" );

//l10nEn.format( 1234567.89 ) === "1,234,567.89";
//l10nDE.format( 1234567.89 ) === "1.234.567,89";

console.log("EN", l10nEn.format( 1234567.89 ) );
console.log("DE", l10nDE.format( 1234567.89 ) );

// NOTA: Para ver los códigos de paises visiar este enlace; https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx

//************************************************************************************** */
// Formateo de monedas:
//************************************************************************************** */
console.log( "====================================" );
console.log( "Formateo de monedas" );
console.log( "====================================" );
var l10nUSD = new Intl.NumberFormat( "en-US", {style: "currency", currency: "USD" } );
var l10nGBP = new Intl.NumberFormat( "en-GB", {style: "currency", currency: "GBP" } );
var l10nEUR = new Intl.NumberFormat( "en-DE", {style: "currency", currency: "EUR" } );

//l10nUSD.format( 100200300.40 ) === "$100,200,300.40";
//l10nGBP.format( 100200300.40 ) === "£100,200,300.40";
//l10nEUR.format( 100200300.40 ) === "100.200.300,40 €";

console.log("USD", l10nUSD.format( 100200300.40 ) );
console.log("GBP", l10nGBP.format( 100200300.40 ) );
console.log("EUR", l10nEUR.format( 100200300.40 ) );

//************************************************************************************** */
// Formateo de fechas:
//************************************************************************************** */
console.log( "====================================" );
console.log( "Formateo de fechas" );
console.log( "====================================" );
var l10nEN = new Intl.DateTimeFormat( "en-US" );
var l10nMX = new Intl.DateTimeFormat( "es-MX" );
var l10nDE = new Intl.DateTimeFormat( "de-DE" );

//l10nEn.format( new Date( "2015-01-02" ) ) === "12/2/2015";
//l10nDE.format( new Date( "2015-01-02" ) ) === "2/12/2015";
//l10nDE.format( new Date( "2015-01-02" ) ) === "2.12.2015";

console.log("EN", l10nEN.format( new Date( "2015-12-2" ) ) );
console.log("MX", l10nMX.format( new Date( "2015-12-2" ) ) );
console.log("DE", l10nDE.format( new Date( "2015-12-2" ) ) );