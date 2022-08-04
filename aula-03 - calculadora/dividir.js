function divisao(numeroUm, numeroDois){
    if(numeroUm == 0 || numeroDois == 0){
        return alert('Não se pode dividir por zero')
    }
    
    return numeroUm / numeroDois

}

divisao()

module.exports = divisao;