let phrases = [
  {
    phrase:
      "O futuro é assustador, mas você não pode apenas correr para o passado porque é familiar. Sim, é tentador, mas é um erro.",
    character: "ROBIN",
    serie: "How I Met Your Mother",
  },
  {
    phrase:
      "Se você não está assustado, então você não está se arriscando. E se você não esta se arriscando, então o que você está fazendo? ",
    character: "TED",
    serie: "How I Met Your Mother",
  },
  {
    phrase:
      "Vocês acham que as únicas opções que tem é engolir toda a sua raiva ou jogá-la na cara de alguém. Há ainda uma terceira opção: Você simplesmente deixa passar. E só depois que fizer isso, é que consegue seguir em frente",
    character: "TED",
    serie: "How I Met Your Mother",
  },
  {
    phrase:
      "Não há nada nas regras que diga que eu tenho que me sujeitar a esse tipo de tortura psicológica. Você pode bater na minha cara, mas não pode bater na minha mente.",
    character: "BARNEY",
    serie: "How I Met Your Mother",
  },
  {
    phrase:
      "Eu prometo renovar os meus votos sempre, porque um conjunto de votos de casamentos não cobrem uma vida crescendo e envelhecendo com você, criando os meu filhos com você, e me apaixonando cada vez mais por você, e isso é o que eu prometo fazer pro resto da minha vida.",
    character: "MARSHAL",
    serie: "How I Met Your Mother",
  },
  {
    phrase: "O que pertence ao mar, sempre retorna ao mar",
    character: "PERCY",
    serie: "Percy Jackson",
  },
  {
    phrase:
      "Eu sei que não sou o pai que você merece, mas se você precisar de mim, eu estarei lá, em seus pensamentos e sonhos, estando ao seu lado. Sempre ",
    character: "POSEIDON",
    serie: "Percy Jackson",
  },
  {
    phrase:
      "Definitivamente, tenho fortes sentimentos por você, só que ainda não decidi se é de forma positiva ou negativa.",
    character: "ANNABETH",
    serie: "Percy Jackson",
  },
  {
    phrase: "Você baba quando está dormindo.",
    character: "ANNABETH",
    serie: "Percy Jackson",
  },
  {
    phrase:
      "É gozado como os seres humanos são capazes de enrolar a sua mente em volta das coisas e encaixá-las na sua versão da realidade.",
    character: "PERCY",
    serie: "Percy Jackson",
  },
  {
    phrase:
      "O tempo voa. O tempo não espera por ninguém. O tempo cura todas as feridas. Tudo o que cada um de nós quer, é mais tempo. Tempo para se levantar. Tempo para crescer. Tempo para deixar para lá. Tempo",
    character: "MEREDITH",
    serie: "Greys Anatomy",
  },
  {
    phrase:
      "Eu colei todos os meus caquinhos e não vou pedir perdão pela forma que escolhi para consertar aquilo que você quebrou.",
    character: "MEREDITH",
    serie: "Greys Anatomy",
  },
  {
    phrase:
      "Eu posso ser sexy dormindo. Sou sexy usando um esfregão. Eu sou uma pessoa sexy",
    character: "CRISTINA",
    serie: "Greys Anatomy",
  },
  {
    phrase: "É bom ter medo. Isso significa que você ainda tem algo a perder.",
    character: "RICHARD",
    serie: "Greys Anatomy",
  },
  {
    phrase:
      "Se eu dissesse que meu coração dói tanto que às vezes eu quero arrancá-lo do peito com minhas próprias mãos… eu desmoronaria. E eu não quero desmoronar",
    character: "MIRANDA",
    serie: "Greys Anatomy",
  },
  {
    phrase:
      "Devo ter dito “Eu estou bem, obrigada” pelo menos 37 vezes, e eu não quis dizer isso uma vez sequer. Mas eu notei, quando alguém diz “Como você está?”, eles realmente não querem uma resposta",
    character: "ELENA",
    serie: "The Vampire Diaries",
  },
  {
    phrase:
      "Eu já fiquei apaixonado. É doloroso e sem sentido e as pessoas dão uma importância exagerada para isso.",
    character: "KLAUS",
    serie: "The Vampire Diaries",
  },
  {
    phrase:
      "Então eu acho que nós dois somos ex-seres sobrenaturais. Devemos começar um grupo de apoio?",
    character: "ALARIC",
    serie: "The Vampire Diaries",
  },
  {
    phrase:
      "Matar bichinhos fofos não é o primeiro passo pra virar um assassino em série?",
    character: "CAROLINE",
    serie: "The Vampire Diaries",
  },
  {
    phrase:
      "A humanidade é a melhor fraqueza de um vampiro. Não importa quão fácil é desligar isso, ela continua tentando encontrar seu caminho de volta. Às vezes eu deixo.",
    character: "KATHERINE",
    serie: "The Vampire Diaries",
  },
];

//Verificando se existe algum dado no local Sorage
if (localStorage.getItem("teste") == null) {
  //Se não existir, criar um local, armazenando as frases
  localStorage.setItem("teste", JSON.stringify(phrases));
}

let jsonPhrase = JSON.parse(localStorage.getItem("teste"));
if (JSON.stringify(phrases) != localStorage.getItem("teste")) {
  phrases = jsonPhrase;
}

//Retornando uma frase aleatória dos objetos
function randomNumber() {
  let numberGeneration = Math.floor(
    Math.random() * ([phrases.length - 1] - 1 + 1) + 1
  );

  return numberGeneration;
}

let number = randomNumber();

//Se existir apenas uma frase na variavel, selecionar o índice 0
if (jsonPhrase.length == 1) {
  number = 0;
}

let generatedPhrase = phrases[number];

//Exibindo frase selecionada

const phraseDOM = document.querySelector("h1");
phraseDOM.innerHTML = generatedPhrase.phrase;

function check() {
  //Checando a opção(imagem) e o texto selecionada pelo usuário
  const inputText = document.querySelector(".answer");
  const imageSelect = document.getElementsByName("imageSelect");

  for (var i = 0; imageSelect; i++) {
    if (imageSelect[i].checked) {
      //Se as informações estiverem corretas
      if (
        imageSelect[i].value === generatedPhrase.serie &&
        inputText.value.toUpperCase() === generatedPhrase.character
      ) {
        //Adicionando borda verde no input text
        inputText.style.borderColor = "#69F96E";

        //Adicionando Next
        const circleNext = document.querySelector(".circleNext");
        circleNext.style.display = "block";

        //Removendo frase do array para esta não se repetir
        phrases.splice(number, 1);
        localStorage.setItem("teste", JSON.stringify(phrases));

        //Adicionando escutador de eventos no button Next
        circleNext.addEventListener("click", () => {
          document.location.reload();
        });

        //Se as informações não estiverem corretas
      } else {
        //Adicionando borda vermelha no input text
        inputText.style.borderColor = "#FF0000";

        //Adicionando red
        const circleDOM = document.querySelector(".circle");
        circleDOM.style.background = "#FF0000";

        const circleNext = document.querySelector(".circleNext");

        circleNext.style.display = "none";
      }
    }
  }
}
