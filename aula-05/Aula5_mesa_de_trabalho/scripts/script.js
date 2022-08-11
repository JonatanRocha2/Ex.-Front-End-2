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



//dark mode

function textoBranco() {
  let lista = document.querySelectorAll("p, h2");
  for (let i = 0; i < lista.length; i++) {
    lista[i].classList.toggle("head");
  }
}

function titulo() {
  let lista = document.querySelectorAll("h1");
  for (let i = 0; i < lista.length; i++) {
    lista[i].classList.toggle("titulo");
  }
}

function item() {
  let lista = document.getElementsByClassName("item");
  for (let i = 0; i < lista.length; i++) {
    lista[i].classList.toggle("item2");
  }
}

function fundo() {
  let lista = document.querySelector(".dark");
  lista.classList.toggle("fundo");
}

