alert('Boas vindas ao jogo do número secreto');
let numMax = 10
let numeroSecreto = parseInt(Math.random() * calc + 1);
console.log(numeroSecreto);
let chute;

let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numMax}`);

    // se o chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O Número Secreto é menor do que o número ${chute}`)
        } else {
            alert(`O Número Secreto é maior do que o número ${chute}`)
        }
        tentativas ++;
    }
}

/*
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`)
}
*/

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);