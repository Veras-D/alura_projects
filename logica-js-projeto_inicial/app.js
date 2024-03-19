// Acerte o numero ou sofra as consequências!

let playerName = prompt('Olá viajante, qual seu nome? ');
let secretNumber = 42;
let errorMessage = 'This is not a number';
let playerNumber = 0;

alert('Bem Vindo ao Game Precognition Viajante ' + playerName);
alert('Um momento ' + playerName + ', antes de continuarmos devo fazer uma pergunta muito importante!');
let playerAge = prompt('Qual sua idade? ');

if (playerAge >= 18 && playerAge < 130) {

    if (playerAge > 30) {
        alert(playerName + ' você não já é velho demais pra isso?');
    }
    alert('Olá Viajante ' + playerName + ', você entrou na câmara secreta do vidente, para escapar você terá de adivinhar qual numero estou pensando hahahaaha, você nunca escapará! ');
    while (playerNumber != secretNumber){
        playerNumber = prompt('Então Viajante ' + playerName + ', em qual numero estou pensando? ');
    
        if (playerNumber == secretNumber) {
            console.log('Não acredito, como você adivinhou!?');
            alert('Não acredito, como você adivinhou!?');
        } else if (!Number.isInteger(parseInt(playerNumber))) {
            alert(errorMessage);
        }else {
            console.log('Você errou, portanto ficará preso aqui pela eternidade hahahahahah!!!');
            alert('Você errou, portanto ficará preso aqui pela eternidade hahahahahah!!!');
            alert('Ah vamos não precisa chorar, vou te dar uma chace, vamos tente de novo, vou te dar uma dica!');
            if (secretNumber < playerNumber) {
                alert(`O numero que estou pensando é menor que ${playerNumber}!`);
            } else {
                alert(`O numero que estou pensando é maior que ${playerNumber}!`);
            }
        }
    }

} else {
alert('Menores de idade são proibidos, vá embora!!!');
}