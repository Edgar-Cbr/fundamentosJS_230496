
var miNombre = "Edgar";
var misApellidos;
var miEdad = 32;


console.warn("--- Declaración de variables usando: VAR");
console.log("Intentando leer las variables: ", miNombre, misApellidos);

misApellidos = "Cabrera Velázquez";
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas: ", miNombre, misApellidos);


console.warn("--- Declaracion de variables del tipo constante usando: CONST");
const miUniversidad = "UT Xicotepec";
const miMatricula = 230496;

console.log("Hola",miNombre,misApellidos,"se que estudias actualmente en: ", miUniversidad, " te asignaron la matricula: ",miMatricula, " y tienes una edad de:", miEdad, "años.");

console.log("Analizando los datos puedo deducir que: ");
console.log("miNombre es del tipo:", typeof(miNombre));
console.log("misApellidos es del tipo:", typeof(misApellidos));
console.log("miUniversidad es del tipo:", typeof(miUniversidad));
console.log("miMatricula es del tipo:", typeof(miMatricula));
console.log("miEdad es del tipo:", typeof(miEdad));

let miFechaNacimiento= "2005-10-05";
let miColorFavorito;

console.warn("--- Declariacion de variables locales usando: LET");
console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el: ", miFechaNacimiento," y tu color favorito es: mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm dejame pensar ...........................");
miColorFavorito= "Negro";
console.log(`Creo que es ${miColorFavorito}, le atine?`);


