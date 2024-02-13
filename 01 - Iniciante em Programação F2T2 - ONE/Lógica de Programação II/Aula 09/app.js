// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto'

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um Número entre 1 e 10'

let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = numeroTentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas = `Você descobriu o Número secreto com ${numeroTentativas} ${palavraTentativa}`


        exibirTextoNaTela('h1', 'Parabêns Você Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Não foi dessa vez');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Não foi dessa vez');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        numeroTentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto')
    exibirTextoNaTela('p', 'Escolha um Número de 1 a 10')
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ""
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}