alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 6;
console.log(numeroSecreto);
let chute;

let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 a 10');

    // se o chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
    } else {
        if (chute > numeroSecreto) {
            alert(`O Número Secreto é menor do que o número ${chute}`)
        } else {
            alert(`O Número Secreto é maior do que o número ${chute}`)
        }
        tentativas ++;
    }
}