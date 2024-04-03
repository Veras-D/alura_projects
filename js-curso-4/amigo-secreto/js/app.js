let amigos = [];

// Função para adicionar amigo à lista
function adicionar() {
    const nomeAmigo = document.getElementById('nome-amigo').value.trim();

    // Verificar se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite o nome do amigo.');
        return;
    }

    // Adicionar amigo à lista
    amigos.push(nomeAmigo);

    // Atualizar a lista de amigos exibida
    atualizarListaAmigos();

    // Limpar o campo de entrada
    document.getElementById('nome-amigo').value = '';
}

// Função para sortear amigos
function sortear() {
    // Verificar se há amigos suficientes para sortear
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para poder sortear.');
        return;
    }

    // Copiar a lista de amigos para não modificar a original
    const listaSorteio = amigos.slice();

    // Embaralhar a lista de sorteio
    for (let i = listaSorteio.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaSorteio[i], listaSorteio[j]] = [listaSorteio[j], listaSorteio[i]];
    }

    // Atualizar a lista de sorteio exibida
    atualizarListaSorteio(listaSorteio);
}

// Função para reiniciar o sorteio
function reiniciar() {
    // Limpar a lista de amigos e a lista de sorteio
    amigos = [];
    atualizarListaAmigos();
    atualizarListaSorteio([]);
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigosElemento = document.getElementById('lista-amigos');
    listaAmigosElemento.innerHTML = amigos.map(amigo => `<p>${amigo}</p>`).join('');
}

// Função para atualizar a lista de sorteio exibida
function atualizarListaSorteio(listaSorteio) {
    const listaSorteioElemento = document.getElementById('lista-sorteio');
    listaSorteioElemento.innerHTML = listaSorteio.map((amigo, index) => `<p>${index + 1}. ${amigo}</p>`).join('');
}
