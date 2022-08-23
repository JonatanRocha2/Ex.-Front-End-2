//criar elemento h1

const h1 = document.createElement('h1')
h1.innerHTML = 'Galeria de Imagens'
document.body.appendChild(h1)

//criar 3 inputs e bloquear apos preenchimento

function criarInputs(){
    for(let i = 0; i < 3; i++){
        let input = document.createElement('INPUT')
        input.setAttribute('type', 'text')
        //input.setAttribute('value', 'Test')
        document.body.appendChild(input)
        input.placeholder = 'Digite aqui'
        //input.disabled = true

        input.addEventListener('change', evento)
        function evento(){
            if(document.querySelectorAll('input').values !== ''){
                input.disabled = true
            } else {
                input.removeEventListener('change')
            }
        }

    }
}

criarInputs()

//add botao enviar

const botao = document.createElement('button')
botao.innerHTML = 'Enviar'
botao.setAttribute('type', 'submit')
document.body.appendChild(botao)

//funcao enviar

/* function enviar(){

} */

