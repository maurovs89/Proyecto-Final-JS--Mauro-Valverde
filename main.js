
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

// SEGUNDA ENTREGA PROYECTO FINAL

// Variables y objetos necesarios
// let carrito = [];
// let total = 0;

// // Funciones
// function agregarProducto(nombre, precio) {
//     carrito.push({nombre, precio});
//     total += precio;
// }

// function mostrarCarrito() {
//     let listado = "Tus productos en el carrito son:\n";
//     carrito.forEach((producto, i) => {
//         listado += `${i + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
//     });
//     listado += `Total: $${total.toFixed(2)}`;
//     alert(listado);
// }

// function aplicarDescuento(porcentaje) {
//     totalcondescuento = total - total * (porcentaje / 100);
//     alert(`¡Descuento aplicado del ${porcentaje}%!.\nTotal antes: $${total.toFixed(2)} \nNuevo total: $${totalcondescuento.toFixed(2)}`);
// }

// // Bucle while que inicia la funcionalidad
// while (true) {
//     let nombre = prompt("Ingrese el nombre del producto:");
//     let precio = parseFloat(prompt(`Ingrese el precio de ${nombre}:`));
//     alert(`El precio de ${nombre} es $${precio.toFixed(2)}`);
    
//     if (confirm("¿Desea agregar este producto al carrito?")) {
//         agregarProducto(nombre, precio);
//     }
    
//     if (!confirm("¿Desea agregar más productos?")) {
//         mostrarCarrito();
//         if (confirm("¿Desea aplicar un porcentaje de descuento?")) {
//             let porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
//             aplicarDescuento(porcentaje); 
//         }
//         break;
//     }
// }

// alert("¡Gracias por tu compra!")


// TERCER ENTREGA DEL PROYECTO FINAL

document.addEventListener("DOMContentLoaded", function () {
    let cart = [];

    // Función para agregar un producto al carrito
    function addToCart(product) {
        let existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        updateCartCount();
        saveCart();
        showModalConfirmation(product);
    }

    // Función para actualizar la cantidad de productos en el carrito
    function updateCartCount() {
        let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-count').textContent = totalCount;
    }

    // Función para cargar el carrito desde el almacenamiento local
    function loadCart() {
        let savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartCount();
        }
    }

    // Función para guardar el carrito en el almacenamiento local
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Función para renderizar los productos en el modal del carrito
    function renderCartItems() {
        let cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Eliminar</button></td>
            `;
            cartItemsContainer.appendChild(row);
        });
        document.getElementById('cart-total').textContent = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    }

    // Función para eliminar un producto del carrito
    window.removeFromCart = function(productId) { // Hacer que la función sea accesible globalmente
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        saveCart();
        renderCartItems();
    }

    // Mostrar modal de confirmación de adición al carrito
    function showModalConfirmation(product) {
        let modalBody = document.querySelector('#confirmationModal .modal-body');
        modalBody.textContent = `El producto ${product.name} ha sido agregado al carrito.`;
        let confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();
    }

    // Cargar el carrito al iniciar la página
    loadCart();

    // Evento para abrir el modal del carrito cuando se hace clic en el número o el ícono del carrito
    document.getElementById('view-cart').addEventListener('click', function (event) {
        event.preventDefault();
        let cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
        cartModal.show();
        renderCartItems();
    });

    // Evento para abrir el modal del carrito cuando se hace clic en el botón "Ver carrito" del modal de confirmación
    document.getElementById('view-cart-btn').addEventListener('click', function () {
        let cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
        cartModal.show();
        renderCartItems();
    });

    // Agregar evento para botones de "Comprar ya"
    document.querySelectorAll('.btn-primary').forEach((button, index) => {
        button.addEventListener('click', function () {
            let productCard = button.closest('.card');
            let productName = productCard.querySelector('.card-title').textContent;
            let productPrice = parseFloat(productCard.querySelector('.card-text').textContent.replace('$', '').replace('.', '').replace(',', '.'));
            let product = {
                id: index,
                name: productName,
                price: productPrice
            };
            addToCart(product);
        });
    });
});


