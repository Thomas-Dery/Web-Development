// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//fomra anterior de acceder a los valores de un objeto
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto); //acceder a un valor de un objeto
// console.log(nombreProducto); //acceder a un valor de un objeto

//destructuring
const {precio, nombreProducto} = producto;


console.log(precio); //acceder a un valor de un objeto
console.log(nombreProducto); //acceder a un valor de un objeto