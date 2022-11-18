window.addEventListener('load', () => {
    const hero = document.querySelector('#hero')

    let img = document.createElement('img')

    img.classList.add('slider3')

    hero.appendChild(img)

    const imagenes = [
        '../img/imagen3.svg',
        '../img/hero5.svg',
        '../img/hero6.svg'
    ]

    const imagen = document.querySelector('.slider3')

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