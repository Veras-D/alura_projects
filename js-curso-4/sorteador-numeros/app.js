// Função para sortear números
function sortear() {
    const quantidade = document.getElementById('quantidade').value;
    const de = document.getElementById('de').value;
    const ate = document.getElementById('ate').value;

    const numerosSorteados = [];

    for (let i = 0; i < quantidade; i++) {
        const numeroSorteado = Math.floor(Math.random() * (parseInt(ate) - parseInt(de) + 1)) + parseInt(de);
        numerosSorteados.push(numeroSorteado);
    }

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(', ')}</label>`;

    // Habilitar o botão de reiniciar
    document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado');
}

// Função para reiniciar
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

    // Desabilitar o botão de reiniciar
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
}

// Desabilitar o botão de reiniciar no carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
});
