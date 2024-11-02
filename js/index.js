// menú busqueda
//Obtener los elementos por el id

const searchButton = document.getElementById('search-button')
const searchClose = document.getElementById('search-close')
const searchContent = document.getElementById('search-content')

// mostrar el menú de búsqueda
// validar si el botón de búsqueda existe
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search') //añadir la clase para mostrar la búsqueda
    })
}

// ocultar el menú de búsqueda
//validar si el botón de cerrar búsqueda existe

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}



// login
//Obtener los elementos por el id

const loginButton = document.getElementById('login-button')
const loginClose = document.getElementById('login-close')
const loginContent = document.getElementById('login-content')

// mostrar login
if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login') //añadir la clase para mostrar la búsqueda
    })
}

// ocultar login
if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login') //quitamos la busqueda
    })
}




/* appear */

let appearElement = document.querySelectorAll('.appear')

window.addEventListener('scroll', () => {
    appearElement.forEach((appear) => {
        if (appear.getBoundingClientRect().top < window.innerHeight - 300) {
            appear.style.opacity = '1'
        } else {
            appear.removeAttribute('style')
        }
    })
})

/* menu hamburguesa */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#mobileMenu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".header__nav__link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});