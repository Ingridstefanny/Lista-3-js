function contarVogais(palavra)
{
    let contador = 0;
    for(let i= 0; i < palavra.length; i++)
    {
        if(("aeiou".includes(palavra[i])) === true)
        {
            contador++;
        }
    }
    return contador;
}
let palavra = "sol";
let resultado = contarVogais(palavra);
console.log(resultado);