// Acerte o numero ou sofra as consequências!

let playerName = prompt('Olá viajante, qual seu nome? ');
let limit = 100;
let secretNumber = Math.floor(Math.random() * limit) + 1;
let errorMessage = 'This is not a number';
let playerNumber = 0;
let numTentativas = 0;


console.log(secretNumber)
alert('Bem Vindo ao Game Precognition Viajante ' + playerName);
alert('Um momento ' + playerName + ', antes de continuarmos devo fazer uma pergunta muito importante!');
let playerAge = prompt('Qual sua idade? ');

if (playerAge >= 18 && playerAge < 130) {

    if (playerAge > 30) {
        alert(playerName + ' você não já é velho demais pra isso?');
    }
    alert('Olá Viajante ' + playerName + ', você entrou na câmara secreta do vidente, para escapar você terá de adivinhar qual numero estou pensando hahahaaha, você nunca escapará! ');
    alert('Vou lhe dar uma dica para que eu me divirta mais, o numero que você deve adivinhar está entre 1 e ' + limit + '!');
    while (playerNumber != secretNumber && numTentativas < 4){
        playerNumber = prompt('Então Viajante ' + playerName + ', em qual numero estou pensando? ');
    
        if (playerNumber == secretNumber) {
            console.log('Não acredito, como você adivinhou!?');
            alert('Não acredito, como você adivinhou!?');
        } else if (!Number.isInteger(parseInt(playerNumber))) {
            alert(errorMessage);
        }else {
            if (numTentativas == 3) {
                alert('Você perdeu hahahahahahahahhaahahahahaha!!!');
            } else {
                console.log('Você errou, portanto ficará preso aqui pela eternidade hahahahahah!!!');
                alert('Você errou, portanto ficará preso aqui pela eternidade hahahahahah!!!');
                let plural = numTentativas > 1 ? ''  : 's';
                alert(`Ah vamos não precisa chorar, vou te dar mais ${3 - numTentativas} chance${plural}, vamos tente de novo, vou te dar uma dica!`);
                if (secretNumber < playerNumber) {
                    alert(`O numero que estou pensando é menor que ${playerNumber}!`);
                } else {
                    alert(`O numero que estou pensando é maior que ${playerNumber}!`);
                }
            }

        }
        numTentativas++;
    }

} else {
    let systemMessage = playerAge < 18 ? 'Menores de idade são proibidos, vá embora!!!' : 'Mentirosos não são bem vindos!!!';
    alert(systemMessage);   
}