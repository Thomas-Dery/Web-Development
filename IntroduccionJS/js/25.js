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

// For each

carrito.forEach(producto => console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`));  //solo para arrays, va uno por uno aplicando la funcion

// Map  

carrito.map(producto => console.log(`Producto: ${producto.nombre}`));


// cuando quiero iterar sobre un listado, uso forEach. Mientras que para iterar y crear un nuevo arreglo, uso map.