alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 10;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 a 10');


// se o chute for igual ao numeroSecreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
} else {
    alert('Você errou!')
}