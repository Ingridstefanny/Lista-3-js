function buscarAluno(lista, nomeBuscado)
{
    for(let i = 0; i < lista.length; i++){
        if(lista[i].nome.toLowerCase() === nomeBuscado.toLowerCase()){
            return (lista[i]);
        }
    }
    return null;
}
let lista = [
    {nome: "ingrid", idade: 19},
    {nome: "débora", idade: 19}
];

console.log(buscarAluno(lista, "DÉBORA"));
console.log(buscarAluno(lista, "INGRID"));