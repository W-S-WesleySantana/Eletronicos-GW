const produtos = [
    { nome: "A'Gold FN-BT30", preco: 0.00, src: "assets/img/fones/A'Gold FN-BT30.jfif" },
    { nome: "AirPods PRO2", preco: 0.00, src: "assets/img/fones/AirPods pro 2.webp" },
    { nome:"Apple AirPods Max", preco: 0.00, src: "assets/img/fones/Apple AirPods Max (2).jfif"},
    { nome:"Bluetooth HarmonyWave", preco: 0.00, src: "assets/img/fones/BLUETOOTH HARMONYWAVE.webp"},
    {nome: "BT660 JBL", preco: 0.00, src: "assets/img/fones/BT 660 JBL.jfif"},
    {nome: "Eletro EL-360", preco: 0.00, src: "assets/img/fones/Eletro modelo EL-360T.jfif"},
    {nome: "Headset JBL", preco: 0.00, src: "assets/img/fones/HEADSET JBL.jfif"},
    {nome: "Inova FON-13081", preco: 0.00, src: "assets/img/fones/Inova FON-13081.jfif"},
    {nome: "JBL Tune 660NC", preco: 0.00, src: "assets/img/fones/JBL Tune 660NC.webp"},
    {nome: "M10 Newest Bluetoon 5.3", preco: 0.00, src: "assets/img/fones/M10 Newest Bluetooth 5.3 (2).jfif"},

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