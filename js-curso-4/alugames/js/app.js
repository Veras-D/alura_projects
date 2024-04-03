document.getElementById("game-2")
document.getElementById("game-3")

function alterarStatus(n){
    let jogoClicado = document.getElementById("game-"+n);
    let imagem = jogoClicado.querySelector(".dashboard__item__img");
    let botao = jogoClicado.querySelector( ".dashboard__item__button" );

    if (imagem.classList.contains("dashboard__item__img--rented")){
        imagem.classList.remove("dashboard__item__img--rented")
        botao.classList.remove("dashboard__item__button--return")
        botao.textContent = "Alugar"
    } else {
        imagem.classList.add("dashboard__item__img--rented")
        botao.classList.add("dashboard__item__button--return")
        botao.textContent = "Devolver"

    }
}