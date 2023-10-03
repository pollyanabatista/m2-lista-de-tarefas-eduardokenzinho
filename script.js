const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements (arrayObj){
  for(let i = 0; i< arrayObj.length; i++){
    console.log(arrayObj[i]);
  }
};

function createTaskItem (title, type){
  liElement = createElement("li");
  divElement = createElement("div");
  spanElement = createElement("span");
  pElement = createElement("p");
  buttonElement = createElement("button");
};