'use strict'

function mostra() {
    const imagem = document.querySelector('#imagem');

    if(imagem.src.includes('img/cat.png'))
        imagem.src = 'img/dog.jpeg';
    else
        imagem.src = 'img/cat.png';
}

function altera() {
    const titulo = document.querySelector('#titulo');

    if(titulo.textContent != 'Novo Título')
        titulo.textContent = 'Novo Título';
    else
        titulo.textContent = 'Meu Título';
}

function cor() {
    const paragrafo = document.querySelector('#texto');

    if(paragrafo.style.color === ''||paragrafo.style.color === 'none')
        paragrafo.style.color = 'blue';
    else
        paragrafo.style.color = '';
}

let alternar = 0;

function toca() {
    const audio = [
        document.getElementById('mario'),
        document.getElementById('die'),
        document.getElementById('explosion')
    ];

    audio.forEach((audioElement, index) => {
        if (index !== alternar) 
        {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    });

    audio[alternar].play();
    alternar = (alternar + 1) % audio.length;
}

function retira() {
    const buttons = [
        document.getElementById('btn-titulo'),
        document.getElementById('btn-paragrafo'),
        document.getElementById('btn-audio')
    ];

    buttons.forEach(button => {
        button.classList.toggle('button');
    });
}

function btn2() {
    const btn2 = document.getElementById('btn-paragrafo');
    btn2.classList.toggle('button');
}

function btn3() {
    const btn3 = document.getElementById('btn-audio');
    btn3.classList.toggle('button');
}