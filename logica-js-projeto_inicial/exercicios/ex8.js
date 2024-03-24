let listaSalarios = [1500, 2000, 2500, 3000];

let somaSalarios = 0;
for (let salario of listaSalarios) {
    somaSalarios += salario;
}

console.log(`O salário total da folha de pagamento é: ${somaSalarios}`);