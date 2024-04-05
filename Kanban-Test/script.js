// Selecionar todos os cartões e colunas
const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.column');
const botoesExcluirColuna = document.querySelectorAll('.botao-excluir-coluna');
let draggedCard = null;
let draggedColumn = null;


// Adicionar eventos de arrastar e soltar para os cartões e colunas
cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

columns.forEach(column => {
  column.addEventListener('dragstart', dragColumnStart);
  column.addEventListener('dragover', dragOver);
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragleave', dragLeave);
  column.addEventListener('drop', dragDrop);
  column.addEventListener('dragend', dragColumnEnd);
});

botoesExcluirColuna.forEach(botao => {
  botao.addEventListener('click', removerColuna);
});

// Função para iniciar o arrasto de um cartão
function dragStart() {
  draggedCard = this;
  setTimeout(() => (this.style.opacity = '0.5'), 0);
}

// Função para encerrar o arrasto de um cartão
function dragEnd() {
  draggedCard = null;
  setTimeout(() => (this.style.opacity = '1'), 0);
}

// Função para iniciar o arrasto de uma coluna
function dragColumnStart() {
  draggedColumn = this;
  setTimeout(() => (this.style.opacity = '0.5'), 0);
}

// Função para encerrar o arrasto de uma coluna
function dragColumnEnd() {
  draggedColumn = null;
  setTimeout(() => (this.style.opacity = '1'), 0);
}

// Função para permitir o arrasto sobre a coluna
function dragOver(e) {
  e.preventDefault();
}

// Função para alterar o estilo da coluna quando o cartão é arrastado sobre ela
function dragEnter() {
  this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
}

// Função para restaurar o estilo da coluna quando o cartão sai dela
function dragLeave() {
  this.style.backgroundColor = '';
}

// Função para soltar o cartão na coluna
function dragDrop() {
    if (draggedCard) {
       this.appendChild(draggedCard);
       // Restaure o estilo de fundo da coluna
       this.style.backgroundColor = ''; // Remove a linha que altera o estilo de fundo
    } else if (draggedColumn) {
       const kanban = document.querySelector('.kanban');
       kanban.insertBefore(draggedColumn, this);
    }
}
// Função para adicionar uma nova tarefa
function adicionarTarefa() {
  const descricao = document.getElementById('nova-tarefa').value.trim();
  if (descricao === '') return;

  const novoCartao = document.createElement('div');
  novoCartao.classList.add('card');
  novoCartao.textContent = descricao;
  novoCartao.setAttribute('draggable', 'true');

  novoCartao.addEventListener('dragstart', dragStart);
  novoCartao.addEventListener('dragend', dragEnd);

  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'X';
  botaoExcluir.classList.add('botao-excluir');
  botaoExcluir.addEventListener('click', () => removerTarefa(botaoExcluir));

  novoCartao.appendChild(botaoExcluir);

  const colunaAFazer = document.querySelector('.column:first-child');
  colunaAFazer.appendChild(novoCartao);

  document.getElementById('nova-tarefa').value = '';
}

// Função para remover uma tarefa
function removerTarefa(botaoExcluir) {
  const cartao = botaoExcluir.parentNode;
  cartao.parentNode.removeChild(cartao);
}

// Função para adicionar uma nova coluna
// Função para adicionar uma nova coluna
function adicionarColuna() {
    const nomeColuna = document.getElementById('nova-coluna').value.trim();
    if (nomeColuna === '') return;
   
    const novaColuna = document.createElement('div');
    novaColuna.classList.add('column');
    novaColuna.setAttribute('draggable', 'true');
   
    const cabecalho = document.createElement('div');
    cabecalho.classList.add('column-header');
   
    const tituloColuna = document.createElement('h2');
    tituloColuna.textContent = nomeColuna;
    cabecalho.appendChild(tituloColuna);
   
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'X';
    botaoExcluir.classList.add('botao-excluir-coluna');
    botaoExcluir.addEventListener('click', () => removerColuna(novaColuna));
    cabecalho.appendChild(botaoExcluir);
   
    novaColuna.appendChild(cabecalho);
   
    const kanban = document.querySelector('.kanban');
    kanban.appendChild(novaColuna);
   
    // Attach event listeners to the new column
    novaColuna.addEventListener('dragstart', dragColumnStart);
    novaColuna.addEventListener('dragover', dragOver);
    novaColuna.addEventListener('dragenter', dragEnter);
    novaColuna.addEventListener('dragleave', dragLeave);
    novaColuna.addEventListener('drop', dragDrop);
    novaColuna.addEventListener('dragend', dragColumnEnd);
   
    document.getElementById('nova-coluna').value = '';
   }
   

