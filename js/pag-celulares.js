const produtos = [
    { nome: "REDMI A5", preco: 940.00, src: "assets/img/Celulares/Redmi a5.jfif" },
    { nome: "REDMI A7 pro", preco: 1350.00, src: "assets/img/Celulares/Redmi a7 pro.jfif" },
    { nome: "REDMI 15", preco: 1500.00, src: "assets/img/Celulares/Redmi15.jfif" },
    { nome: "REDMI 15C", preco: 1650.00, src: "assets/img/Celulares/redmi 15c.webp" },
    { nome: "REDMI 14C", preco: 1450.00, src: "assets/img/Celulares/Redmi 14.webp" },
    { nome: "REDMI NOTE 14", preco: 1650.00, src: "assets/img/Celulares/note 14.webp" },
    { nome: "REDMI NOTE 15 PRO", preco: 2200.00, src: "assets/img/Celulares/note 15 pro.jfif" },
    { nome: "REDMI NOTE 15", preco: 1850.00, src: "assets/img/Celulares/note15.webp" },
    


  ];

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