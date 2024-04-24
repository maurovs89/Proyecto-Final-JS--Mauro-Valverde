
let totalCompra = 0;
let continuarComprando = true;

// Solicitamos los productos y precios al usuario hasta que decida no comprar más
while (continuarComprando) {
    let producto = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    // Verificamos si se ingresó un precio válido
    if (precio > 0) {
        // Sumamos el precio del producto al total de la compra
        totalCompra += precio;
    } else {
        alert("El precio ingresado no es válido. Por favor, ingrese un precio mayor a cero");
    }

    // Preguntamos al usuario si desea seguir comprando
    const respuesta = prompt("¿Desea ingresar otro producto? (Sí/No)").toLowerCase();
    if (respuesta === "sí" || respuesta === "si") {
        continuarComprando = true;
    } else {
        continuarComprando = false;
    }

}

// Mostramos el total de la compra al usuario
alert("El total de su compra es: " + totalCompra);

    


