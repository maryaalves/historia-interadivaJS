const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "Sua gestão priorizou a educação para preparar as futuras gerações."
      },
      {
        texto: "Saúde.",
        afirmacao: "Sua gestão priorizou o atendimento médico de urgência à população."

      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "Modernizou a rede de saneamento para conter os vazamentos."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "Engajou os moradores no consumo consciente dos recursos hídricos."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "Ampliou a frota de coleta, mantendo os bairros limpos."
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "Criou cooperativas de reciclagem e gerou novos empregos."
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: " Melhorar o transporte público.",
        afirmacao: "Apostou na mobilidade urbana e no transporte coletivo."
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "Expandiu as vias urbanas para aliviar os gargalos no tráfego."
      }
    ]

  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: " A cidade ficou mais sustentável.",
        afirmacao: "Ao final do mandato, a cidade se tornou uma referência em desenvolvimento sustentável."
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "Ao final do mandato, a economia local cresceu forte, embora desafios ambientais ainda persistam."

      }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if(atual>= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + "";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}


mostraPergunta();
