
// ejersicio 1,,,
// Definimos una función que muestra un mensaje en la consola
// function mostrarMensaje() {
    // prompt("despues de 2 segundos");
// }
// Llamamos a setTimeout con una función y un retraso de 2000 milisegundos (2 segundos)
// setTimeout(mostrarMensaje, 2000);

// ejercisio 2
// Función para cambiar el color de fondo del cuadrado
function cambiarColor() {
    // Lista de colores
    const colores = ["red", "blue", "green", "yellow", "purple", "orange"];
    // Genera un índice aleatorio
    const indice = Math.floor(Math.random() * colores.length);
    // Obtiene el cuadrado
    const cuadrado = document.getElementById("cuadrado");
    // Cambia el color de fondo
    cuadrado.style.backgroundColor = colores[indice];
}

// Intervalo de tiempo para cambiar el color cada 1 segundo (1000 milisegundos)
const intervalo = setInterval(cambiarColor, 1000);

// Después de 5 segundos (5000 milisegundos), se detiene el cambio de color
setTimeout(() => {
    clearInterval(intervalo);
}, 5000);