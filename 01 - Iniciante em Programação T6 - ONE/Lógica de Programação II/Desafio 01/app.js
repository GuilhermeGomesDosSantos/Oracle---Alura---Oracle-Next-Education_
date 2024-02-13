/*
Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
*/

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'

function botaoConsole () {
    console.log('Botão console foi pressionado')
}

function botaoAlerta () {
    alert('Eu amo JS')
}

function botaoPrompt () {
    let cidade = ''
    cidade = prompt('Insira o nome de uma cidade: ')

    alert(`Estive em ${cidade} e lembrei de você`)
}

function botaoSomar () {
    let num1, num2;
    let soma = 0;

    num1 = Number(prompt('Digite um Valor: '))
    num2 = Number(prompt('Digite outro Valor: '))

    soma = num1 + num2;

    alert(`A soma entre ${num1} e ${num2} é igual a: ${soma}`)
}