document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });

    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    const body = document.body;

    aumentarFonte.addEventListener('click', () => {
        const currentFontSize = parseInt(window.getComputedStyle(body).fontSize);
        body.style.fontSize = (currentFontSize + 2) + 'px';
    });

    diminuirFonte.addEventListener('click', () => {
        const currentFontSize = parseInt(window.getComputedStyle(body).fontSize);
        body.style.fontSize = (currentFontSize - 2) + 'px';
    });
});