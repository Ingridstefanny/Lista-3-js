function apresentarAluno(aluna)
{
    let frase = `${aluna.nome.toUpperCase()} (${aluna.curso})`;
    return frase;
}
const aluna = {
    nome: "Ingrid",
    curso: "ads"
    };
let resultado = apresentarAluno(aluna);
console.log(resultado);