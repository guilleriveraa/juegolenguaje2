function main() {
    console.log("Bienvenido al juego. Elige tu personaje:");

    const personaje1 = new Personaje("Terry", 100, 20, 5);
    const personaje2 = new Personaje("Andres familia", 80, 25, 3);
    const personaje3 = new Personaje("Cebo", 90, 15, 10);

    const personajes = [personaje1, personaje2, personaje3];

    personajes.forEach((personaje, index) => {
        console.log(`${index + 1}. ${personaje.nombre} (Salud: ${personaje.salud}, Fuerza: ${personaje.fuerza}, Agilidad: ${personaje.agilidad})`);
    });

    const eleccion = 1; 
    const personajeElegido = personajes[eleccion - 1];
    console.log(`Has elegido a ${personajeElegido.nombre}.`);

    const enemigo = new Enemigo("Pardi", 50, 5);
    console.log(`Un enemigo aparece: ${enemigo.nombre} (Salud: ${enemigo.salud}, Defensa: ${enemigo.defensa})`);

    personajeElegido.atacar(enemigo);
    console.log(`${enemigo.nombre} ahora tiene ${enemigo.salud} de salud.`);
    document.getElementById('guardarPartida').addEventListener('click', () => {
        juego.guardarPartida();
    });
    document.getElementById('cargarPartidaGuardada').addEventListener('click', () => {
        juego.cargarPartida();
    });
    
}

main();