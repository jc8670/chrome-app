const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  let itemSelected = li.innerText;
  toDos=toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
  saveToDos();
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  li.id=newTodo.id;
  button.addEventListener("click", deleteToDo);
  span.innerText = newTodo.value;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDoVal = toDoInput.value;
  toDoInput.value = "";
  const newToDos = {
    id: Date.now(),
    value:newToDoVal
  };
  toDos.push(newToDos);
  paintToDo(newToDos);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = JSON.parse(localStorage.getItem("todos"));
if (savedToDos){
    toDos=savedToDos;
savedToDos.forEach(element => {

 paintToDo(element);
}

);
}
