const botonHamburguesa = document.querySelector("#hamburguesa");
const menuHamburguesa = document.querySelector("#header-list--celulares");

function display() {
  menuHamburguesa.classList.toggle("active");
}

function removeClass() {
  menuHamburguesa.classList.remove("active");
}

botonHamburguesa.addEventListener("click", display);

document.addEventListener("scroll", removeClass);
