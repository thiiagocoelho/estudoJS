let secret_num_anteriores = []
let secret_num = createRandomNumber();
let tentativas = 1;


function texto_tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    texto_tela('h1', 'Numero secreto');
    texto_tela('p', 'Adivinhe o numero entre 1 a 20');
}

mensagemInicial();

function verify_chute() {
    let chute = parseInt(document.querySelector('input').value);
    console.log(secret_num);
    console.log(chute == secret_num ? 'acertou' : 'errou');

    if(chute == secret_num) {
        texto_tela('h1',"Acertou");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : "tentativa";
        texto_tela('p', `Você descobriu com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let mensagem = `O numero secreto é ${secret_num > chute ? 'maior' : 'menor'} que ${chute}`;
        texto_tela('p', mensagem);
        document.querySelector('input').value = '';
    }
    tentativas++;
}

function createRandomNumber() {
    let secret_num = parseInt(Math.random() * 20) + 1;
    if (secret_num_anteriores.includes(secret_num)){
        return createRandomNumber();
    } else {
        secret_num_anteriores.push(secret_num);
        console.log(secret_num_anteriores)
        return secret_num
    }
}

function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

function newGame(){
    secret_num = createRandomNumber();
    limparChute();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

