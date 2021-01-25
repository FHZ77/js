// eventos 

var recuadro = document.querySelector("#recuadro");

/// eventos del dom
function cambiarColor() {

    recuadro.style.background = "red";
}

// eventos desde js

var boton = document.querySelector("#boton");
boton.addEventListener("click", movercaja)

function movercaja() {
    recuadro.style.width = "555px";
    recuadro.style.transition = "1s width ease";


}