const produtos = [
    { nome: "DT 20 MAX Watch", preco: 0.00, src: "assets/img/SmartWats/DT 20 MAX Watch.jfif" },
    { nome: "SmartWatch NFC", preco: 0.00, src: "assets/img/SmartWats/SmartWatch NFC.jfif" },
    { nome: "SmartWatch Ultra X9", preco: 0.00, src: "assets/img/SmartWats/Smartwatch Ultra X9.jfif" },
    { nome: "Ultra 9", preco: 0.00, src: "assets/img/SmartWats/ULTRA 9.jfif" },
    { nome: "X10 Ultra", preco: 0.00, src: "assets/img/SmartWats/X10 Ultra Mini.jfif" },
    { nome: "X9 PRO", preco: 0.00, src: "assets/img/SmartWats/X9 PRO.jfif" },
    
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

const botaoAdicionar = document.querySelectorAll(".bnt-li");
const contadorItens = document.querySelector(".contador-carrinho");

botaoAdicionar.forEach(button => {
    button.addEventListener("click", function() {
        numeroDeItens += 1;
        contadorItens.textContent = numeroDeItens;
    });
});