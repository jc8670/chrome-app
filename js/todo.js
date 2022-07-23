const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function deleteToDo(event){
   const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
  
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click",deleteToDo);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
event.preventDefault();
const newToDo = toDoInput.value;
toDoInput.value = "";
paintToDo(newToDo);

}


toDoForm.addEventListener("submit",handleToDoSubmit);