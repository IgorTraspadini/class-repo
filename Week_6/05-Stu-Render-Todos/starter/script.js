const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

let todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
showarray();

function showarray() {
  todoList.innerHTML = "";
  for (i in todos) {
    lielem = document.createElement("li");
    lielem.textContent = todos[i];
    todoList.appendChild(lielem);
  }
  todoCountSpan.textContent = todos.length;
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (todoInput.value === '') {
    return;
  }
  else {
    todos.push(todoInput.value);
    todoInput.value = '';
    showarray();
  }
});