// Função para remover uma coluna
function removerColuna(coluna) {
  const kanban = document.querySelector('.kanban');
  kanban.removeChild(coluna);
}

function adicionarEventosArrastoColunas() {
  const columns = document.querySelectorAll('.column');
  columns.forEach(column => {
    column.addEventListener('dragstart', dragColumnStart);
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
    column.addEventListener('dragend', dragColumnEnd);
    });
}

// Função para adicionar eventos de arrasto e soltar para os cartões e colunas
function adicionarEventosArrastoCartaoColuna() {
 const cards = document.querySelectorAll('.card');
 const columns = document.querySelectorAll('.column');

 cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
 });

 columns.forEach(column => {
    column.addEventListener('dragstart', dragColumnStart);
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
    column.addEventListener('dragend', dragColumnEnd);
 });
}

// Adicionar eventos de clique para os botões de adicionar tarefa e coluna
function adicionarEventosBotoesAdicionar() {
    document.getElementById('adicionar-tarefa').addEventListener('click', adicionarTarefa);
    document.getElementById('adicionar-coluna').addEventListener('click', adicionarColuna);
}
function adicionarEventosBotoesExcluirTarefa() {
    const botoesExcluirTarefa = document.querySelectorAll('.botao-excluir');
    botoesExcluirTarefa.forEach(botao => {
       botao.addEventListener('click', () => removerTarefa(botao));
    });
}
function adicionarEventosBotoesExcluirColuna() {
    const botoesExcluirColuna = document.querySelectorAll('.botao-excluir-coluna');
    botoesExcluirColuna.forEach(botao => {
       botao.addEventListener('click', () => removerColuna(botao.closest('.column')));
    });
}  
// Função para editar o título de uma coluna ou tarefa
function editarTitulo(titulo) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = titulo.textContent;
    input.addEventListener('blur', () => {
        // Verifica se o elemento titulo e seu parentNode ainda existem
        if (titulo && titulo.parentNode) {
            titulo.textContent = input.value;
            titulo.parentNode.replaceChild(titulo, input);
        }
    });
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            // Verifica se o elemento titulo e seu parentNode ainda existem
            if (titulo && titulo.parentNode) {
                titulo.textContent = input.value;
                titulo.parentNode.replaceChild(titulo, input);
            }
        }
    });
    titulo.parentNode.replaceChild(input, titulo);
    input.focus();
}

document.addEventListener('DOMContentLoaded', () => {
    // Adicionando eventos de duplo clique aos títulos das colunas
    document.querySelectorAll('.column-header h2').forEach(titulo => {
        titulo.addEventListener('dblclick', () => editarTitulo(titulo));
    });

    // Adicionando eventos de duplo clique aos títulos das tarefas
    document.querySelectorAll('.card h2').forEach(titulo => {
        titulo.addEventListener('dblclick', () => editarTitulo(titulo));
    });
});

// Função para inicializar o aplicativo Kanban
function inicializarKanban() {
    adicionarEventosArrastoCartaoColuna();
    adicionarEventosBotoesExcluirColuna();
    adicionarEventosBotoesExcluirTarefa();
    adicionarEventosBotoesAdicionar();
}

// Inicializar o aplicativo Kanban quando a página é carregada
document.addEventListener('DOMContentLoaded', inicializarKanban);