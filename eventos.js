document.querySelector('.btn').addEventListener('click', () => {
    alert("Hola! soy el div");
});

function saludar() {
    alert("Hola!")
}

document.querySelector('button').addEventListener('click', (event) => {
    event.stopPropagation(); // Detiene la propagación del evento click
    alert("Hola!");
});