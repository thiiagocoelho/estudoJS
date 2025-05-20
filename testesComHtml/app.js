//imc = peso/(altura^2)

function verify_click_IMC(){
    let peso = parseFloat(prompt("Digite seu peso:"));
    let altura = parseFloat(prompt("Digite sua altura"));
    let imc = calculo_IMC(peso, altura);
    console.log(imc)
    alert(`Seu IMC é: ${imc.toFixed(2)}`);
}

function calculo_IMC(valorPeso, valorAltura){
    return valorPeso / (valorAltura**2)
}

//(Fatorial)# n = n * (n-1)

function verify_click_fatorial(){
    let num = parseInt(prompt("Digite um numero"));
    let num_fatorial = calculo_fatorial(num);
    console.log(num_fatorial);
    alert(`O fatorial do número ${num} é ${num_fatorial}`);
}

function calculo_fatorial(n){
    let resultado_fatorial = 1;
    for (let i = n; i > 1; i--) {
        resultado_fatorial *= i;
    }
    return resultado_fatorial;
}

//Cambio, 1 dolar é igual a 4.80 reais

let valorDolar = 4.80

function verify_click_cambio(){
    let reais = parseFloat(prompt("Digite o valor em reais para conversão:"));
    let conversao = calculo_cambio(reais, valorDolar);
    console.log(conversao);
    alert(`R$ ${reais} em dolares é U$D ${conversao}`);

}

function calculo_cambio(real, dolar){
    return dolar*real
}

//Perimetros

let pi = 3.14

function verify_click_perimetro() {
    let forma = prompt("Que forma você deseja calcular o perimetro? 1[Retangulo] 2[Circulo]")
    forma == 1 ? mensagem_retangulo() : mensagem_circulo();
}

function mensagem_circulo(){
    let valorRaio = parseFloat(prompt("Digite o valor do raio"));
    let perimetro_circulo = calculo_perimetro_circulo(valorRaio);
    console.log(perimetro_circulo);
    alert(`O perimetro do circulo é ${perimetro_circulo}`);
}

function mensagem_retangulo() {
    let base = parseFloat(prompt("Digite a base do retangulo"));
    let altura = parseFloat(prompt("Digite a altura do retangulo"));
    let perimetro_retangulo = calculo_perimetro_retangulo(base, altura);
    console.log(perimetro_retangulo);
    alert(`O perimetro do retangulo é ${perimetro_retangulo}`);    
}

function calculo_perimetro_retangulo(b, h) {
    return 2*(b + h);
}

function calculo_perimetro_circulo(raio){
    return pi*(raio**2)
}

//Tabuada

//usuario digita um numero, depois vai mostrar a tabuada desse numero


function verify_click_tabuada(){
    let num = parseInt(prompt("Digite o numero"));
    showTabuada(num);
}

function showTabuada(n){
    for (let i = 1; i <= 10; i++) {
        let resultado_tabuada = n * i;
        console.log(`${n} x ${i} = ${resultado_tabuada}`);
        alert(`${n} x ${i} = ${resultado_tabuada}`);
    }
}

//testes de listas

let linguagens = ['JavaScript','C','C++', 'Kotlin', 'Python'];
linguagens.push('Java, Ruby, GoLang');
console.log(linguagens);

console.log(linguagens[0]);
console.log(linguagens[1]);
console.log(linguagens[7]); 