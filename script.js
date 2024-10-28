// Seleccionar todas las imágenes en la galería
const galleryImages = document.querySelectorAll('.gallery img');

// Añadir un evento de clic a cada imagen
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    // Mostrar la imagen a pantalla completa
    img.classList.toggle('fullscreen');
  });
});
