
// PRIMERA ENTREGA PROYECTO FINAL

// let totalCompra = 0;
// let continuarComprando = true;

// // Le pido los productos al usuario, 
// // luego el precio, 
// // verifico q los precios sean mayor a cero
// // sumo los precios en totalCompra
// // y por ultimo preguntamos si desea seguir comprando

// while (continuarComprando) {
//     let producto = prompt("Ingrese el nombre del producto:");
//     let precio = parseFloat(prompt("Ingrese el precio del producto:"));

//     if (precio > 0) {
//         totalCompra += precio;
//     } else {
//         alert("El precio ingresado no es válido. Por favor, ingrese un precio mayor a cero");
//     }

//     let respuesta = prompt("¿Desea ingresar otro producto? (Sí/No)").toLowerCase();
//     if (respuesta === "sí" || respuesta === "si") {
//         continuarComprando = true;
//     } else {
//         continuarComprando = false;
//     }

// }

// // Por último mostramos el total
// alert("El total de su compra es: " + totalCompra);

// ---------------------------------------------------------------------   


// Variables y objetos necesarios
let carrito = [];
let total = 0;

// Funciones
function agregarProducto(nombre, precio) {
    carrito.push({nombre, precio});
    total += precio;
}

function mostrarCarrito() {
    let listado = "Tus productos en el carrito son:\n";
    carrito.forEach((producto, i) => {
        listado += `${i + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
    });
    listado += `Total: $${total.toFixed(2)}`;
    alert(listado);
}

function aplicarDescuento(porcentaje) {
    totalcondescuento = total - total * (porcentaje / 100);
    alert(`¡Descuento aplicado del ${porcentaje}%!.\nTotal antes: $${total.toFixed(2)} \nNuevo total: $${totalcondescuento.toFixed(2)}`);
}

// Bucle while que inicia la funcionalidad
while (true) {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt(`Ingrese el precio de ${nombre}:`));
    alert(`El precio de ${nombre} es $${precio.toFixed(2)}`);
    
    if (confirm("¿Desea agregar este producto al carrito?")) {
        agregarProducto(nombre, precio);
    }
    
    if (!confirm("¿Desea agregar más productos?")) {
        mostrarCarrito();
        if (confirm("¿Desea aplicar un porcentaje de descuento?")) {
            let porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
            aplicarDescuento(porcentaje); 
        }
        break;
    }
}

alert("¡Gracias por tu compra!")