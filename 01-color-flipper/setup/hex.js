const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Obtener el botón y agregar un evento al hacer clic
let button = document.getElementById("btn");

button.addEventListener("click", function () {
    colorRandom();
});

function colorRandom() {
    let nav = document.getElementById("nav-color");

    let hexColor = "#"; // Comenzamos con "#"

    // Generar un código hexadecimal de 6 caracteres
    for (let i = 0; i < 6; i++) {
        let randIndex = Math.floor(Math.random() * hex.length);
        hexColor += hex[randIndex]; // Agregar un valor aleatorio del array hex
    }

    // Mostrar el color generado en el <nav>
    nav.textContent = hexColor;

    // Cambiar el fondo de la página al color generado
    document.body.style.backgroundColor = hexColor;
}
