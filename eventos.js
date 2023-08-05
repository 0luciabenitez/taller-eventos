function mostrarSaludoDiv() {
    alert('¡Hola! Soy el div');
}

function mostrarSaludo() {
    alert('¡Hola!');
}

const miDiv = document.getElementById('Boton');
miDiv.addEventListener('click', mostrarSaludoDiv);
