class Tienda {
    constructor() {
        this.articulos = [
            { nombre: "Espada de Acero", tipo: "Arma", daño: 20, precio: 100 },
            { nombre: "Arco Largo", tipo: "Arma", daño: 15, precio: 80 },
            { nombre: "Hacha de Guerra", tipo: "Arma", daño: 25, precio: 120 },
            { nombre: "Mariachi", tipo: "Objeto Curativo", curacion: 50, precio: 50 }
        ];
    }

    mostrarArticulos() {
        console.log("Artículos disponibles en la tienda:");
        this.articulos.forEach((articulo, index) => {
            if (articulo.tipo === "Arma") {
                console.log(`${index + 1}. ${articulo.nombre} (Tipo: ${articulo.tipo}, Daño: ${articulo.daño}, Precio: ${articulo.precio})`);
            } else if (articulo.tipo === "Objeto Curativo") {
                console.log(`${index + 1}. ${articulo.nombre} (Tipo: ${articulo.tipo}, Curación: ${articulo.curacion}, Precio: ${articulo.precio})`);
            }
        });
    }

    comprarArticulo(indice, oroDisponible) {
        if (indice < 1 || indice > this.articulos.length) {
            console.log("El índice proporcionado no es válido.");
            return;
        }

        const articulo = this.articulos[indice - 1];

        if (oroDisponible >= articulo.precio) {
            console.log(`Has comprado ${articulo.nombre} por ${articulo.precio} de oro.`);
            return articulo; 
        } else {
            console.log("No tienes suficiente oro para comprar este artículo.");
            return null;
        }
    }
}

