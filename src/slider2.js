window.addEventListener('load', () => {
    // const hero = document.querySelector('#hero')

    // let img = document.createElement('img')

    // img.classList.add('slider2')

    // hero.appendChild(img)

    const imgHero2 = document.querySelector("#img-hero2")

    const imagenes = [
        '../img/imagen2.svg',
        '../img/imagen1.svg',
        '../img/imagen3.svg',
        '../img/imagen4.svg',
        '../img/hero1.svg',
        '../img/hero2.svg',
        '../img/hero3.svg',
        '../img/hero4.svg',
        '../img/hero5.svg',
        '../img/hero6.svg',
        '../img/hero7.svg',
        '../img/hero8.svg'
    ]

    const imagen = document.querySelector('.slider2')

    let segundosRandom = Math.floor((Math.random() * 6000) + 1000)
    let indiceRandom = imagenes[0]

 
    function setInicial (inicial) {
        // imagen.src = inicial
        imgHero2.src = inicial
    }
    function cambiarImagenes(ind) {
        // imagen.src = imagenes[ind]
        imgHero2.src = imagenes[ind]
    }

   
 setInicial(indiceRandom)

    setInterval(()=> {
        segundosRandom = Math.floor((Math.random() * 5000) + 1000)
        indiceRandom = Math.floor(Math.random() * imagenes.length)
        
        cambiarImagenes(indiceRandom)
    }, segundosRandom)
})