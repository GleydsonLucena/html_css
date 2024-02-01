const menu = document.getElementById('menu-burguer')
const navbar = document.getElementById('navbar')

menu.addEventListener('click', click())

function click() {
    if (navbar.style.display == 'flex') {
        navbar.style.display = 'none'
    } else {
        navbar.style.display = 'flex'
    }
}
