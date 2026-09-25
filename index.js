   // Seleccionamos los elementos del DOM
        const displayTemporizador = document.getElementById("temporizador");
        const displayMensaje = document.getElementById("mensaje");

        let contador = 60;
        
        // Mostramos el valor inicial de inmediato en pantalla
        displayTemporizador.textContent = contador;

        const intervalo = setInterval(() => {
            contador --;
            
            // Actualizamos el número en la pantalla
            displayTemporizador.textContent = contador;
            console.log(`contador: ${contador}`);

            if (contador === 0) {
                clearInterval(intervalo);
                displayMensaje.textContent = "¡Temporizador detenido!";
                console.log(`temporizador detenido.`);
            }
        }, 1000);