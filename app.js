// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
const listaAmigos = document.querySelector("#listaAmigos");
const listaResultado = document.querySelector("#resultado");

function agregarAmigo() {
  const inputAmigo = document.querySelector("#amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo) {
    amigos.push(nombreAmigo);
    actualizarListaAmigos(nombreAmigo);
    inputAmigo.value = "";
  } else {
    alert("Por favor, ingresa un nombre antes de agregar.");
  }
}

