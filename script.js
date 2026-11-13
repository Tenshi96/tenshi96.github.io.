// Bloques desplegables: abren y cierran al tocar el título
document.querySelectorAll(".item button").forEach(function (boton) {
  boton.addEventListener("click", function () {
    var abierto = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!abierto));
  });
});
