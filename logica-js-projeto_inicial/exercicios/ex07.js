let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));

if (num1 % num2 === 0) {
    console.log('O primeiro número é divisível pelo segundo.');
} else {
    console.log('O primeiro número não é divisível pelo segundo.');
}