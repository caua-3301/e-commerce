export const catalogo = [
    {
        id: "0",
        nomeProduto: 'Criado Mudo',
        marca: 'Fic-Moveis',
        preco: 450,
        nomeArquivoImg: "movel-01.jpg",
        cozinha: false,
    },
    {
        id: "1",
        nomeProduto: 'Armário',
        marca: 'Fic-Moveis',
        preco: 850,
        nomeArquivoImg: "movel-02.jpg",
        cozinha: true,
    },
    {
        id: "2",
        nomeProduto: 'Roupeiro',
        marca: 'Fic-Moveis',
        preco: 700,
        nomeArquivoImg: "movel-03.jpg",
        cozinha: false,
    },
    {
        id: "3",
        nomeProduto: 'Kit Armário',
        marca: 'Fic-Moveis',
        preco: 1850,
        nomeArquivoImg: "movel-04.jpg",
        cozinha: true,
    },
    {
        id: "4",
        nomeProduto: 'Criado mudo três portas',
        marca: 'Fic-Moveis',
        preco: 500,
        nomeArquivoImg: "movel-05.jpg",
        cozinha: false,
    },
    {
        id: "5",
        nomeProduto: 'Roupeiro duas portas',
        marca: 'Fic-Moveis',
        preco: 730,
        nomeArquivoImg: "movel-06.jpg",
        cozinha: false,
    },
    {
        id: "6",
        nomeProduto: 'Mesa, mais cadeiras',
        marca: 'Fic-Moveis',
        preco: 2000,
        nomeArquivoImg: "movel-07.jpg",
        cozinha: true,
    }
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao))
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave))
}

export function desenharCarrihnoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto)
    const elementoArticle = document.createElement('article')

    const containerCarrinho = document.getElementById(idContainerHtml)

    const classArticle = ['flex', 'bg-slate-100', 'p-1', 'relative', 'rounded-lg',]

    for (const classes of classArticle) {
        elementoArticle.classList.add(classes)
    }

    const cartaoDentroCarrinho = `
      <img 
      src="./files/${produto.nomeArquivoImg}" 
      alt="teste" class='h-20 rounded-lg'>
      <div class='flex flex-col justify-between py-1 px-1 mb-12'>
        <p class='text-sm'>${produto.nomeProduto}</p>
        <p class='text-sm'>$${produto.preco}R$</p>
      </div>
      <div class='flex text-slat-950 items-end absolute bottom-0 right-2'>
        <p id='quantidade-${produto.id}'>${quantidadeProduto}</p>
      </div>`

    elementoArticle.innerHTML = cartaoDentroCarrinho
    containerCarrinho.appendChild(elementoArticle)
}