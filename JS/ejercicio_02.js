
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