function mostrarSaludoDiv() {
    alert('¡Hola! Soy el div');
}

function mostrarSaludo() {
    alert('¡Hola!');
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("container").addEventListener("click", function(){
        alert("Hola! Soy el div");
    });

    document.getElementById("boton").addEventListener("click", (e) =>{
        e.stopPropagation();
    })
})
