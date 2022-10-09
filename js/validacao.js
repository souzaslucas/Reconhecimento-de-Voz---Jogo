function verificaSeChuteValido(chute){
    const numero = +chute;

    if (Number.isNaN(numero)){
        elementoChute.innerHTML += '<div>Precisa falar um número!</div>';
        return
    }

    if (numeroForMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido! O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroAleatorio){
        document.body.innerHTML = `
            <h2> Você acertou!!</h2>
            <h3> O número secreto foi ${numeroAleatorio}!</h3>
            <button id="jogar--novamente" class= "btn--jogar"> Jogar Novamente </button>
            `
    }
    else if ( numero > numeroAleatorio ){
        elementoChute.innerHTML += `
        <div>O número secreto é menor
        <i class="fa-solid fa-down-long">
        </i>
        </div>
    ` 
    } 
    else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior
        <i class="fa-solid fa-up-long">
        </i>
        </div>
        `
    }
}
function numeroForMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (evt) => {
    if (evt.target.id == 'jogar--novamente'){
        window.location.reload()
    }
})
