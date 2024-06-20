// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [ 
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800}
];

// forEach
meses.forEach(function(mes) {
    if(mes == "Marzo") {
        console.log("Marzo si existe");
    }
});

//includes
let resultado = meses.includes("Marzo");
console.log(resultado);

//some ideal para arreglos de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre == "Celular";

}); //revisa si un valor existe en un arreglo de objetos

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
});

// tambien puede ser asi
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400;
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== "Celular";
});

console.log(resultado);