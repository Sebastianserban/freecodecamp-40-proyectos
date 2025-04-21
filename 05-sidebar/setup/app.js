const boton = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const botonCerrado = document.querySelector(".close-btn");

boton.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

botonCerrado.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
