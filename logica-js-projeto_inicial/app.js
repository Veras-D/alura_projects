alert('Bem Vindo ao Game Precognition');

let secretNumber = 42;
let playerNumber = prompt('Olá Viajante, você entrou na camara secreta do vidente, para escapar você terá de adivinhar qual numero estou pensando hahahaaha, você nunca escapará!')

if (playerNumber == secretNumber) {
    console.log('Parabens, Você acertou!')
}
else {
    console.log('Você errou, portanto ficará preso aqui pela eternidade hahahahahah!!!')
}