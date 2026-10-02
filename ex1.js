function nomesMaiusculos(nomes)
{

    let maiusculo = [];

    for(let i = 0; i < nomes.length; i++)
    {
        maiusculo.push(nomes[i].toUpperCase(nomes));
    }
    return maiusculo;
    
}
let nomes = ["ana", "bruno", "carla"];
resultado = nomesMaiusculos(nomes);
console.log(`${resultado}`);

