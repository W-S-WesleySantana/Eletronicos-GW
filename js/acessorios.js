const produtos = [
    { nome: "ASPIRADOR 3/1", preco: 0.00, src: "assets/img/Acessorios/Aspirador 3 em 1.jpg" },
    { nome: "CAIXA DE SOM", preco: 0.00, src: "assets/img/Acessorios/Caixa de som.jpg" },
    { nome: "CARREGADOR 120W", preco: 0.00, src: "assets/img/Acessorios/Carregador 120W.jpg" },
    { nome: "CARREGADOR TURBO", preco: 0.00, src: "assets/img/Acessorios/Carregador turbo.jpg" },
    { nome: "CARREGADOR IPHONE", preco: 0.00, src: "assets/img/Acessorios/images.jpg" },

]






  function renderizarProdutos(lista) {
    const container = document.querySelector('.lista-ofertas');
    let htmlGerado = '';

    lista.forEach(produto => {
        htmlGerado += `
              <li  class="img-li">

        <img  class="imagens-li" src="${produto.src}" alt="${produto.nome}">

        <p class="classificacao">${produto.nome}</p>

        <p class="nome-produto">R$ ${produto.preco.toFixed(2)}</p>

        <button class="bnt-li" >Adiciona ao Carrinho</button>
      </li>
        `;
    });

    container.innerHTML = htmlGerado;

}

renderizarProdutos(produtos);


/* evento para adiciona contador no carrinho */

let numeroDeItens = 0;

const botaoAdicionar = document.querySelector(".bnt-li");
const contadorItens = document.querySelector(".contador-carrinho");

botaoAdicionar.addEventListener("click", function() {
numeroDeItens += 1;

contadorItens.textContent = numeroDeItens;
});