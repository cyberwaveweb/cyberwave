window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fondoOriginal = document.querySelector('.container');
    const fondoPolaroids = document.querySelector('.fondo-polaroids');

    if (scrollY > 200) {
        fondoOriginal.classList.add('desvanecer');
        fondoPolaroids.classList.add('aparecer');
    } else {
        fondoOriginal.classList.remove('desvanecer');
        fondoPolaroids.classList.remove('aparecer');
    }
});