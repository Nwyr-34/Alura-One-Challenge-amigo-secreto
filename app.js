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

function actualizarListaAmigos(nombreAmigo) {
  const elemento = document.createElement("li");
  elemento.textContent = nombreAmigo;
  elemento.dataset.nombre = nombreAmigo; // Agregar un atributo para identificar al amigo
  listaAmigos.appendChild(elemento);
}


// Como funcionalidad adicional, una vez que se sortea un amigo, se elimina de la lista
// y no se puede volver a sortear.

function sortearAmigo() {
  if (amigos.length) {
    const indice = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indice];

    // Mostrar el resultado
    mostrarResultado(seleccionado);

    // Eliminar al amigo del array
    amigos.splice(indice, 1);

    // Eliminar al amigo del DOM
    eliminarAmigoDelDOM(seleccionado);
  } else {
    alert("No hay amigos en la lista para sortear.");
  }
}

function mostrarResultado(seleccionado) {
  listaResultado.textContent = `Amigo sorteado: ${seleccionado}`;
  setTimeout(() => {
    listaResultado.textContent = "";
  }, 1500);
}

function eliminarAmigoDelDOM(nombreAmigo) {
  const elementos = listaAmigos.querySelectorAll("li");
  elementos.forEach((elemento) => {
    if (elemento.dataset.nombre === nombreAmigo) {
      listaAmigos.removeChild(elemento);
    }
  });
}

// Asignar eventos a los botones
document.querySelector("#btnAgregar").addEventListener("click", agregarAmigo);
document.querySelector("#btnSortear").addEventListener("click", sortearAmigo);