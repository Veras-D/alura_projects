function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == secretNumber) {
        titulo.innerHTML = 'Acertou!';
        let palavraTentativa = numTentativas > 1 ? 'tentativas' : 'tentativa';
        paragrafo.innerHTML = `Você acertou o numero secreto com ${numTentativas} ${palavraTentativa}!`;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        titulo.innerHTML = 'Errou :(';
        if (secretNumber < chute) {
            paragrafo.innerHTML = `O numero que estou pensando é menor que ${chute}!`;
        } else {
            paragrafo.innerHTML = `O numero que estou pensando é maior que ${chute}!`;
        }
    }
    numTentativas++;
    limparcampo();
}

function randomNumber(min, max) {
    num = Math.floor(Math.random() * max) + min;
    return num;
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    secretNumber = randomNumber(1, 50); // Número secreto entre 1 e 50
    numTentativas = 1;
    limparcampo();
    titulo.innerHTML = 'Secret Number Game';
    paragrafo.innerHTML = "Adivinhe o número secreto";
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
let secretNumber = randomNumber(1, 50); // Número secreto entre 1 e 50
let numTentativas = 1;


titulo.innerHTML = 'Secret Number Game';
paragrafo.innerHTML = "Adivinhe o número secreto";



