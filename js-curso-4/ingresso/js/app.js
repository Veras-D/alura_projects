// Função para comprar ingresso
function comprar() {
    // Obter valores dos campos do formulário
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidade = parseInt(document.getElementById('qtd').value);

    // Verificar se a quantidade é válida
    if (quantidade <= 0) {
        alert('Por favor, selecione uma quantidade válida.');
        return;
    }

    // Verificar a quantidade disponível para o tipo de ingresso selecionado
    let qtdDisponivel;
    switch (tipoIngresso) {
        case 'pista':
            qtdDisponivel = parseInt(document.getElementById('qtd-pista').innerText);
            break;
        case 'superior':
            qtdDisponivel = parseInt(document.getElementById('qtd-superior').innerText);
            break;
        case 'inferior':
            qtdDisponivel = parseInt(document.getElementById('qtd-inferior').innerText);
            break;
        default:
            alert('Tipo de ingresso inválido.');
            return;
    }

    // Verificar se há ingressos disponíveis
    if (quantidade > qtdDisponivel) {
        alert(`Desculpe, não há ingressos suficientes disponíveis para ${tipoIngresso}.`);
        return;
    }

    // Atualizar a quantidade disponível
    const qtdAtualizada = qtdDisponivel - quantidade;
    switch (tipoIngresso) {
        case 'pista':
            document.getElementById('qtd-pista').innerText = qtdAtualizada;
            break;
        case 'superior':
            document.getElementById('qtd-superior').innerText = qtdAtualizada;
            break;
        case 'inferior':
            document.getElementById('qtd-inferior').innerText = qtdAtualizada;
            break;
    }

    // Mostrar mensagem de compra bem-sucedida
    alert(`Compra realizada com sucesso! Você comprou ${quantidade} ingresso(s) para ${tipoIngresso}.`);
}
