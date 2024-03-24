# Exemplos de Código JavaScript

## ex01.js

```javascript
let nomeVisita = prompt('Digite seu nome: ');
console.log(`Olá, ${nomeVisita}, seja bem-vindo(a) à nossa empresa.`);

``` 

## ex02.js

```javascript
let idade = prompt('Digite sua idade: ');

if (idade >= 60) {
    console.log('Aguarde na fila de prioridade.');
} else {
    console.log('Aguarde na fila normal.');
}
``` 

## ex03.js

```javascript
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

``` 

## ex04.js

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
``` 

## ex05.js

```javascript
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

``` 

## ex06.js

```javascript
let num1 = parseFloat(prompt('Digite o primeiro número: '));
let num2 = parseFloat(prompt('Digite o segundo número: '));

let resultado = num1 * num2;
console.log(`O resultado da multiplicação é: ${resultado}`);
``` 

## ex07.js

```javascript
let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));

if (num1 % num2 === 0) {
    console.log('O primeiro número é divisível pelo segundo.');
} else {
    console.log('O primeiro número não é divisível pelo segundo.');
}
``` 

## ex08.js

```javascript
let listaSalarios = [1500, 2000, 2500, 3000];

let somaSalarios = 0;
for (let salario of listaSalarios) {
    somaSalarios += salario;
}

console.log(`O salário total da folha de pagamento é: ${somaSalarios}`);
``` 

## ex09.js

```javascript
let anoNascimento = parseInt(prompt('Digite o ano de nascimento: '));
let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;
console.log(`Sua idade é: ${idade}`);
``` 

## ex10.js

```javascript
let salario = parseFloat(prompt('Digite o salário: '));

let aumento = 0;
if (salario <= 2000) {
    aumento = salario * 0.1;
} else if (salario > 5000 && salario < 10000) {
    aumento = salario * 0.05;
} else if (salario > 10000 && salario < 15000) {
    aumento = salario * 0.02;
}

let novoSalario = salario + aumento;

console.log(`Salário antes do aumento: R$ ${salario.toFixed(2)}`);
console.log(`Salário com aumento: R$ ${novoSalario.toFixed(2)}`);
``` 

