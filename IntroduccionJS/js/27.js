// POO

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Prototype nos permite crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.precio = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

const producto2 = new Producto('Monitor', 1000);
const producto3 = new Producto('Laptop', 300);

const cliente = new Cliente('Juan', 'Perez');
const cliente2 = new Cliente('Karen', 'Rodriguez');

console.log(producto2.formatearProducto());
console.log(cliente.formatearCliente());



