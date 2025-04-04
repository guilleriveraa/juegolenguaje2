class Personaje {
    constructor(nombre, salud, fuerza, agilidad) {
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = fuerza;
        this.agilidad = agilidad;
    }

    atacar(enemigo) {
        const daño = this.fuerza - enemigo.defensa;
        enemigo.salud -= Math.max(daño, 0);
        console.log(`${this.nombre} ataca a ${enemigo.nombre}, causando ${Math.max(daño, 0)} de daño.`);
    }
}