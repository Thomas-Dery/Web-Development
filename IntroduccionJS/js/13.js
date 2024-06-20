// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

const medidas = {
    peso: "1kg",
    medida: "1m"
};

const nuevoProducto = {...producto, ...medidas}; // unir dos objetos

console.log(nuevoProducto); // { nombreProducto: 'Monitor 20 Pulgadas', precio: 300, disponible: true, peso: '1kg', medida: '1m' }


