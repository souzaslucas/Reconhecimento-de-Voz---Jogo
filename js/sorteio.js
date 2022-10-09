/* 
Primeiro:
Criar sorteio dos números. 
*/


const menorValor = 1;
const maiorValor = 100;

const numeroAleatorio = gerarNumeroAleatorio();

const elementoMenorValor = document.getElementById('menor--valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior--valor');
elementoMaiorValor.innerHTML = maiorValor;


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}
console.log(numeroAleatorio)