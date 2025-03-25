const body = document.querySelector('body');
const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');
const altoContrasteBtn = document.getElementById('alto-contraste'); // Corrigido o ID

aumentarFonte.addEventListener('click', () => {
    const currentFontSize = parseInt(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (currentFontSize + 2) + 'px';
});

diminuirFonte.addEventListener('click', () => {
    const currentFontSize = parseInt(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (currentFontSize - 2) + 'px';
});

altoContrasteBtn.addEventListener('click', () => {
    body.classList.toggle('alto-contraste');
});