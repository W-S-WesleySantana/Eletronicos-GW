const produtos = [
    { nome: "REDMI A5", preco: 940.00, src: "assets/img/Celulares/Redmi a5.jfif" },
    { nome: "REDMI A7 pro", preco: 1350.00, src: "assets/img/Celulares/Redmi a7 pro.jfif" },
    { nome: "REDMI 15", preco: 1500.00, src: "assets/img/Celulares/Redmi15.jfif" },
    { nome: "REDMI 15C", preco: 1650.00, src: "assets/img/Celulares/redmi 15c.webp" },   
];

function renderizarProdutos(lista) {
    const container = document.querySelector('.lista-ofertas');
    let htmlGerado = '';

    lista.forEach(produto => {
        htmlGerado += `
              <li class="img-li">
                <img class="imagens-li" src="${produto.src}" alt="${produto.nome}">
                <p class="classificacao">${produto.nome}</p>
                <p class="nome-produto">R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="adicionarAoCarrinho(undefined)" class="bnt-li">Adiciona ao Carrinho</button>
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

// Mapear os elementos
const btnAbrir = document.querySelector('.icone-carrinho');
const btnFechar = document.getElementById('btn-fechar-carrinho');
const carrinho = document.getElementById('carrinho-lateral');
const overlay = document.getElementById('overlay');

// Função para abrir o carrinho
function abrirCarrinho() {
    carrinho.classList.remove('carrinho-oculto');
    overlay.classList.remove('carrinho-oculto');
}

// Função para fechar o carrinho
function fecharCarrinho() {
    carrinho.classList.add('carrinho-oculto');
    overlay.classList.add('carrinho-oculto');
}

// Eventos de clique
if(btnAbrir) btnAbrir.addEventListener('click', abrirCarrinho);
if(btnFechar) btnFechar.addEventListener('click', fecharCarrinho);
if(overlay) overlay.addEventListener('click', fecharCarrinho); 

// Função para adicionar os itens no carrinho
let itensNoCarrinho = [];

function adicionarAoCarrinho(idDoProduto) {
    let produtoEncontrado = null;

   
    if (event && event.target) {
       
        const itemLista = event.target.closest('.img-li');
        
        if (itemLista) {
           
            const tagNome = itemLista.querySelector('.classificacao');
            
            if (tagNome) {
                const nomeTexto = tagNome.innerText.trim();
                
                produtoEncontrado = produtos.find(p => p.nome.trim() === nomeTexto);
            }
        }
    }

    if (!produtoEncontrado) {
        console.error("Não foi possível identificar o produto clicado.");
        return;
    }

    
    const itemRepetido = itensNoCarrinho.find(item => item.nome === produtoEncontrado.nome);

    if (itemRepetido) {
        itemRepetido.quantidade += 1;
    } else {
        itensNoCarrinho.push({ ...produtoEncontrado, quantidade: 1 });
    }

    atualizarCarrinhoLateral();
    abrirCarrinho();
}

function atualizarCarrinhoLateral() {
    const listaCarrinhoHtml = document.querySelector('.carrinho-conteudo');
    const totalHtml = document.querySelector('.contador-carrinho'); 

    if (!listaCarrinhoHtml) {
        console.error("Erro: Não foi encontrada nenhuma tag com a classe '.carrinho-conteudo' no seu HTML.");
        return;
    }

    let htmlItens = "";
    let valorTotal = 0;

    if (itensNoCarrinho.length === 0) {
        listaCarrinhoHtml.innerHTML = '<p>Seu carrinho está vazio.</p>';
        if(totalHtml) totalHtml.innerText = '0.00';
        
      
        const rodapeExistente = document.querySelector('.carrinho-total-rodape');
        if (rodapeExistente) rodapeExistente.remove();
        return;
    }

   
    listaCarrinhoHtml.style.display = "flex";
    listaCarrinhoHtml.style.flexWrap = "wrap";
    listaCarrinhoHtml.style.gap = "15px";
    
    
    listaCarrinhoHtml.style.maxHeight = "calc(100vh - 220px)"; 
    listaCarrinhoHtml.style.overflowY = "auto";
    listaCarrinhoHtml.style.paddingBottom = "20px";

    itensNoCarrinho.forEach((item) => {
        const precoLimpo = Number(item.preco || 0);
        
        htmlItens += `
            <div class="item-carrinho" style="display: flex; flex-direction: column; align-items: center; border: 1px solid #eee; padding: 10px; border-radius: 5px; width: 120px; text-align: center; background: #fff;">
                <div>
                    <img class="imagens-li" src="${item.src || ''}" alt="${item.nome || 'Produto'}" style="max-width: 80px; height: auto; object-fit: contain;">
                    <p class="classificacao" style="margin: 5px 0; font-size: 14px; font-weight: bold;">${item.nome || 'Sem nome'}</p>
                    <p class="nome-produto" style="margin: 2px 0; color: #666;">R$ ${precoLimpo.toFixed(2)}</p>
                    <small class="quantidade">Qtd: ${item.quantidade}</small>
                </div>
                <span class="valorTotalIntens" style="margin-top: 5px; font-size: 12px; color: #28a745; font-weight: bold;">
                    R$ ${(precoLimpo * item.quantidade).toFixed(2)}
                </span>
            </div>
        `;
        valorTotal += precoLimpo * item.quantidade;
    });

    listaCarrinhoHtml.innerHTML = htmlItens;
    
    if(totalHtml) totalHtml.innerText = valorTotal.toFixed(2);

  
    let rodapePreco = document.querySelector('.carrinho-total-rodape');
    
    if (!rodapePreco) {
        rodapePreco = document.createElement('div');
        rodapePreco.classList.add('carrinho-total-rodape');
        
        rodapePreco.style.position = "absolute";
        rodapePreco.style.bottom = "0";
        rodapePreco.style.left = "0";
        rodapePreco.style.width = "100%";
        rodapePreco.style.backgroundColor = "#ffffff";
        rodapePreco.style.borderTop = "2px solid #eee";
        rodapePreco.style.padding = "15px 20px";
        rodapePreco.style.boxSizing = "border-box";
        rodapePreco.style.zIndex = "1010";
        
        listaCarrinhoHtml.parentElement.appendChild(rodapePreco);
    }
    
    
    rodapePreco.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; font-family: sans-serif; margin-bottom: 15px;">
            <span style="font-size: 16px; font-weight: bold; color: #333;">Valor Total:</span>
            <span style="font-size: 20px; font-weight: bold; color: #28a745;">R$ ${valorTotal.toFixed(2)}</span>
        </div>
        <button onclick="finalizarCompra()" style="width: 100%; background-color: #28a745; color: white; border: none; padding: 12px; font-size: 16px; font-weight: bold; border-radius: 5px; cursor: pointer; transition: background 0.2s;">
            Finalizar Compra
        </button>
    `;
}


function finalizarCompra() {
    alert("Obrigado pela sua compra! Seu pedido foi processado com sucesso.");
    
    
    itensNoCarrinho = [];
    atualizarCarrinhoLateral();
    fecharCarrinho();
}
