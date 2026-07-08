

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

/* EVENTOS DE ABRIR E FECHAR O CARRINHO lateral */

const btnAbrir = document.querySelector('.icone-carrinho');
const btnFechar = document.getElementById('btn-fechar-carrinho');
const carrinho = document.getElementById('carrinho-lateral');
const overlay = document.getElementById('overlay');

function abrirCarrinho() {
  if(carrinho) carrinho.classList.remove('carrinho-oculto');
  if(overlay) overlay.classList.remove('carrinho-oculto');
}

function fecharCarrinho() {
  if(carrinho) carrinho.classList.add('carrinho-oculto');
  if(overlay) overlay.classList.add('carrinho-oculto');
}

if(btnAbrir) btnAbrir.addEventListener('click', abrirCarrinho);
if(btnFechar) btnFechar.addEventListener('click', fecharCarrinho);
if(overlay) overlay.addEventListener('click', fecharCarrinho); 



let itensNoCarrinho = [];
const contadorItens = document.querySelector(".contador-carrinho");

const containerProdutos = document.querySelector('.lista-ofertas');
if (containerProdutos) {
  containerProdutos.addEventListener('click', function(event) {
      // Se o elemento clicado for o botão de adicionar
      if (event.target.classList.contains('bnt-li')) {
          adicionarAoCarrinho(event);
      }
  });
}


function adicionarAoCarrinho(event) {
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

  
  if (contadorItens) {
      const totalItens = itensNoCarrinho.reduce((acc, item) => acc + item.quantidade, 0);
      contadorItens.textContent = totalItens;
  }

  atualizarCarrinhoLateral();
  abrirCarrinho();
}

function atualizarCarrinhoLateral() {
  const listaCarrinhoHtml = document.querySelector('.carrinho-conteudo');

  if (!listaCarrinhoHtml) {
      console.error("Erro: Não foi encontrada nenhuma tag com a classe '.carrinho-conteudo' no seu HTML.");
      return;
  }

  let htmlItens = "";
  let valorTotal = 0;

  if (itensNoCarrinho.length === 0) {
      listaCarrinhoHtml.innerHTML = '<p>Seu carrinho está vazio.</p>';
      if(contadorItens) contadorItens.textContent = "0";
      
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
   
    const numeroWhatsapp = "5511958396087";
  
  
    if (itensNoCarrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
  
   
    let mensagem = "🛒 *Novo Pedido!* \n\n";
    let total = 0;
  
    itensNoCarrinho.forEach((item) => {
      const subtotal = item.preco * item.quantidade;
      total += subtotal;
      
      
      mensagem += `▪️ *${item.nome}* \n`;
      mensagem += `  Qtd: ${item.quantidade} x R$ ${item.preco.toFixed(2)} = R$ ${subtotal.toFixed(2)}\n\n`;
    });
  
    mensagem += `💰 *Total do Pedido:* R$ ${total.toFixed(2)}`;
  
    
    const mensagemFormatada = encodeURIComponent(mensagem);
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemFormatada}`;
  
   
    window.open(urlWhatsapp, "_blank");
  
 
    alert("Obrigado pela sua compra! Redirecionando para o WhatsApp para finalizar seu pedido...");
    itensNoCarrinho = [];
    if (contadorItens) contadorItens.textContent = "0";
    atualizarCarrinhoLateral();
    fecharCarrinho();
  }
