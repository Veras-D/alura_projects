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