// PUNTUACIONES DE SATISFACCION
const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")
const cuatro = document.getElementById("cuatro")
const cinco = document.getElementById("cinco")
const puntuacion = document.getElementById("container2__puntuacion")

// CONTENEDORES
const contenedorPrincipal = document.getElementById("container-principal")
const contenedorSecundario = document.getElementById("container-secundario")

// BOTON ENVIAR

const enviar = document.getElementById("enviar")

// LOGICA

let valorSatisfaccion = 0

uno.addEventListener("click", () => {
    valorSatisfaccion = 1;
    uno.classList.toggle("seleccion")
    dos.classList.remove("seleccion")
    tres.classList.remove("seleccion")
    cuatro.classList.remove("seleccion")
    cinco.classList.remove("seleccion")
})
dos.addEventListener("click", () => {
    valorSatisfaccion = 2;
    dos.classList.toggle("seleccion")
    uno.classList.remove("seleccion")
    tres.classList.remove("seleccion")
    cuatro.classList.remove("seleccion")
    cinco.classList.remove("seleccion")
})
tres.addEventListener("click", () => {
    valorSatisfaccion = 3;
    tres.classList.toggle("seleccion")
    cuatro.classList.remove("seleccion")
    cinco.classList.remove("seleccion")
    uno.classList.remove("seleccion")
    dos.classList.remove("seleccion")
})
cuatro.addEventListener("click", () => {
    valorSatisfaccion = 4;
    cuatro.classList.toggle("seleccion")
    cinco.classList.remove("seleccion")
    uno.classList.remove("seleccion")
    dos.classList.remove("seleccion")
    tres.classList.remove("seleccion")
})
cinco.addEventListener("click", () => {
    valorSatisfaccion = 5;
    cinco.classList.toggle("seleccion")
    uno.classList.remove("seleccion")
    dos.classList.remove("seleccion")
    tres.classList.remove("seleccion")
    cuatro.classList.remove("seleccion")
})


// EVENTOS

enviar.addEventListener("click", () => {
    contenedorSecundario.classList.toggle("oculto")
    puntuacion.innerText = valorSatisfaccion
})