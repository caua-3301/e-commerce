const catalagoProdutos = document.getElementById("container-produto")

function esconderQuartos() {
    const produdosQuartos = Array.from(catalagoProdutos.getElementsByClassName('quarto'))
    const produdosCozinha = Array.from(catalagoProdutos.getElementsByClassName('cozinha'))

    for (const produtom of produdosQuartos){
        produtom.classList.add('hidden')
    }

    for (const produtom of produdosCozinha){
        produtom.classList.remove('hidden')
    }
}

function esconderCozinha() {
    const produdosCozinha = Array.from(catalagoProdutos.getElementsByClassName('cozinha'))
    const produdosQuartos = Array.from(catalagoProdutos.getElementsByClassName('quarto'))

    for (const produtom of produdosCozinha){
        produtom.classList.add('hidden')
    }

    for (const produtom of produdosQuartos){
        produtom.classList.remove('hidden')
    }
}

function exibirTodos() {
    const produtosEscodindo = Array.from(document.getElementsByClassName("group"))
    for (const produtoEsco of produtosEscodindo){
        produtoEsco.classList.remove('hidden')
    }
}

export function inicializarFiltros() {
    document.getElementById("exibir-cozinha").addEventListener("click", esconderQuartos)
    document.getElementById("exibir-quarto").addEventListener("click", esconderCozinha)
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos)
}