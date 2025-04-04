class Inventario {
    constructor(capacidadMaxima = 10) {
        this.objetos = []; 
        this.capacidadMaxima = capacidadMaxima; 
    }

    agregarObjeto(objeto) {
        if (this.objetos.length >= this.capacidadMaxima) {
            console.log("El inventario está lleno. No puedes agregar más objetos.");
            return false;
        }
        if (this.objetos.includes(objeto)) {
            console.log(`${objeto} ya está en el inventario.`);
            return false;
        }
        this.objetos.push(objeto);
        console.log(`${objeto} ha sido añadido al inventario.`);
        return true;
    }

    eliminarObjeto(objeto) {
        const indice = this.objetos.indexOf(objeto);
        if (indice !== -1) {
            this.objetos.splice(indice, 1);
            console.log(`${objeto} ha sido eliminado del inventario.`);
            return true;
        } else {
            console.log(`${objeto} no se encuentra en el inventario.`);
            return false;
        }
    }

    listarObjetos() {
        if (this.objetos.length === 0) {
            console.log("El inventario está vacío.");
        } else {
            console.log("Objetos en el inventario:");
            this.objetos.forEach((objeto, index) => {
                console.log(`${index + 1}. ${objeto}`);
            });
        }
    }

    estaLleno() {
        return this.objetos.length >= this.capacidadMaxima;
    }

    buscarObjeto(objeto) {
        return this.objetos.includes(objeto);
    }
}

const inventario = new Inventario(10); 

inventario.agregarObjeto("Espada");
inventario.agregarObjeto("Escudo");
inventario.agregarObjeto("Mariachi");

inventario.listarObjetos();

console.log("¿El inventario contiene una Espada?", inventario.buscarObjeto("Espada"));

inventario.eliminarObjeto("Escudo");

inventario.agregarObjeto("Espada");

inventario.agregarObjeto("Armadura");
inventario.agregarObjeto("Botas");
inventario.agregarObjeto("Anillo");

inventario.agregarObjeto("Amuleto");

inventario.listarObjetos();
