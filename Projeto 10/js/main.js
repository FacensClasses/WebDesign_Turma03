'use strict'

const displayText = document.querySelector('.visor p');
const buttons = Array.from(document.querySelectorAll('.button button'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        displayText.innerText += button.innerText;
    });
});
