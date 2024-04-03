document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = "R$ 0";
let valorTotal = 0;

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' - ')[0];
    let precoProduto = produto.split('R$')[1];
    let quant = document.getElementById('quantidade').value;
    let precoProdutoTotal = precoProduto * quant;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quant}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProdutoTotal}</span>
    </section>`;

    valorTotal = precoProdutoTotal + valorTotal;

    let campoTotal =  document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;
}
function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = "R$ 0";
    valorTotal = 0;
}