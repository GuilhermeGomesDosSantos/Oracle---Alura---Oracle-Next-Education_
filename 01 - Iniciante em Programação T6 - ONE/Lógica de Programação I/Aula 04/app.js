alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 a 30');

if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto (29)')
} else {
    alert('Você errou!')
}