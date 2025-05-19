
//Jogo de Adivinha numeros###############
// let num = parseInt(Math.random() * 21);
// let tentativas = 1;
// let chute = Number(prompt("Adivinhe o número secreto entre 0 e 20:"));

// while (true) {
//     if (chute === num) {
//         alert(`Acertou com ${tentativas} tentativa${tentativas === 1 ? '' : 's'}`);
//         break;
//     }
    
//     alert(`Número secreto é ${chute > num ? "menor" : "maior"} que ${chute}`);
//     chute = Number(prompt("Tente novamente:"));
//     tentativas++;
// }

//###################################################################################

//Calculo de medias usando array##########
// let notas = []
// let tamanho_array = Number(prompt("Quantas notas você quer para calcular a media?"));
// contador = 0

// while (contador < tamanho_array){
//     let valor = Number(prompt("Digite as notas:"));
//     notas.push(valor);
//     contador++
// }

// let media = (notas.reduce((total, nota) => total + nota, 0))/tamanho_array

// alert(`A media das suas notas é ${media}`);

//#######################################################################################

//verificar idade usando ternario###########################################
//let idade = Number(prompt("fale sua idade"));
//console.log(`voce é ${idade >= 18 ? 'maior de idade' : 'menor de idade'}`)

//####################################################################################

//vericar numero impar, par, zero
// let num = Number(prompt("digite um numero"));
// if(num == 0){
//     print("numero é zero");
// } else if(num %2 == 0){
//      console.log("numero é par");
// } else{
//      console.log("numero é impar");
//     }

//################################################################################

//contar de 1 ate 10
// let contador = 1

// while(contador <= 10){
//     console.log(contador);
//     contador++
// }

//##########################################################################

//contar de 10 ate 1

// let contador = 10

// while(contador >= 1){
//     console.log(contador);
//     contador--
// }

//###########################################################

//numero aleatorio entre 1 e 1000
//let num = parseInt(Math.random()* 1001)

//console.log(num)

//##############################################################

//Calculadora usando funçoes

// let num_escolhido = parseInt(prompt("diga o primeiro numero"))
// let segundo_num_escolhido = parseInt(prompt("diga o segundo numero"))
// let calculadora = parseInt(prompt("escolha uma operação: [1]somar [2]subtrair [3]multiplicar [4]dividir"));

// function soma(a, b) {
//     return a + b
// }

// function subtrair(a, b) {
//     return a - b
// }

// function multiplicar(a, b) {
//     return a * b
// }

// function dividir(a, b) {
//     return a / b
// }

// if(calculadora === 1) {
//     alert(`a soma é ${soma(num_escolhido, segundo_num_escolhido)}`)    
// } else if (calculadora === 2) {
//     alert(`a subtração é ${subtrair(num_escolhido, segundo_num_escolhido)}`)    
// } else if (calculadora === 3) {
//     alert(`a multiplicação é ${multiplicar(num_escolhido, segundo_num_escolhido)}`)
// } else if (calculadora === 4) {
//     alert(`a divisão é ${dividir(num_escolhido, segundo_num_escolhido)}`)    
// }

//##########################################################################

//jogo numero secreto + atualizado

// let secret_num = createRandomNumber();
// let tentativas = 1;

// function texto_tela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// function mensagemInicial(){
//     texto_tela('h1', 'Numero secreto');
//     texto_tela('p', 'Adivinhe o numero entre 1 a 20');
// }

// mensagemInicial();

// function verify_chute() {
//     let chute = parseInt(document.querySelector('input').value);
//     console.log(secret_num);
//     console.log(chute == secret_num ? 'acertou' : 'errou');

//     if(chute == secret_num) {
//         texto_tela('h1',"Acertou");
//         let palavraTentativa = tentativas > 1 ? 'tentativas' : "tentativa";
//         texto_tela('p', `Você descobriu com ${tentativas} ${palavraTentativa}`);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         let mensagem = `O numero secreto é ${secret_num > chute ? 'maior' : 'menor'} que ${chute}`;
//         texto_tela('p', mensagem);
//         document.querySelector('input').value = '';
//     }
//     tentativas++;
// }

// function createRandomNumber() {
//     return parseInt(Math.random() * 20) + 1;
// }

// function limparChute(){
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function newGame(){
//     secret_num = createRandomNumber();
//     limparChute();
//     tentativas = 1;
//     mensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled', true);
//}

//#########################################################################
