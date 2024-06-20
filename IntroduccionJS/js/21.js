// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = () => (tecnologia) => console.log('Aprendiendo ${tecnologia}');
aprendiendo('javascript');

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
meses.forEach( mes => {
    if(mes == "Marzo") {
        console.log("Marzo si existe");
    }
});


//some ideal para arreglos de objetos
resultado = carrito.some(producto => producto.nombre == "Celular"); //revisa si un valor existe en un arreglo de objetos

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio);

// tambien puede ser asi
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto =>producto.nombre !== "Celular");

console.log(resultado);