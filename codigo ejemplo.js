const eleccionesJugador = document.querySelectorAll('.eleccion');
const eleccionesMaquina = ['piedra', 'papel', 'tijera'];
const resultado = document.getElementById('ganador');
const marcadorJugador = document.getElementById('marcador-jugador');
const marcadorMaquina = document.getElementById('marcador-maquina');
let puntosJugador = 0;
let puntosMaquina = 0;

eleccionesJugador.forEach(eleccion => {
    eleccion.addEventListener('click', function() {
        const eleccionUsuario = this.id;
        const eleccionMaquinaAleatoria = eleccionesMaquina[Math.floor(Math.random() * 3)];

        document.getElementById('eleccion-jugador').textContent = `Tu elección: ${eleccionUsuario}`;
        document.getElementById('eleccion-maquina').textContent = `Elección de la máquina: ${eleccionMaquinaAleatoria}`;

        determinarGanador(eleccionUsuario, eleccionMaquinaAleatoria);
    });
});

function determinarGanador(eleccionUsuario, eleccionMaquinaAleatoria) {
    if (eleccionUsuario === eleccionMaquinaAleatoria) {
        resultado.innerHTML = "<h2> Empate</h2>" 
        Swal.fire({
            title: "Empate",
            text: "El CPU uso: " + eleccionMaquinaAleatoria + " igual que tu",
            iconHtml: '<i class="bi bi-exclamation-triangle-fill"></i></i>'
          });
        
        ;
    } else if (
        (eleccionUsuario === 'piedra' && eleccionMaquinaAleatoria === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionMaquinaAleatoria === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionMaquinaAleatoria === 'papel')
    ) {
        puntosJugador++;
        marcadorJugador.textContent = `Jugador: ${puntosJugador}`;
        resultado.textContent = '¡Ganaste!';
        Swal.fire({
            title: "Ganastes",
            text: "El CPU uso: " + eleccionMaquinaAleatoria,
            iconHtml: '<i class="bi bi-trophy-fill"></i>'
          });
    } else {
        puntosMaquina++;
        marcadorMaquina.textContent = `Máquina: ${puntosMaquina}`;
        resultado.textContent = '¡Perdiste!';
        Swal.fire({
            title: "Perdistes",
            text: "El CPU uso: " + eleccionMaquinaAleatoria ,
            iconHtml: '<i class="bi bi-emoji-frown-fill"></i>'
          });
    }
}