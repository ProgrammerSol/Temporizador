   // Seleccionamos los elementos del DOM
const displayTemporizador = document.getElementById("temporizador");
const displayMensaje = document.getElementById("mensaje");
const contenedorEstrellas = document.getElementById("estrellas-container");

let contador = 60;

// Mostramos el valor inicial de inmediato en pantalla
displayTemporizador.textContent = contador;

const intervalo = setInterval(() => {
    contador--;
    
    // Actualizamos el número en la pantalla
    displayTemporizador.textContent = contador;
    console.log(`contador: ${contador}`);

    if (contador === 0) {
        clearInterval(intervalo);
        displayMensaje.textContent = "¡Temporizador detenido!";
        console.log(`temporizador detenido.`);

        // Se activa la animación de estrellas
        lanzarEstrellas();
    }
}, 1000);

// Función para generar estrellas flotantes por toda la pantalla
function lanzarEstrellas() {
    const cantidadEstrellas = 50;

    for (let i = 0; i < cantidadEstrellas; i++) {
        const estrella = document.createElement("div");
        estrella.classList.add("estrella");

        // Posición horizontal aleatoria por toda la pantalla
        estrella.style.left = Math.random() * 100 + "vw";

        // Tamaño aleatorio de la estrella (entre 4px y 12px)
        const tamaño = Math.random() * 8 + 4;
        estrella.style.width = tamaño + "px";
        estrella.style.height = tamaño + "px";

        // Duración de animación aleatoria (entre 2s y 4s)
        const duracion = Math.random() * 2 + 2;
        estrella.style.animationDuration = duracion + "s";

        // Retraso aleatorio de inicio
        estrella.style.animationDelay = Math.random() * 1.5 + "s";

        // Insertamos la estrella en el contenedor
        contenedorEstrellas.appendChild(estrella);
    }
}