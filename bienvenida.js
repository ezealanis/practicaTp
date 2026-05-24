
const formulario = document.getElementById("form-ingreso");

function validarBienvenida(event){
    event.preventDefault();
    let nombre = document.getElementById("input-nombre").value;
    nombre = nombre.trim();
    
    if(nombre === ""){
        alert("Ingrese un nombre valido.");
        return;
    }

    localStorage.setItem("nombreUsuario", nombre);
    window.location.href = "index.html";
}

formulario.addEventListener("submit", validarBienvenida);