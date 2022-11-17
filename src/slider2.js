window.addEventListener('load', () => {
    const hero = document.querySelector('#hero')

    let img = document.createElement('img')

    img.classList.add('slider2')

    hero.appendChild(img)

    const imagenes = [
        '../img/imagen2.svg',
        '../img/hero3.svg',
        '../img/hero4.svg'
    ]

    const imagen = document.querySelector('.slider2')

    let indice = 0

    function cambiarImagenes() {
        imagen.src = imagenes[indice]

        if (indice < imagenes.length - 1) {
            indice++
        } else {
            indice = 0
        }
    }

    setInterval(cambiarImagenes, 2500)
})