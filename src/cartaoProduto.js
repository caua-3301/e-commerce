import { catalogo } from "./utilidades";
import { adicionarCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class='border-double border-4  w-48  my-2 mx-2 flex flex-col justify-between p-1.5 group shadow-xl shadow-slate-250 ${produtoCatalogo.cozinha ? 'cozinha' : 'quarto'}'  id="card-produto-${produtoCatalogo.id}">
    <img src="./files/${produtoCatalogo.nomeArquivoImg}" alt="Imagem do criado mudo" class='group-hover:scale-105 duration-200 rounded-md mb-3'> 
    <p class='nome-marca text-sm'>${produtoCatalogo.marca}</p>
    <p class='text-sm'>${produtoCatalogo.nomeProduto}</p>
    <p class='text-sm'>${produtoCatalogo.preco}</p>
    <button id='adicionar-${produtoCatalogo.id}' class='bg-slate-950 text-slate-200 pt-1 h-[1.8rem] hover:bg-slate-800'><span  class="material-symbols-outlined">
    add_shopping_cart
    </span></button>
    </div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => adicionarCarrinho(produtoCatalogo.id));
    }
}