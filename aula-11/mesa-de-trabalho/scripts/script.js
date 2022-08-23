//pegar os elementos do formulario e adicionar evento 'submit'
let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
})

//pegar os valores dos inputs
const nome = document.getElementById('nome').value
const sobrenome = document.getElementById('sobrenome').value

// console.log(nome, sobrenome)

//normalizando dados

//todos os dados maiusculos
const nomeMaiusculo = nome.toUpperCase()
const sobrenomeMaiusculo = sobrenome.toUpperCase()
console.log(nomeMaiusculo, sobrenomeMaiusculo)

//todos os dados minusculos
const nomeMinusculo = nome.toLowerCase()
const sobrenomeMinusculo = sobrenome.toLowerCase()
console.log(nomeMinusculo, sobrenomeMinusculo)

//retirando os espaços



//substituindo 'a' por '@' e 'e' por '3'
let replace1 = /a/gi
let newNome1 = nome.replace(replace1, '@')

let replace2 = /e/gi
let newNome2 = nome.replace(replace2, '3')
console.log(newNome1, newNome2)