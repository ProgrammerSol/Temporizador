let contador = 20;
const intervalo = setInterval(() => {
    contador -=5;
    console.log(`contador: ${contador}`);

    if (contador === 0) {
        clearInterval(intervalo);
        console.log(`temporizador detenido.`);
    }
},5000);