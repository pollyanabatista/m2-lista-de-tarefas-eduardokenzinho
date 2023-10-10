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
  deleteButton.addEventListener('click', function(){
    const apagaItem = tasks.findIndex(function(item){
      return item.title === task.title && item.type === task.type
    }) 
    tasks.splice(apagaItem,1)
    renderElements(tasks);
  })

  taskContainer.appendChild(taskType);
  taskContainer.appendChild(taskTitle);
  listItem.appendChild(taskContainer);
  listItem.appendChild(deleteButton);

  
  return listItem;


}

const taskItem = createTaskItem(tasks);

function renderElements(taskArray) {
  const ulElement = document.querySelector('ul');

  ulElement.innerHTML = '';

  for (let i = 0; i < taskArray.length; i++) {
    const currentTask = taskArray[i];
    const taskItemElement = createTaskItem(currentTask);
    ulElement.appendChild(taskItemElement);
  }
  
}

renderElements(tasks);


const addButton = document.querySelector('.form__button--add-task');
addButton.addEventListener('click', function (event) {
   event.preventDefault(); 
   const title =  document.getElementById('input_title').value;
   const type = document.querySelector('select').value;
   
   const newObj = {
    title: title,
    type: type,
   }
   tasks.push(newObj);
   renderElements(tasks);
  }
);
