class juego{
guardarPartida() {
    if (!this.personaje) {
        alert("No hay un personaje para guardar la partida.");
        return;
    }

    const datosPartida = {
        nombre: this.personaje.nombre,
        raza: this.personaje.raza,
        complexion: this.personaje.complexion,
        altura: this.personaje.altura,
        nivel: this.personaje.nivel,
        ps: this.personaje.ps,
        at: this.personaje.at,
        def_: this.personaje.def_,
        vel: this.personaje.vel,
    };

    localStorage.setItem('partidaGuardada', JSON.stringify(datosPartida));
    alert("Partida guardada exitosamente.");
}
guardarPartida() {
    if (!this.personaje) {
        alert("No hay un personaje para guardar la partida.");
        return;
    }

    const datosPartida = {
        nombre: this.personaje.nombre,
        raza: this.personaje.raza,
        complexion: this.personaje.complexion,
        altura: this.personaje.altura,
        nivel: this.personaje.nivel,
        ps: this.personaje.ps,
        at: this.personaje.at,
        def_: this.personaje.def_,
        vel: this.personaje.vel,
    };

    localStorage.setItem('partidaGuardada', JSON.stringify(datosPartida));
    alert("Partida guardada exitosamente.");
}
}