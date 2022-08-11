/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/

const listaDeFelinos = [
    {
        title: 'Tigre',
        imgUrl: './imagens/tiger.jpg',
        description: 'O tigre (Panthera tigris) é uma das espécies da subfamília pantherine (família Felidae) pertencente ao gênero Panthera. Encontra-se apenas no continente asiático; É um predador carnívoro e é a maior espécie de felídeo do mundo, juntamente com o leão, ambos podem atingir um tamanho comparável ao de fósseis de felinos maiores.',
        createdAt: '2021-06-01T23:12:11.837Z'
    },
    {
        title: 'Leão',
        imgUrl: './imagens/leon.jpg',
        description: 'O leão (Panthera leo) é um mamífero carnívoro da família Felidae e uma das cinco espécies do gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsaariana (exceto nas regiões de selva da costa atlântica e na bacia do Congo) e em uma pequena área do noroeste da Índia.',
        createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
        title: 'Leopardo',
        imgUrl: './imagens/leopardo.jpg',
        description: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família Felidae. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça, eles são caracterizados por uma modificação no osso hióide que lhes permite rugir. Também é conhecida como a pantera marrom e, quando tem a pelagem completamente escura, como a pantera negra (melanística).',
        createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
        title: 'Pantera negra',
        imgUrl: './imagens/pantera-negra.jpg',
        description: 'A pantera negra é uma variação negra (melanismo) de várias espécies de grandes felinos, especialmente o leopardo (Panthera pardus) e a onça (Panthera onca). Mas deve-se ressaltar que não é uma espécie nova, nem mesmo uma subespécie, é simplesmente uma variação negra desses animais.',
        createdAt: '2021-04-09T23:12:11.837Z'
    },
    {
        title: 'Jaguar',
        imgUrl: './imagens/jaguar.jpg',
        description: 'A onça, onça ou yaguareté (Panthera onca) é um felino carnívoro da subfamília Panterine e do gênero Panthera. É a única das cinco espécies atuais deste gênero que se encontra na América. É também o maior felino da América e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
        createdAt: '2021-05-18T23:12:11.837Z'
    },
    {
        title: 'Guepardo',
        imgUrl: './imagens/chita.jpg',
        description: 'A chita ou chita (Acinonyx jubatus)1 é um membro atípico da família Felidae. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e sua grande velocidade. É o animal terrestre mais rápido, pois atinge a velocidade máxima de 115 km/h em corridas de até quatrocentos ou quinhentos metros.',
        createdAt: '2021-05-22T23:12:11.837Z'
    },
];


//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let itemsList = document.querySelectorAll('.item');

/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {

    // Verifica qual o valor que é retornado pelo Switch
    //console.log(switchValue.checked);

    if (toggleswitch.checked) { //Caso seja verdadeiro, ou seja, está selecionado

        /* Adicionando as classes (dark-mode) css nos elementos capturados */
        body.classList.add('body-dark');
        h1.classList.add('h1-dark');

        //1) Utilizando For..Of
        /*  for (let item of itemsList) {
             item.classList.add('items-dark')
             item.classList.add('items-text-dark')
         } */

        //2) Percorrendo com o ForEach (Recomendado)
        itemsList.forEach(item => {
            item.classList.add('items-dark');
            item.classList.add('items-text-dark');
        });

        /* 3) Alterando os elementos específicos ('h2' e 'p') ao invés de colocar a classe na div pai
         
        itemsList.forEach(item => {
             item.classList.add('items-dark');
 
             //1 maneira: Alterandos os elementos específicos pelo index/posição no DOM
             item.children[1].classList.add('items-text-dark') //[1] equivale ao 'h2'
             item.children[2].classList.add('items-text-dark') //[2] equivale ao 'p'
 
             // 2 maneira: Capturando pelo seletor (Recomendado) 
             item.querySelector('h2').classList.add('items-text-dark')
             item.querySelector('p').classList.add('items-text-dark')
         }); */


    } else { //Caso seja false, ou seja, não está selecionado


        /* Remove as classes adicionadas anteiormente, assim, a página volta para o "modo-claro" */
        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');

        //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
        itemsList.forEach(item => {
            item.classList.remove('items-dark');
            //Uma forma de alterar o texto (poem o elemento principal)
            item.classList.remove('items-text-dark');
        });
    }
}