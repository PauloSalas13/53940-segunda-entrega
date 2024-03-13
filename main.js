const menu = {
    "1": { nombre: "PERLAS DE MAR", precio: 25000 },
    "2": { nombre: "CROSTINIS DE JAMÓN IBÉRICO", precio: 26000 },
    "3": { nombre: "BRAVAS DE LUJO", precio: 30000 },
    "4": { nombre: "ENSALADA DE PULPO A LA GALLEGA", precio: 40000 },
    "5": { nombre: "CARPACCIO DE ATÚN ROJO", precio: 20000 }
};

let pedido = [];

const obtenerProducto = (opcion) => menu[opcion.toString()];

const obtenerTotalPedido = () => pedido.reduce((total, item) => total + item.precio * item.cantidad, 0);

function procesoDePedido() {
    alert("¡Bienvenido a nuestro RestoBar Paulo's!\nA continuación, te guiaremos a través del proceso de pedido.");

    while (true) {
        let opcion = prompt("Menú:\n 1. " + menu["1"].nombre + " ($" + menu["1"].precio + ")\n 2. " + menu["2"].nombre + " ($" + menu["2"].precio + ")\n 3. " + menu["3"].nombre + " ($" + menu["3"].precio + ")\n 4. " + menu["4"].nombre + " ($" + menu["4"].precio + ")\n 5. " + menu["5"].nombre + " ($" + menu["5"].precio + ")\n 6. Finalizar pedido\n\nIngresa el número del plato:");

        if (opcion === "6") {
            break;
        }

        if (opcion >= 1 && opcion <= 5) {
            let producto = obtenerProducto(opcion);
            let cantidad = parseInt(prompt("Ingresa la cantidad deseada para " + producto.nombre + ":"));

            if (!isNaN(cantidad) && cantidad > 0) {
                let pedidoExistente = pedido.find(item => item.producto === producto.nombre);

                if (pedidoExistente) {
                    pedidoExistente.cantidad += cantidad;
                } else {
                    pedido.push({ producto: producto.nombre, cantidad: cantidad, precio: producto.precio });
                }
                alert("Añadido al pedido: " + cantidad + " " + producto.nombre);
            } else {
                alert("Cantidad no válida. Por favor, ingresa un número entero mayor que 0.");
            }
        } else {
            alert("Opción no válida. Por favor, selecciona un plato válido.");
        }
    }

    if (pedido.length > 0) {
        let resumen = "Resumen del pedido:\n";

        pedido.forEach(item => {
            resumen += item.cantidad + " " + item.producto + " - $" + item.precio * item.cantidad + "\n";
        });

        resumen += "\nTotal: $" + obtenerTotalPedido();

        confirm(resumen + "\n\n¿Deseas finalizar el pedido?") ? alert("¡Gracias por tu pedido! Te esperamos pronto.") : alert("Tu pedido ha sido cancelado. ¡Esperamos verte pronto!");
    } else {
        alert("No has seleccionado ningún plato. El pedido ha sido cancelado.");
    }
}

procesoDePedido();
