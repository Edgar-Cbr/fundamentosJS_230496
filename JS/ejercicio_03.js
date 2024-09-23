const bg="linear-gradient(11deg, rgba(2,0,36,1) 0%,rgba(9,9,121,1) 33%,rgba(0,212,255,1) 86%)";
const stylr_console = `backround ${bg}: color : white; border-radius: 6px; padding: 4px font-size: 1.0rem; front-weight:bold`
 
// personalizacion de las salidas a cosnola 
console.warn("practica 05: repaso de objetos en java Script");

//variables independientes
console.log("%c1.- variables independientes", stylr_console);

// declaramos valores independientes relacionadas a un producto

let producto_nombre="computadora gamer laptop 17\"";
let producto_marca="asus";
let producto_modelo="tuf 17"
let producto_precio=15749.50;
let producto_disponibilidad=true;
let producto_sku=Symbol("TUF707VV-HX221W")
let producto_stock=15
let producto_imagen=null
let producto_barcode;
let producto_categorias=["electronicos", "computacion","gaming","promocion buen fin","mejor valorados"];

// accedemos a los valores de las caracteristicas del producto de manera independiente

console.log(`los datos del producto son: \n
    nombre: ${producto_nombre},
    marca: ${producto_marca},
    modelo: ${producto_modelo},
    precio: ${producto_precio},
    disponibilidad: ${producto_disponibilidad},
    stock: ${producto_stock},
    sku: ${producto_sku},
    barcode: ${producto_barcode},
    imagen: ${producto_imagen},
    categorias:${producto_categorias}`);

// ahora lo delcaramos como un objeto 
let producto={
    nombre : "tenis deportivos",
    marca : "nike",
    modelo : "jordan '24",
    precio : "3360",
    disponibilidad : false,
    stock : 0,
    SKU : "DZ5485-512",
    imagen : "../deportivo.snakrs./jordan.png",
    barcode :null,
    categorias:["deportivas","juvenil"]
}
// ahora leemos el objeto completo

console.table(producto)

