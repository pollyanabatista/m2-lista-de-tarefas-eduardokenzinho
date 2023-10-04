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

function renderElements(tasks) {
  const ulElement = document.querySelector(".tasks__list");

  tasks.forEach(task => {
    const liElement = document.createElement("li");
    liElement.textContent = task.title;
    ulElement.appendChild(liElement);
  });
}

renderElements(tasks);

function createTaskItem(task) {
 
  const listItem = document.createElement("li");
  const taskContainer = document.createElement("div");
  const taskTitle = document.createElement("span");
  const taskType = document.createElement("p");
  const deleteButton = document.createElement("button");

  taskTitle.textContent = task.title;
  taskType.textContent = task.type;
  deleteButton.textContent = "Excluir";

  listItem.classList.add(".task__item"); 
  taskContainer.classList.add(".task-info__container"); 

  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(taskType);
  listItem.appendChild(taskContainer);
  listItem.appendChild(deleteButton);

  return listItem;
}

const taskItem = createTaskItem(tasks);

function renderElements(taskArray) {
  const ulElement = document.getElementByClass('.tasks__list');

  ulElement.innerHTML = '';

  for (let i = 0; i < taskArray.length; i++) {
    const currentTask = taskArray[i];
    const taskItemElement = createTaskItem(currentTask);
    ulElement.appendChild(taskItemElement);
  }
}

renderElements(tasks);


