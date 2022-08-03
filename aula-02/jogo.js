
while(true){
    let player1 = prompt('Jogador 1: Digite pedra, papel ou tesoura.')
    let player2 = prompt('Jogador 2: Digite pedra, papel ou tesoura.')

    if(player1 == 'pedra' && player2 == 'tesoura'){
        alert('Pedra quebra tesoura. Vencedor: Jogador 1')
    }else if(player1 == 'pedra' && player2 == 'papel'){
        alert('Papel envolve pedra. Vencedor: Jogador 2')
    }else if(player1 == 'pedra' && player2 == 'pedra'){
        alert('Jogo empatado')
    }

    if(player1 == 'papel' && player2 == 'tesoura'){
        alert('Tesoura corta papel. Vencedor: Jogador 2')
    }else if(player1 == 'papel' && player2 == 'pedra'){
        alert('Papel envolve pedra. Vencedor: Jogador 1')
    }else if(player1 == 'papel' && player2 == 'papel'){
        alert('Jogo empatado')
    }

    if(player1 == 'tesoura' && player2 == 'pedra'){
        alert('Pedra quebra tesoura. Vencedor: Jogador 2')
    }else if(player1 == 'tesoura' && player2 == 'papel'){
        alert('Tesoura corta papel. Vencedor: Jogador 2')
    }else if(player1 == 'tesoura' && player2 == 'tesoura'){
        alert('Jogo empatado')
    }
}