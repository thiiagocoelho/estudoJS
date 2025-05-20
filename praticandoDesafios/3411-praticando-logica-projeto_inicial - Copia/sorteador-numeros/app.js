

//function texto_tela(tag, texto){
//    let campo = document.getElementById(tag);
//    tag.innerHTML = texto;
//}

function sortear(){
    let quantidade_num = parseInt(document.getElementById('quantidade').value);
    let de_num = parseInt(document.getElementById('de').value);
    let ate_num = parseInt(document.getElementById('ate').value);
    console.log(quantidade_num, de_num, ate_num);

    let listaNum_sorteados = [];
    let num_sorteado;

    for (let i = 0; i < quantidade_num; i++) {
        let num_sorteado = createRandomNumber(de_num, ate_num);

        while(listaNum_sorteados.includes(num_sorteado)) {
            num_sorteado = createRandomNumber(de_num, ate_num);
        }

        listaNum_sorteados.push(num_sorteado);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaNum_sorteados}</label>`


    console.log(listaNum_sorteados);
}

function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
