{/* <script>
document.querySelector('.foto').addEventListener('mousemove', function(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posición X del cursor
    const width = rect.right - rect.left;

    // Calcula el ángulo de rotación en base a la posición del cursor
    const rotateY = 20 * ((x / width) - 0.5);

    // Aplica la rotación
    e.target.style.transform = 'rotateY(' + rotateY + 'deg)';
});

document.querySelector('.foto').addEventListener('mouseleave', function(e) {
    // Resetea la rotación cuando el cursor deja la imagen
    e.target.style.transform = '';
});
</script> */}
