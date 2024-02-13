// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
/*
function IMC (altura, peso) {
    return `O Seu IMC é: ${(peso / (altura * altura)).toFixed(2)}`
}
console.log(IMC(1.85, 97))
*/

function IMC (altura, peso) {
    console.log(`O seu IMC é: ${(peso / (altura * altura)).toFixed(2)}`)
}
IMC(1.80, 97)

console.log('-----------------------------------------');
// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
/*
function calculaFatorial (num) {
    let result;
    for (let i = 0; i <= num; i ++) {
        result = num * i;
    }
    return result;
}
console.log(calculaFatorial(5))
*/

function calculaFatorial (num) {
    let result;
    for (let i = 0; i <= num; i++) {
        result = num * i
        console.log(`${i} X ${num}: ${result}`)
    }
    return result
}
calculaFatorial(5)
console.log('-----------------------------------------');

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

/*
function converteDolarParaReal (valor) {
    let dolar = 4.80
    let result = (valor / dolar).toFixed(2)
    return result
}
console.log(converteDolarParaReal(10))
*/

function converteDolarParaReal (valor) {
    let dolar = 4.80
    let result;
    result = (valor / dolar).toFixed(2);
    console.log(`Ao converter R$${valor} para Dolares é igual a: US$${result}`)
}
converteDolarParaReal(10);
console.log('-----------------------------------------');

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
/*function calcularAreaPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura)

    return `A Área é de ${area} e o Perímetro é de ${perimetro}`
}
console.log(calcularAreaPerimetro(5, 8))
*/

function calcularAreaPerimetro(altura, largura) {
    let area = altura * largura
    let perimetro = 2 * (altura + largura)

    console.log(`A Área é de ${area} e o Perímetro é de ${perimetro}`)
}
calcularAreaPerimetro(8, 5)
console.log('-----------------------------------------');

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
/*function calcularCirculo (raio) {
    const pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio

    return `Área da sala circular é: ${area} e seu Perímetro é ${perimetro}`
}
console.log(calcularCirculo(4));
*/

function calcularCirculo (raio) {
    const pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio
    
    console.log(`Área da sala circular é: ${area} e perímetro da Sala é: ${perimetro}`)
}
calcularCirculo(4);

console.log('-----------------------------------------');
// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada (num) {
    console.log('--TABUADA--')
    let result;
    for (let i = 0; i <= 10; i ++) {
        result = num * i

        console.log(`${i} X ${num} = ${result}`)
    }
}
tabuada(10)