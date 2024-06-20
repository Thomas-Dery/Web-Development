// Objetos

"use strict"; //modo estricto de javascript

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); //congelar un objeto para que no se pueda modificar
Object.seal(producto); //sellar un objeto para que no se puedan agregar ni eliminar propiedades

// .seal incluye las caracteristicas de .freeze y permite modificar las propiedades existentes

productoImagen = "NUEVO PRECIO"; //agregar nuevas propiedades a un objeto

delete producto.precio; //eliminar propiedades de un objeto

console.log(Object.isFrozen(producto));