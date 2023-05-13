function redirectToRegister() {
    window.location.href = "register.html";
}

const bdark = document.querySelector('#boton-dark');
const body = document.querySelector('body');
const footer = document.querySelector('footer');

bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
})