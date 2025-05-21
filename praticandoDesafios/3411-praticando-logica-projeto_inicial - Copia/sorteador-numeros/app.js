function sortear() {
    const quantidade = getInputValue('quantidade');
    const valorMinimo = getInputValue('de');
    const valorMaximo = getInputValue('ate');

    if (!valoresValidos(quantidade, valorMinimo, valorMaximo)) {
        alert("Erro: a quantidade de números solicitada é maior do que o intervalo permite.");
        return;
    }

    const numerosSorteados = gerarNumerosAleatorios(quantidade, valorMinimo, valorMaximo);

    exibirResultado(numerosSorteados);
    ativarBotaoReiniciar();
}

//recebe id do html e retorna um valor int em base decimal
function getInputValue(id) {
    return parseInt(document.getElementById(id).value, 10);
}

//garante que o usuário não esteja tentando sortear mais números únicos do que o intervalo permite
function valoresValidos(quantidade, min, max) {
    return quantidade <= (max - min + 1);
}

//gera numeros aleatorios, como tambem adiciona 'numero' dentro da array numeros verificando se aquele 'numero' ja esta na array numeros
//set é usado para garantir que os numeros nao se repitam
//quando set atinge o valor desejado(quantidade)
function gerarNumerosAleatorios(quantidade, min, max) {
    const numeros = new Set(); //cria um set(armazena valores unicos) chamado numeros

    while (numeros.size < quantidade) { //continua enquanto o numero de elementos dentro de set for menor que a quantidade desejada
        const numero = getRandomInt(min, max);
        numeros.add(numero); //adiciona numero ao set, mas se ja tive esse numero, o set ignora e o while continua
    }
    console.log(numeros);

    return Array.from(numeros); //converte o set em arry
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirResultado(numeros) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros.join(', ')}</label>`;
}

function ativarBotaoReiniciar() {
    const botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
}

function limparCampos() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
}

function reiniciar() {
    limparCampos();
    desativarBotaoReiniciar();
}

function desativarBotaoReiniciar() {
    const botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}
