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
  const ulElement = document.querySelector('ul');

  console.log(`Número de tarefas: ${tasks.length}`);
}

//renderElements(tasks);

function createTaskItem(task) {
 
  const listItem = document.createElement("li");
  const taskContainer = document.createElement("div");
  const taskTitle = document.createElement("p");
  const taskType = document.createElement("span");
  const deleteButton = document.createElement("button");

  taskTitle.textContent = task.title;
  deleteButton.textContent = "Excluir";

  listItem.classList.add("task__item"); 
  taskContainer.classList.add("task-info__container");
  taskType.classList.add("task-type");
  deleteButton.classList.add("task__button--remove-task");

  if(task.type == "Normal"){
    taskType.classList.add("span-normal");
  }else if(task.type == "Urgente"){
    taskType.classList.add("span-urgent");
  }else if(task.type == "Importante"){
    taskType.classList.add("span-important");
  }

  taskContainer.appendChild(taskType);
  taskContainer.appendChild(taskTitle);
  listItem.appendChild(taskContainer);
  listItem.appendChild(deleteButton);

  return listItem;
}

const taskItem = createTaskItem(tasks);

function renderElements(taskArray) {
  const ulElement = document.querySelector('.tasks__list');

  ulElement.innerHTML = '';

  for (let i = 0; i < taskArray.length; i++) {
    const currentTask = taskArray[i];
    const taskItemElement = createTaskItem(currentTask);
    ulElement.appendChild(taskItemElement);
  }
}

renderElements(tasks);


