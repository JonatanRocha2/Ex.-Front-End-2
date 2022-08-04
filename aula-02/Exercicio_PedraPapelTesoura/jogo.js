const pedra = 1
const papel = 2
const tesoura = 3

let jogadaJogador = 0
let jogadaComputador = 0
let contadorJogadaCpu = 0
let contadorJogador = 0

function jogadaCpu(){
    jogadaComputador = parseInt(Math.random()*3+1)
    return jogadaComputador
}

let input = prompt('Escolha sua jogada. \n1: Pedra\n2:Papel\n3:Tesoura')

function validarJogada(){
    while(jogadaJogador == 1 || jogadaJogador == 2 || jogadaJogador == 3){
        jogadaJogador = prompt('Escolha sua jogada. \n1: Pedra\n2:Papel\n3:Tesoura')
    } 
}