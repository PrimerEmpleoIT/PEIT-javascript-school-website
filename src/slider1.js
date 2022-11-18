window.addEventListener('load', () => {
    const hero = document.querySelector('#hero')

    let img = document.createElement('img')

    img.classList.add('carousel')

    hero.appendChild(img)

    const imagenes = [
        '../img/imagen1.svg',
        '../img/hero1.svg',
        '../img/hero2.svg'
    ]

    const imagen = document.querySelector('.carousel')

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
