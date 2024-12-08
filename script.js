// Validación del login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Valores ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Credenciales válidas
    const validUsername = "niclesanti";
    const validPassword = "1234";

    // Validar credenciales
    if (username === validUsername && password === validPassword) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("Imagen-del-Login").style.display = "none";
        document.getElementById("roadmap-container").style.display = "block";
        document.getElementById("Usuario-iniciado").style.display = "block";
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Usuario o contraseña incorrectos";
        errorMessage.style.display = "block";
    }
});


// Manejo de botones en la ruta
document.querySelectorAll('.road-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const images = [
            'images/momento1.jpg',
            'images/momento2.jpg',
            'images/momento3.jpg',
            'images/momento4.jpg',
            'images/momento5.jpg',
            'images/momento6.jpg',
            'images/momento7.jpg',
            'images/momento8.jpg',
            'images/momento9.jpg',
            'images/momento10.jpg',
            'images/momento11.jpg',
            'images/momento12.jpg',
            'images/momento13.jpg',
            'images/momento14.jpg',
            'images/momento15.jpg'
        ];

        const imgPath = images[index];
        showImageModal(imgPath);
    });
});

// Muestra una imagen en un modal
function showImageModal(imgPath) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const img = new Image();
    img.src = imgPath;
    img.alt = 'Momento importante';
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';

    modal.appendChild(img);

    // Cierra el modal al hacer clic
    modal.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
}

/* Agregar el cerrar sesion */
const headerButton = document.querySelector(".header-button");
let cerrarSesionContainer = document.querySelector("#cerrar-sesion-container");

// Crear el contenedor si no está en el HTML
if (!cerrarSesionContainer) {
    cerrarSesionContainer = document.createElement("div");
    cerrarSesionContainer.id = "cerrar-sesion-container";
    cerrarSesionContainer.innerHTML = `
        <button id="logout-button">Cerrar sesión</button>
    `;
    document.body.appendChild(cerrarSesionContainer);
}

// Función para alternar la visibilidad del contenedor
headerButton.addEventListener("click", () => {
    const rect = headerButton.getBoundingClientRect();
    cerrarSesionContainer.style.top = `${rect.bottom + window.scrollY}px`;
    cerrarSesionContainer.style.right = `${window.innerWidth - rect.right}px`;
    cerrarSesionContainer.style.display =
        cerrarSesionContainer.style.display === "none" || cerrarSesionContainer.style.display === "" 
            ? "block" 
            : "none";
});

// Cerrar sesión: redirigir al login
cerrarSesionContainer.addEventListener("click", (e) => {
    if (e.target.id === "logout-button") {
        cerrarSesionContainer.style.display = "none";
        alert("Sesión cerrada"); // Mensaje opcional
        window.location.reload(); // Volver al login
    }
});
