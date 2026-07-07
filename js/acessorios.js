const produtos = [
    { nome: "ASPIRADOR 3/1", preco: 0.00, src: "assets/img/Acessorios/Aspirador 3 em 1.jpg" },
    { nome: "CAIXA DE SOM", preco: 0.00, src: "assets/img/Acessorios/Caixa de som.jpg" },
    { nome: "CARREGADOR 120W", preco: 0.00, src: "assets/img/Acessorios/Carregador 120W.jpg" },
    { nome: "CARREGADOR TURBO", preco: 0.00, src: "assets/img/Acessorios/Carregador turbo.jpg" },
    { nome: "CARREGADOR IPHONE", preco: 0.00, src: "assets/img/Acessorios/images.jpg" },
    { nome: "360 Visual Angle Cloud wifi Camera", preco: 0.00, src: "assets/img/Acessorios/360° Visual Angle Cloud WiFi Camera.jfif" },
    { nome: "Apple USB-C", preco: 0.00, src: "assets/img/Acessorios/Apple USB-C to Lightning and Lightning Charge Cable.jfif" },
    { nome: "ARU GG Compressor", preco: 0.00, src: "assets/img/Acessorios/ARU GG Compressor de Ar.jfif" },
    { nome: "Boxed Inova 65W 4em 1 USB-C", preco: 0.00, src: "assets/img/Acessorios/boxed Inova 65W 4 em 1 USB-C.webp" },
    { nome: "Capa de Celular Couro Premium", preco: 0.00, src: "assets/img/Acessorios/Capa de Celular Couro Premium.jfif" },
    { nome: "HCVLI HY-089", preco: 0.00, src: "assets/img/Acessorios/HCVLI HY-089.jfif" },
    { nome: "Lehmox 33W USB Type-C", preco: 0.00, src: "assets/img/Acessorios/Lehmox 33W USB Type-C charger.webp" },
    { nome: "Receptor Bluetooh Para Carro", preco: 0.00, src: "assets/img/Acessorios/Receptor Bluetooth para carro.webp" },
    { nome: "Transmissor FM Bluetooth", preco: 0.00, src: "assets/img/Acessorios/Transmissor FM Bluetooth X8.jfif" },


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