function cadastrarProduto(lista, nome, preco)
{
    let produto = 
    {
        nome: nome,
        preco: preco
    };

    lista.push(produto);
    return lista.length;
}

let lista = [];

console.log(cadastrarProduto(lista, "Caderno", 10));
console.log(lista);
