window.addEventListener('load', () => {
    const hero = document.querySelector('#hero')

    let img = document.createElement('img')

    img.classList.add('slider4')

    hero.appendChild(img)

    const imagenes = [
        '../img/imagen4.svg',
        '../img/hero7.svg',
        '../img/hero8.svg'
    ]

    const imagen = document.querySelector('.slider4')

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