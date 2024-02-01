const menu = document.querySelector('#nome')

menu.addEventListener('click', onclick())

function onclick() {
    if (navbar.style.display == 'none') {
        navbar.style.display = 'flex'
    } else {
        navbar.style.display = 'none'
    }
}