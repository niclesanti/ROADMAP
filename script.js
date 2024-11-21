// Manejo de botones en la ruta
document.querySelectorAll('.road-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const images = [
            'images/momento1.jpg',
            'images/momento2.jpg',
            'images/momento3.jpg'
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
