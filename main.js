
let totalCompra = 0;
let continuarComprando = true;

// Le pido los productos al usuario, 
// luego el precio, 
// verifico q los precios sean mayor a cero
// sumo los precios en totalCompra
// y por ultimo preguntamos si desea seguir comprando

while (continuarComprando) {
    let producto = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (precio > 0) {
        totalCompra += precio;
    } else {
        alert("El precio ingresado no es válido. Por favor, ingrese un precio mayor a cero");
    }

    let respuesta = prompt("¿Desea ingresar otro producto? (Sí/No)").toLowerCase();
    if (respuesta === "sí" || respuesta === "si") {
        continuarComprando = true;
    } else {
        continuarComprando = false;
    }

}

// Por último mostramos el total
alert("El total de su compra es: " + totalCompra);

    


