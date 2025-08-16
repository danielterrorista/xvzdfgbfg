const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já viu algo relacionado a hollow kinght?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "silkpost"
            },
            {
                texto: "Sim",
                afirmacao: "silksong"
            }
        ]
    },
    {
        enunciado: "Em que ano hollow kinght, em 2014 ou 2017?",
        alternativas: [
            {
                texto: "2014",
                afirmacao: " não"
            },
            {
                texto: "2017",
                afirmacao: " sim"
            }
        ]
    },
    {
        enunciado: "Esse jogo terá uma continuação?",
        alternativas: [
            {
                texto: "Silkong não existe cara.",
                afirmacao: " vai"
            },
            {
                texto: "Sim e vai lançar em breve",
                afirmacao: " vai"
            }
        ]
    },
    {
        enunciado: "Você gosta mais da gameplay ou da lore dp jogo? ",
        alternativas: [
            {
                texto: "Gosto mais da gameplay pois é mais divertido e envolvente",
                afirmacao: " sair"
            },
            {
                texto: "prefiro a lore já que é bem viva e nisteriosa",
                afirmacao: " sair"
            }
        ]
    },
    {
        enunciado: "Você já zerou hollow kinght? ",
        alternativas: [
            {
                texto: "Não, odeio esse jogo e nem passei da primeira area ou si quer abaixei",
                afirmacao: " nunca"
            },
            {
                texto: "Sim, já zerei e fiz até mais ou estou tentando",
                afirmacao: " AMANHÃ"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2025...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();