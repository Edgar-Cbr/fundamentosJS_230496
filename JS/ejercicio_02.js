
console.warn("--- Tipo de dato UNDEFINED")
let cliente;
console.log(`El cliente es : ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);


cliente= "Alma Marcelo SIlva de Alegria"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);


cliente = 3564
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variablwe cliente es: ${typeof(cliente)}`);

//boolean solo tiene dos valores
console.warn("--- Dato BOOLEAN ")
let esPremium = "No lo se";
console.log(`¿Es el cliente premium?: ${esPremium}`);

console.log("Asignando el valor \"true\" a la variable");
esPremium= "true";
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable.")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log(`¿Es el cliente Premium?: ${esPremium}`);
console.log("Cambiando el valor de esPremium a false.")
esPremium= 0;

if(esPremium)
    console.log("El cliente pago por usar el servicio.")
else{
    console.log("El cliente recibe los servicios gratuitos");
}

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion ;

console.warn("--- Tipo de Datos NUMBER");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, Tipo de Dato: ${typeof(saldo_cuenta)}`)
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8
console.log(`Has elegido comprar: ${cantidad}, de productos`)
console.log(`El importe total de su compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es de ${saldo_cuenta}`);

monto_transaccion=1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);

//4 STRING
const alumno = "Edgar Cabrera Velazquez"
let producto;

console.warn("--- Tipo de datos STRING (Cadena de caracteres)")
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

producto = "MONITOR 20\" FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

console.log(`Mas adelante podremos transformar el contenido de los STRING usando los metodos y funciones especificas, como convertir su valor a mayusculas: ${alumno} -> ${alumno.toUpperCase()}`);
console.log(`o en su defecto a minusculas: ${producto}-> ${producto.toLowerCase()}`);


//5. BIGINT 

console.warn("--- Tipo de dato BIGINT ")
const numeroGrande = 132136468444
const numeroGrande2 = 132136468444416513
let numeroGrande3 = 132136468444351312200
let numeroGrande4 = 1321364684444465465413213514684131

console.log(`El primer experimento de un número grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El segundo experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El tercer experimento de un número grande es: ${numeroGrande3}, que no es soportado por NUMBER, perdiendo precisión y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El cuarto experimento de un número grande es: ${numeroGrande4}, que si es soportado por NUMBER, perdiendo precisión y su tipo de dato es: ${typeof(numeroGrande4)}`);


numeroGrande3=BigInt("123456789012345678901234567890")
console.log(`El quinto experimento de un número grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`);

numeroGrande4=BigInt("1234567890123456789012345678901234567890")
console.log(`El sexto experimento de un número grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`);


const numero = 129;
console.log(`Intentando realizar la suma de : numero + numeroGrande3, el resultado es: ${BigInt(numero) + numeroGrande3}`)

//8.Symbol
console.warn("Symbol")

const num1 = 5;
const num2 = 5.0;
const num3 = "5";
const num4 = "5.0";
const num5 = Symbol(5);
const num6 = Symbol(5);
const num7 = Symbol(5.0);
const num8 = Symbol("5");
const num9 = Symbol("5.0");

if(num1 == num2)
    console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor.")
else
    console.log("Se comparo numero1 con numero2, determinando que no tienen el mismo valor.")


console.log("¿Es 5 = \"5\"?")
    if(num1 == num3) //Estrictamente igual (equidad)= Mismpo valor, mismo tipo de datos
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que no tienen el mismo valor.")


console.log("¿Es 5 === \"5\"?")
    if(num1 === num3)
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

console.log("¿Es 5 = \"5.0\"?")
    if(num1 == num4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que no tienen el mismo valor.")

console.log("¿Es 5 === \"5.0\"?")
    if(num1 === num4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

        console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero5)}`)
        if(numero1 == numero5)
            console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor.")
        else
            console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")
        