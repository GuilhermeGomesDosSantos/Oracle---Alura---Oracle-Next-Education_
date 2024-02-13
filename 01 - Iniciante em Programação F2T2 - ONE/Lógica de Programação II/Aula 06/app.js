// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto'

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um Número entre 1 e 10'

let numeroSecreto = gerarNumeroAleatorio();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabêns Você Acertou!');
        exibirTextoNaTela('p', 'Parabens você acertou o Número');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Não foi dessa vez');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Não foi dessa vez');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto')
exibirTextoNaTela('p', 'Escolha um Número de 1 a 10')

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}
