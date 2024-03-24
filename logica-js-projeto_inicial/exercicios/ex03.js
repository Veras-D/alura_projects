let nota1 = parseFloat(prompt('Digite a primeira nota: '));
let nota2 = parseFloat(prompt('Digite a segunda nota: '));
let nota3 = parseFloat(prompt('Digite a terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7 && media <= 10) {
    console.log('Aprovado');
} else if (media < 7 && media >= 0) {
    console.log('Reprovado');
} else {
    console.log('Notas inválidas');
}
