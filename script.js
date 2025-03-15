const body = document.querySelector('body');
const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');
const altoContraste = document.getElementById('alto-contraste');

aumentarFonte.addEventListener('click', () => {
    body.style.fontSize = parseInt(window.getComputedStyle(body).fontSize) + 2 + 'px';
});

diminuirFonte.addEventListener('click', () => {
    body.style.fontSize = parseInt(window.getComputedStyle(body).fontSize) - 2 + 'px';
});

altoContraste.addEventListener('click', () => {
    body.classList.toggle('alto-contraste');
});