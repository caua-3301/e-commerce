import { desenharCarrihnoSimples} from "./src/utilidades";
import { lerLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout() {
    const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho')
    for (const idProduto in idsProdutosCarrinhoComQuantidade){
        desenharCarrihnoSimples(idProduto, "container-produtos-checkout", idsProdutosCarrinhoComQuantidade[idProduto])
    }
}

desenharProdutosCheckout();