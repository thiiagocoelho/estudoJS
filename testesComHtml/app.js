// function verify_click_alert(){
//     console.log("clicou")
// }

// function verify_click_prompt(){
//     let cidade = prompt("fala uma cidade");
//     alert(`voce esteve em ${cidade}`);
// }


// function verify_click_soma(){
//     let num1 = parseInt(prompt("primeiro numero pra soma"));
//     let num2 = parseInt(prompt("segundo numero pra soma"));
    
//     alert(`a soma é ${num1+num2}`);
// }

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
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
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

//Perimetro do retangulo p = 2(b + h)

function verify_click_perimetro() {
    let base = parseFloat(prompt("Digite a base do retangulo"));
    let altura = parseFloat(prompt("Digite a altura do retangulo"));
    let perimetro = calculo_perimetro(base, altura);
    console.log(perimetro);
    alert(`O perimetro do retangulo é ${perimetro}`);
}

function calculo_perimetro(b, h) {
    return 2*(b + h);
    
}