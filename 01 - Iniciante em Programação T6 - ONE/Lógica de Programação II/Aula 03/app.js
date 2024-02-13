// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto'

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um Número entre 1 e 10'


function verificarChute () {
    console.log('Botão chutar foi clicado')
}

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto')
exibirTextoNaTela('p', 'Escolha um Número de 1 a 10')