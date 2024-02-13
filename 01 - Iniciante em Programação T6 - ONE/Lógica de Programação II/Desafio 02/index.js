/*
Criar uma função que exibe "Olá, mundo!" no console.
Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
Criar uma função que recebe três números como parâmetros e retorna a média deles.
Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/

function olaMundo () {
    return "Olá Mundo!";
}
console.log(olaMundo())


/*
function olaMundo () {
    console.log("Olá Mundo!")
}
olaMundo()
*/

function recebeNome (nome) {
    return `Olá, ${nome}`
}
console.log(recebeNome("Guilherme!"))


/*
function recebeNome (nome) {
    console.log(`Olá, ${nome}!`)
}
recebeNome('Guilherme')
*/

function retornaDobro (num) {
    return `O Dobro do Número ${num}, é: ${num * 2}`
}
console.log(retornaDobro(2))

/*
function retornaDobro (num) {
    console.log (`O Dobro do Número ${num} é: ${num * 2}`)
}
retornaDobro(2)
*/

function recebeTresNumero (num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3

    return `A média dos Números: ${num1}, ${num2}, e ${num3} é: ${media.toFixed(2)}`
}
console.log(recebeTresNumero(17, 20, 35));


/*
function recebeTresNumero (num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3

    console.log(`A média dos Números: ${num1}, ${num2}, e ${num3} é igual a: ${media.toFixed(2)}`);
}
recebeTresNumero(10, 20, 30)
*/

/*
function retornaMaiorNumero (num1, num2) {
    return num1 > num2 ? `O maior Número entre "${num1}" e "${num2}" é: ${num1}` : `O maior Número entre "${num1}" e "${num2}" é: ${num2}`
}
console.log(retornaMaiorNumero(10, 5));
console.log(retornaMaiorNumero(10, 105));
*/

let maior = (num1, num2) => num1 > num2 ? `O maior número entre "${num1}" e "${num2}" é: ${num1}` : `O maior número entre "${num1}" e "${num2}" é: ${num2}`
console.log(maior(10, 5));
console.log(maior(10, 200));

/*
function multiplicaNumero (num) {
    return `A multiplicação do Número ${num} por ele mesmo é: ${num * num}`
}
console.log(multiplicaNumero(10))
*/

function multiplicaNumero (num) {
    console.log(`A multiplicação do Número ${num} por ele mesmo é ${num * num}`)
}
multiplicaNumero(100)