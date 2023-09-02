import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades"

const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}

const containerCarrinho = document.getElementById('produtos-carrinho')
let removeEmFechar = document.getElementById("carrinho")
let addEmFechar = removeEmFechar
let addEmAbrir = removeEmFechar
let removeEmAbrir = removeEmFechar

function abrirCarrinho() {
  addEmAbrir.classList.add('right-[-0]');
  removeEmAbrir.classList.remove('right-[-300px]');
}

function fecharCarrinho() {
  removeEmFechar.classList.remove('right-[-0]');
  addEmFechar.classList.add('right-[-300px]');
}

function irParaCheckout() {
  if (Object.keys(idsProdutosCarrinhoComQuantidade).length === 0) {
    return
  }
  window.location.href = window.location.origin + "/checkout.html"
}

function removerCarrinho(idProduto) {
  delete idsProdutosCarrinhoComQuantidade[idProduto]
  atualizarPrecoCarrinho()
  renderizarProdutoCarrinho()
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');
  const botaoIrParaCheckout = document.getElementById('finalizar-compra')

  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
  botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
  botaoIrParaCheckout.addEventListener('click', irParaCheckout);
}

function incrementarProduto(idProduto) {
  idsProdutosCarrinhoComQuantidade[idProduto]++
  salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade)
  atualizarPrecoCarrinho()
  attInformacaoQuantidade(idProduto)
}

function decrementarProduto(idProduto) {
  if (idsProdutosCarrinhoComQuantidade[idProduto] == 1){
    removerCarrinho(idProduto)
    salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade)
    return
  }
  idsProdutosCarrinhoComQuantidade[idProduto]--
  salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade)
  atualizarPrecoCarrinho()
  attInformacaoQuantidade(idProduto)
}


function attInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutosCarrinhoComQuantidade[idProduto];
}

function desenharCarrihno(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto)
  const elementoArticle = document.createElement('article')

  const classArticle = ['flex', 'bg-slate-100', 'p-1', 'relative', 'rounded-lg',]

  for (const classes of classArticle) {
    elementoArticle.classList.add(classes)
  }

  const cartaoDentroCarrinho = `<button id="remover-${produto.id}"><span class='material-symbols-outlined text-slate-500 absolute top-1 right-2 duration-300 hover:text-slate-900'>
        cancel
      </span></button>
    <img 
    src="./files/${produto.nomeArquivoImg}" 
    alt="teste" class='h-20 rounded-lg'>
    <div class='flex flex-col justify-between py-1 px-1'>
      <p class='text-sm'>${produto.nomeProduto}</p>
      <p class='text-sm'>$${produto.preco}R$</p>
    </div>
    <div class='flex text-slat-950 items-end absolute bottom-0 right-2'>
      <button class='mr-2' id='decrementar-produdo-${produto.id}'>
        -
      </button>
      <p id='quantidade-${produto.id}'>${idsProdutosCarrinhoComQuantidade[produto.id]}</p>
      <button class='ml-2' id='incrementar-produdo-${produto.id}''>
        +
      </button>
    </div>`

  elementoArticle.innerHTML = cartaoDentroCarrinho
  containerCarrinho.appendChild(elementoArticle) 

  document.getElementById(`decrementar-produdo-${produto.id}`).addEventListener("click", () => decrementarProduto(produto.id))

  document.getElementById(`incrementar-produdo-${produto.id}`).addEventListener("click", () => incrementarProduto(produto.id))

  document.getElementById(`remover-${produto.id}`).addEventListener("click", ()=> removerCarrinho(produto.id))
}

export function renderizarProdutoCarrinho() {
  containerCarrinho.innerHTML = ' '
  for (const idProduto in idsProdutosCarrinhoComQuantidade) {
    desenharCarrihno(idProduto)
  }
}

export function adicionarCarrinho(idProduto) {
  if (idProduto in idsProdutosCarrinhoComQuantidade) {
    incrementarProduto(idProduto)
    return;
  }

  idsProdutosCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade)
  atualizarPrecoCarrinho()
  desenharCarrihno(idProduto)
}

function atualizarPrecoCarrinho() {
  const precoCarrihno = document.getElementById('preco-total')
  let precoTotal = 0
  for (const idProdutoAnalise in idsProdutosCarrinhoComQuantidade){
    precoTotal += catalogo.find(p => p.id == idProdutoAnalise).preco * idsProdutosCarrinhoComQuantidade[idProdutoAnalise]
  }
  precoCarrihno.innerText = `Quantidade total: ${precoTotal}`
}