class Combate {
    constructor(personaje, enemigo) {
        this.personaje = personaje;
        this.enemigo = enemigo;
        this.turno = "personaje"; 
    }

    iniciar() {
        console.log("¡El combate comienza!");
        console.log(`${this.personaje.nombre} vs ${this.enemigo.nombre}`);

        while (this.personaje.salud > 0 && this.enemigo.salud > 0) {
            if (this.turno === "personaje") {
                this.personaje.atacar(this.enemigo);
                if (this.enemigo.salud <= 0) {
                    console.log(`${this.enemigo.nombre} ha sido derrotado. ¡${this.personaje.nombre} gana!`);
                    break;
                }
                this.turno = "enemigo"; 
            } else {
                this.atacaEnemigo();
                if (this.personaje.salud <= 0) {
                    console.log(`${this.personaje.nombre} ha sido derrotado. ¡${this.enemigo.nombre} gana!`);
                    break;
                }
                this.turno = "personaje"; 
            }
        }
    }

    atacaEnemigo() {
        const daño = this.enemigo.defensa - this.personaje.agilidad;
        this.personaje.salud -= dañoReal;
        console.log(`${this.enemigo.nombre} ataca a ${this.personaje.nombre}, causando ${dañoReal} de daño.`);
    }
}
