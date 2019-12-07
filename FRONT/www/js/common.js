'use strict';

const buscador = document.getElementById('hidden-mobile');
const search = document.getElementById('search');
const showSubMenu = document.getElementById('button-menu');
const subMenu = document.querySelector('section');

function show(here) {
    here.classList.remove('removeShow');
    if (here.classList.contains('show')) {
        here.classList.add('removeShow');
        here.classList.remove('show');
    } else {
        here.classList.add('show');
    }
    here.focus();
}

function removeShow(desplegable) {
    if (desplegable.classList.contains('show')) {
        desplegable.classList.add('removeShow');
        desplegable.classList.remove('show');
    }

}

document.body.addEventListener('click', (e) => {
    if (e.target != search.firstElementChild) {
        removeShow(buscador);
    }
    if (e.target != showSubMenu.firstElementChild) {
        removeShow(subMenu);
    }
});

search.addEventListener('click', (e) => show(buscador));
showSubMenu.addEventListener('click', () => show(subMenu));


