(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

const btnMenu = document.getElementById('menu');
const iconHambur = document.getElementById('hambur');
const iconX = document.getElementById('close');
const menuAbierto = document.querySelector('.navbar-collapse.collapse.show');
const menuCerrado = document.querySelector('.navbar-collapse.collapse');
const navLink = document.querySelectorAll('.nav-link');

let bool = false;

btnMenu.addEventListener('click', () => {
    if (bool) {
        bool = false;
        iconX.classList.remove('d-block');
        iconX.classList.add('d-none');
        iconHambur.classList.remove('d-none');
        iconHambur.classList.add('d-block');
    } else {
        bool = true;
        iconHambur.classList.remove('d-block');
        iconHambur.classList.add('d-none');
        iconX.classList.remove('d-none');
        iconX.classList.add('d-block');
    }
})

const menuHambur = () => {
    if (bool) {
        bool = false;
        iconX.classList.remove('d-block');
        iconX.classList.add('d-none');
        iconHambur.classList.remove('d-none');
        iconHambur.classList.add('d-block');
    } else {
        bool = true;
        iconHambur.classList.remove('d-block');
        iconHambur.classList.add('d-none');
        iconX.classList.remove('d-none');
        iconX.classList.add('d-block');
    }
}

navLink.forEach(n => n.addEventListener('click', menuHambur));

const linkAction = () => {
    const navMenu = document.getElementById('navbarTogglerDemo01');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const year = document.getElementById('year').textContent = new Date().getFullYear();

// const btnModalContacto = document.getElementById('btnModalContacto');
// const modal = document.getElementById('exampleModal');
// const body = document.querySelector('.body');

// btnModalContacto.addEventListener(('click'), () => {
//     const modalBackdropShow = document.querySelector('.modal-backdrop.show')
//     modal.classList.remove('show');
//     modal.style.display = 'none';
//     body.classList.remove('modal-open');
//     body.style.overflow = 'visible';
// })
