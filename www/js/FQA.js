'use strict';

const question = document.getElementsByClassName('question');

function showTheAnswer(e) {
    console.log(e.target);
    let show = e.target.nextElementSibling;
    console.log(show);
    show.classList.toggle('hidden');
}

document.body.addEventListener('click', (e) => showTheAnswer(e));