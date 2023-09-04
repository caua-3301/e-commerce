import { desenharCarrihnoSimples, lerLocalStorage, apagarLocalStorage, salvarLocalStorage} from "./src/utilidades";

function desenharProdutosCheckout() {
    const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}
    for (const idProduto in idsProdutosCarrinhoComQuantidade){
        desenharCarrihnoSimples(idProduto, "container-produtos-checkout", idsProdutosCarrinhoComQuantidade[idProduto])
    }
}

function finalizarCompra(evt) {
    evt.preventDefault()
    const dataAtual = new Date()
    const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}
    if (Object.keys(idsProdutosCarrinhoComQuantidade).length === 0){
        return
    }
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutosCarrinhoComQuantidade,
    }

    const historicoDePedidos = lerLocalStorage('historico') ?? []
    const historicoDePedidosAtt = [pedidoFeito, ...historicoDePedidos]

    salvarLocalStorage('historico', historicoDePedidosAtt)
    apagarLocalStorage('carrinho')
    
    window.location = window.location.origin + "/pedidos.html"
}

desenharProdutosCheckout();

document.addEventListener("submit", (evt)=> finalizarCompra(evt))