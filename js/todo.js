const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
//toDos= localStorage.getItem("todos");
////for (x=0;x<toDos.length;x++){
// console.log(x);
//paintToDo(toDos[x]);
//}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  let itemSelected = li.innerText;
  toDos.splice(
    toDos.indexOf(itemSelected.substring(0, itemSelected.length - 1)),
    1
  );
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteToDo);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
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
