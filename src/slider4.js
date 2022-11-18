window.addEventListener('load', () => {
    // const hero = document.querySelector('#hero')

    // let img = document.createElement('img')

    // img.classList.add('slider4')

    // hero.appendChild(img)

    const imgHero4 = document.querySelector("#img-hero4")

    const imagenes = [
        '../img/imagen4.svg',
        '../img/imagen1.svg',
        '../img/imagen2.svg',
        '../img/imagen3.svg',
        '../img/hero1.svg',
        '../img/hero2.svg',
        '../img/hero3.svg',
        '../img/hero4.svg',
        '../img/hero5.svg',
        '../img/hero6.svg',
        '../img/hero7.svg',
        '../img/hero8.svg'
    ]

    // const imagen = document.querySelector('.slider4')


  let segundosRandom = Math.floor((Math.random() * 6000) + 1000)
    let indiceRandom = imagenes[0]

    function setInicial (inicial) {
        imgHero4.src = inicial
    }
    function cambiarImagenes(ind) {
        imgHero4.src = imagenes[ind]
    }

   
 setInicial(indiceRandom)

    setInterval(()=> {
        segundosRandom = Math.floor((Math.random() * 5000) + 1000)
        indiceRandom = Math.floor(Math.random() * imagenes.length)

        cambiarImagenes(indiceRandom)
    }, segundosRandom)
})