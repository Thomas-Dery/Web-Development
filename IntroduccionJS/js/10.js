// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


//agregar nuevas propiedades a un objeto
producto.imagen = "imagen.jpg"; //agregar nuevas propiedades a un objeto

//eliminar propiedades de un objeto
delete producto.disponible; //eliminar propiedades de un objeto

console.log(producto);
// console.log(producto.nombreProducto); //acceder a un valor de un objeto
// console.log(producto["precio"]); //acceder a un valor de un objeto
